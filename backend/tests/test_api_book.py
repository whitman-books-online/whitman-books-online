from test_api_base import ApiTestBase
from api import auth
import requests


class BookTestCase(ApiTestBase):
    def setUp(self):
        super(UserTestCase, self).setUp()
        self.book_endpoint = self.api_base + \
            'book/' + str("9781617750250")
        self.book_data = {
            "title": "_title",
            "author": "_author",
        }
        self.nonexistent_endpoint = self.api_base + \
            'book/' + str("1")

    # Is this even neccesary?
    def book_deleted(self, book_endpoint):
        book_not_exists = requests.delete(  # Book deleting does not allow anybody to do it
            self.book_endpoint,			   # how should we deal with this?
            headers=self.valid_auth_header,
            params=self.user_data)
        self.assertIn(user_not_exists.status_code, [200, 404])

    def test_book_post(self):
        # Try posting with invalid credentials
        unauthorized_header = requests.post(
            self.book_endpoint,
            headers=self.invalid_auth_header,
            params=self.book_data)  # Should this be book data?
        self.assertEqual(unauthorized_header.status_code, 401)
        # Try posting without supplying credentials
        empty_header = requests.post(
            self.book_endpoint,
            headers=self.empty_auth_header,
            params=self.book_data)
        self.assertEqual(empty_header.status_code, 401)
        # Try posting with valid credentials
        authorized_header = requests.post(
            self.book_endpoint,
            headers=self.valid_auth_header,
            params=self.book_data)
        self.assertEqual(authorized_header.status_code, 201)

    def book_exists(self):
        # Make sure book either already exists, or now exists
        book_exists = requests.post(
            self.book_endpoint,
            headers=self.valid_auth_header,
            params=self.book_data)
        self.assertIn(user_exists.status_code, [200, 201])

    def test_book_get(self):
        self.book_exists()
        authorized_header = requests.get(
            self.book_endpoint, headers=self.valid_auth_header)
        unauthorized_header = requests.get(
            self.book_endpoint, headers=self.invalid_auth_header)
        empty_header = requests.get(
            self.book_endpoint,
            headers=self.invalid_auth_header)
        nonexistent_book = requests.get(
            self.nonexistent_endpoint,
            headers=self.valid_auth_header)
        self.assertEqual(authorized_header.status_code, 200)
        self.assertEqual(unauthorized_header.status_code, 401)
        self.assertEqual(empty_header.status_code, 401)
        self.assertEqual(nonexistent_user.status_code, 404)

    def test_book_delete(self):
        self.user_exists()
        authorized_header = requests.delete(
            self.book_endpoint, headers=self.valid_auth_header)
        self.user_exists()
        unauthorized_header = requests.delete(
            self.book_endpoint, headers=self.invalid_auth_header)
        self.user_exists()
        empty_header = requests.delete(
            self.book_endpoint, headers=self.empty_auth_header)
        self.user_exists()
        nonexistent_book = requests.delete(
            self.nonexistent_book, headers=self.valid_auth_header)
        # Should reject credentials every time, regardless of the user
        self.assertEqual(authorized_header.status_code, 403)
        self.assertEqual(unauthorized_header.status_code, 403)
        self.assertEqual(empty_header.status_code, 403)
        self.assertEqual(nonexistent_book.status_code, 403)


class BookListTestCase(ApiTestBase):
    def setUp(self):
        super(BookListTestCase, self).setUp()
        self.endpoint = self.api_base + \
            'book/' + str("9781617750250")
        self.book_data = {
            "title": "_title",
            "author": "_author",
        }
        self.nonexistent_endpoint = self.api_base + \
            'book/' + str("1")

    def book_exists(self):
        # Make sure book either already exists, or now exists
        book_exists = requests.post(
            self.book_endpoint,
            headers=self.valid_auth_header,
            params=self.book_data)
        self.assertIn(user_exists.status_code, [200, 201])

    def test_bookList_get(self):
        self.book_exists()
        authorized_header = requests.get(
            self.endpoint, headers=self.valid_auth_header)
        unauthorized_header = requests.get(
            self.endpoint, headers=self.invalid_auth_header)
        empty_header = requests.get(
            self.endpoint, headers=self.empty_auth_header)
        nonexistent_book = requests.get(
            self.nonexistent_endpoint, headers=self.valid_auth_header)


if __name__ == '__main__':
    unittest.main()
