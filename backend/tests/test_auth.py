import os
import sys
import unittest
import warnings

from api import auth

# Define decorator to supress an eroneous warning
# https://stackoverflow.com/a/26620811


def ignore_warnings(test_func):
    def do_test(self, *args, **kwargs):
        with warnings.catch_warnings():
            warnings.simplefilter("ignore", ResourceWarning)
            test_func(self, *args, **kwargs)
    return do_test


class UserTestCase(unittest.TestCase):
    def setUp(self):
        try:
            self.valid_jwt = os.environ['VALID_JWT']
            self.valid_email = os.environ['VALID_EMAIL']
            # Assumes decoded_and_verified_token() works
            self.assertIsNotNone(
                auth.decoded_and_verified_token(
                    self.valid_jwt))
        except KeyError:
            sys.exit(1)
        self.alt_email = 'other_user@whitman.edu'
        self.invalid_jwt = (
            'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFmZmM2MjkwN2E0NDYxODJhZGMxZmE0ZT'
            'gxZmRiYTYzMTBkY2U2M2YifQ.eyJhenAiOiIzMTc1OTY2Nzg3OTItMmVrZGtkc'
            'mRsZ3NxZGF1ZGFhZzd0N203cWY0bTBiMTcuYXBwcy5nb29nbGV1c2VyY29udGV'
            'udC5jb20iLCJhdWQiOiIzMTc1OTY2Nzg3OTItMmVrZGtkcmRsZ3NxZGF1ZGFhZ'
            'zd0N203cWY0bTBiMTcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWI'
            'iOiIxMTY2MDU2ODQwMDgyNjkwNjExMjgiLCJoZCI6IndoaXRtYW4uZWR1IiwiZ'
            'W1haWwiOiJmYXJtYW5ybEB3aGl0bWFuLmVkdSIsImVtYWlsX3ZlcmlmaWVkIjp'
            '0cnVlLCJhdF9oYXNoIjoicDNZamFYamZ3RWZEN1JiSlhJNnR3QSIsImV4cCI6M'
            'TUyNDY4Mzc2MiwiaXNzIjoiYWNjb3VudHMuZ29vZ2xlLmNvbSIsImp0aSI6IjR'
            'lN2UwZGI0OThkYTIzMTU5ZDhlN2FmYWE4NzExNGI3MDFkZGU5NmEiLCJpYXQiO'
            'jE1MjQ2ODAxNjIsIm5hbWUiOiJSaWNoYXJkIEZhcm1hbiIsInBpY3R1cmUiOiJ'
            'odHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLTdWUDcySDlxZVJJL'
            '0FBQUFBQUFBQUFJL0FBQUFBQUFBQXM0L1VrdEtBMWdnTnV3L3M5Ni1jL3Bob3R'
            'vLmpwZyIsImdpdmVuX25hbWUiOiJSaWNoYXJkIiwiZmFtaWx5X25hbWUiOiJGY'
            'XJtYW4iLCJsb2NhbGUiOiJlbiJ9.TDxHNjSV5o5NZJzaQnulFj_sYu-8QdmPBE'
            'TTh032P-cxh3M2XJHgJ96oiRldHeQ8J30WmwGz21e9zYdyE4S2HiSX1JAoFi2J'
            'QpWIHEbdVM5cddypoPKN4yTBiqHbsyS-S5IwVqUHXb2O9_ARBmu1WIaKijQ5i-'
            'fxy5cQzz8ih1X9Kf2LouYA17hdMkHXTqQ5iL01obrBN-GsSL-FlePFYx5CXk7Y'
            'UrMlgoEym6ly4gWaoiLoXi8ubSu1OTllTGCrk4HC-chlyLQ2EToeWAFfUCNSWl'
            'jFYRwm81RSIeFV5oQEClycnWPfIhXMXaCoGdxqrTdzd1pfe1GQaxCuHhAnCw'
        )
        self.valid_auth_header = {'Authorization': 'Bearer ' + self.valid_jwt}
        self.invalid_auth_header = {
            'Authorization': 'Bearer ' + self.invalid_jwt}
        self.empty_auth_header = {}

    def test_get_encoded_token_from_headers(self):
        encoded_token = auth.get_encoded_token_from_headers(
            self.valid_auth_header)
        no_token = auth.get_encoded_token_from_headers(self.empty_auth_header)
        self.assertIsNotNone(encoded_token)
        self.assertIsNone(no_token)

    def test_decoded_and_verified_token_from_headers(self):
        valid_token = auth.decoded_and_verified_token_from_headers(
            self.valid_auth_header)
        invalid_token = auth.decoded_and_verified_token_from_headers(
            self.invalid_auth_header)
        empty_token = auth.decoded_and_verified_token_from_headers(
            self.empty_auth_header)
        self.assertIsInstance(valid_token, dict)
        self.assertIsNone(invalid_token)
        self.assertIsNone(empty_token)

    def test_email_mismatch_decoded_token(self):
        valid_email_valid_header_mismatch = auth.email_mismatch_headers(
            self.valid_email, self.valid_auth_header)
        alt_email_valid_header = auth.email_mismatch_headers(
            self.alt_email, self.valid_auth_header)
        invalid_header = auth.email_mismatch_headers(
            self.valid_email, self.invalid_auth_header)
        empty_header = auth.email_mismatch_headers(
            self.valid_email, self.empty_auth_header)
        # Valid header and matching email should return False for the mismatch
        self.assertFalse(valid_email_valid_header_mismatch)
        # Valid header but email mismatch should return a 403 error message
        self.assertEqual(alt_email_valid_header[1], 403)
        # Invalid and empty headers should return a 401 error message
        self.assertEqual(invalid_header[1], 401)
        self.assertEqual(empty_header[1], 401)


if __name__ == "__main__":
    unittest.main()
