from test_api_base import ApiTestBase
from api import auth
import requests


# Inherits from ApiTestBase to avoid rewriting SetUp()
class UserTestCase(ApiTestBase):
    def setUp(self):
        super(UserTestCase, self).setUp()
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

    def user_exists(self):
        """Helper function to ensure self.valid_google_tok has a user entry
        """
        user_exists = requests.post(
            self.user_endpoint,
            headers=self.valid_auth_header,
            params=self.user_data)
        self.assertIn(user_exists.status_code, [200, 201])

    def test_user_delete(self):
        self.user_exists()
        authorized_header = requests.delete(
            self.user_endpoint, headers=self.valid_auth_header)
        self.user_exists()
        unauthorized_header = requests.delete(
            self.user_endpoint, headers=self.invalid_auth_header)
        self.user_exists()
        empty_header = requests.delete(
            self.user_endpoint,
            headers=self.invalid_auth_header)
        self.user_exists()
        nonexistent_user = requests.delete(
            self.nonexistent_endpoint,
            headers=self.valid_auth_header)
        self.user_exists()
        self.assertEqual(authorized_header.status_code, 200)
        self.assertEqual(unauthorized_header.status_code, 401)
        self.assertEqual(empty_header.status_code, 401)
        # Even though a 404 would make sense, the user is more fundamentally
        # trying to perform an unathorized action
        self.assertEqual(nonexistent_user.status_code, 403)


# Inherits from ApiTestBase to avoid rewriting SetUp()
class UserListTestCase(ApiTestBase):
    def setUp(self):
        super(UserListTestCase, self).setUp()
        # Some testing logic is based on this endpoint being for the valid user
        # Expect some breakage if you change it
        self.endpoint = self.api_base + \
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

    def user_exists(self):
        """Helper function to ensure self.valid_google_tok has a user entry
        """
        user_exists = requests.post(
            self.endpoint,
            headers=self.valid_auth_header,
            params=self.user_data)
        self.assertIn(user_exists.status_code, [200, 201])

    def test_userlist_get(self):
        # Only gets a list of one user, since the authorization requirements
        # for user creation make testing a little bit harder
        self.user_exists()
        authorized_header = requests.get(
            self.endpoint, headers=self.valid_auth_header)
        unauthorized_header = requests.get(
            self.endpoint, headers=self.invalid_auth_header)
        empty_header = requests.get(
            self.endpoint,
            headers=self.invalid_auth_header)
        nonexistent_user = requests.get(
            self.nonexistent_endpoint,
            headers=self.valid_auth_header)
        self.assertEqual(authorized_header.status_code, 200)
        self.assertEqual(unauthorized_header.status_code, 401)
        self.assertEqual(empty_header.status_code, 401)
        self.assertEqual(nonexistent_user.status_code, 404)


if __name__ == '__main__':
    unittest.main()
