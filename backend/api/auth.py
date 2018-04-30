from google.oauth2 import id_token
from google.auth.transport import requests

client_ids = (
    "317596678792-2ekdkdrdlgsqdaudaag7t7m7qf4m0b17.apps.googleusercontent.com")
authorized_email_domains = ("whitman.edu")


def decoded_and_verified_token(encoded_token):
    """Verify and get the client's token

    Verifies the token's signature, expiration, that it is from the API created
    by the front end, **that the email domain is one from
    ``authorized_email_domains`` (whitman.edu)**, and that Google issued it.

    Args:
        encoded_token (str): The client token to verify and get email from

    Returns:
        dict: validated token
        NoneType: if token is invalid for whatever reason
    """
    # Modified from
    # https://developers.google.com/identity/sign-in/web/backend-auth
    try:
        # Client ID of the Google API (found in Developer Console)

        # Raises ValueError if token is invalid
        decoded_token = id_token.verify_oauth2_token(
            encoded_token, requests.Request())

        if decoded_token["aud"] not in [client_ids]:
            raise ValueError("Could not verify audience (API client ID)")

        if decoded_token["hd"] not in authorized_email_domains:
            raise ValueError("Domain of token not authorized")

        if decoded_token["iss"] not in [
                "accounts.google.com", "https://accounts.google.com"]:
            raise ValueError("Token not issued by Google")

    except ValueError:
        return None

    return decoded_token


def unauthorized_headers(headers):
    """Return Flask return tuple if request is unauthorized

    Example:
        Intended to be used in a conditional within a Flask HTTP method to see
        if the user is authorized:

        .. code-block:: python

           auth_error = unauthorized_headers(flask.request.headers)
           if auth_error:
               return auth_error
    """
    decoded_token = decoded_and_verified_token_from_headers(headers)
    if not decoded_token:
        return {
            "message": "No valid token provided (possibly expired or not provided)"}, 401
    else:
        return False


def decoded_and_verified_token_from_headers(headers):
    """Get decoded token from HTTP headers

    Get encoded token from headers and use ``verify_encoded_token()`` to
    verify token before returning the decoded token.

    Args:
        headers (dict of str): headers from ``flask.request.headers``

    Returns:
        dict: validated token
        NoneType: if token is invalid for whatever reason
    """
    encoded_token = get_encoded_token_from_headers(headers)
    decoded_token = decoded_and_verified_token(encoded_token)
    return decoded_token


def get_encoded_token_from_headers(headers):
    """Read encoded bearer token from HTTP header

    Args:
        flask.request.headers

    Returns:
        str: encoded token (JWT)
        NoneType: when no Authorization header present
    """
    try:
        auth_header = headers["Authorization"]
        encoded_token = auth_header.split(" ")[1]
    except KeyError:
        encoded_token = None
    return encoded_token


def email_mismatch_headers(email, headers):
    """Process HTTP header for validated token and compare with email

    401 error if token is missing or invalid, 403 if the token's email doesn't
    match the given email. False if they match.

    Args:
        email (str): email address that has authorization
        headers (dict of str): dictionary of HTTP headers in request

    Returns:
        (dict, int): A tuple to be returned by Flask when header is unauthorized
        bool: False when authorized
    """
    decoded_token = decoded_and_verified_token_from_headers(headers)

    if not decoded_token:
        return {
            "message": "No valid token provided (possibly expired or not provided)"}, 401
    elif email != decoded_token["email"]:
        return {"message": email + " is not authorized"}, 403
    else:
        return False


def google_tok_mismatch_headers(google_tok, headers):
    """Process HTTP header for validated token and compare with Google ID

    401 error if token is missing or invalid, 403 if the token's ID doesn't
    match the given ID. False if they match.

    Args:
        google_tok (str): Google ID that has authorization
        headers (dict of str): dictionary of HTTP headers in request

    Returns:
        (dict, int): A tuple to be returned by Flask when header is unauthorized
        bool: False when authorized
    """
    decoded_token = decoded_and_verified_token_from_headers(headers)

    if not decoded_token:
        return {
            "message": "No valid token provided (possibly expired or not provided)"}, 401
    # It looks like the "sub" key in the JWT is what corresponds to the Google
    # ID, but we'll see if this holds true...
    elif google_tok != decoded_token["sub"]:
        return {"message":  str(google_tok) + " is not authorized"}, 403
    else:
        return False
