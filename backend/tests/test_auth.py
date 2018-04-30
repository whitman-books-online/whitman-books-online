from test_api_base import ApiTestBase
from api import auth


# Inherits from ApiTestBase to avoid rewriting SetUp()
class UserTestCase(ApiTestBase):
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

    def test_google_tok_mismatch_headers(self):
        valid_tok_valid_header = auth.google_tok_mismatch_headers(
            self.valid_google_tok, self.valid_auth_header)
        invalid_tok_valid_header = auth.google_tok_mismatch_headers(
            self.invalid_google_tok, self.valid_auth_header)
        invalid_header = auth.google_tok_mismatch_headers(
                self.valid_google_tok, self.invalid_auth_header)
        empty_header = auth.google_tok_mismatch_headers(
                self.valid_google_tok, self.empty_auth_header)
        # Valid header and matching Google token should return false
        self.assertFalse(valid_tok_valid_header)
        # Valid header but Google token mismatch should return a 403 error
        self.assertEqual(invalid_tok_valid_header[1], 403)
        # Invalid and empty headers should return a 401 error message
        self.assertEqual(invalid_header[1], 401)
        self.assertEqual(empty_header[1], 401)


if __name__ == "__main__":
    unittest.main()
