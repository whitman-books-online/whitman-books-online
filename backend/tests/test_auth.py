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
            self.jwt = os.environ['JWT']
        except KeyError:
            sys.exit(1)

    @ignore_warnings
    def test_decoded_and_verified_token(self):
        token = auth.decoded_and_verified_token(self.jwt)
        self.assertIsNotNone(token)

if __name__ == "__main__":
    unittest.main()
