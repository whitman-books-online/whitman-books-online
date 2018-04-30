from test_with_credentials import TestWithCredentials
from api import auth
import requests


# Inherits from TestWithCredentials to avoid rewriting SetUp()
class UserTestCase(TestWithCredentials):
    def setUp(self):
        super(UserTestCase, self).setUp()
        self.api_base = 'http://localhost:5000/'
        # Some testing logic is based on this endpoint being for the valid user
        # Expect some breakage if you change it
        self.user_endpoint = self.api_base + \
            'user/' + str(self.valid_google_tok)
        self.user_data = {
            "imageURL": self.valid_token["picture"],
            "email": self.valid_token["email"],
            "name": self.valid_token["name"],
            "givenName": self.valid_token["given_name"],
            "familyName": self.valid_token["family_name"],
        }
        self.nonexistent_endpoint = self.api_base + \
            'user/' + str(self.invalid_google_tok)

    def user_deleted(self, user_endpoint):
        """Helper function for deleting a user, using valid credentials

        Because users are only allowed to delete themselves, this should only
        succeed when ``user_endpoint`` corresponds to the valid credentials.
        """
        user_not_exists = requests.delete(
            self.user_endpoint,
            headers=self.valid_auth_header,
            params=self.user_data)
        self.assertIn(user_not_exists.status_code, [200, 404])

    def test_user_post(self):
        self.user_deleted(self.user_endpoint)
        # Try posting using own valid credentials
        authorized_header = requests.post(
            self.user_endpoint,
            headers=self.valid_auth_header,
            params=self.user_data)
        self.assertEqual(authorized_header.status_code, 201)
        self.user_deleted(self.user_endpoint)
        # Try posting with invalid credentials
        unauthorized_header = requests.post(
            self.user_endpoint,
            headers=self.invalid_auth_header,
            params=self.user_data)
        self.assertEqual(unauthorized_header.status_code, 401)
        self.user_deleted(self.user_endpoint)
        # Try posting without supplying credentials
        empty_header = requests.post(
            self.user_endpoint,
            headers=self.empty_auth_header, params=self.user_data)
        self.assertEqual(empty_header.status_code, 401)

    # Assumes user does exist
    def test_user_get(self):
        user_exists = requests.post(
            self.user_endpoint,
            headers=self.valid_auth_header,
            params=self.user_data)
        # Ensure already existed or does now exist
        self.assertIn(user_exists.status_code, [200, 201])
        authorized_header = requests.get(
            self.user_endpoint, headers=self.valid_auth_header)
        unauthorized_header = requests.get(
            self.user_endpoint, headers=self.invalid_auth_header)
        empty_header = requests.get(
            self.user_endpoint,
            headers=self.invalid_auth_header)
        nonexistent_user = requests.get(
            self.nonexistent_endpoint,
            headers=self.valid_auth_header)
        self.assertEqual(authorized_header.status_code, 200)
        self.assertEqual(unauthorized_header.status_code, 401)
        self.assertEqual(empty_header.status_code, 401)
        self.assertEqual(nonexistent_user.status_code, 404)


# # Inherits from TestWithCredentials to avoid rewriting SetUp()
# class UserListTestCase(TestWithCredentials):
#     pass

if __name__ == '__main__':
    unittest.main()
