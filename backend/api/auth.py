from google.oauth2 import id_token
from google.auth.transport import requests

def get_user_email(user_token):
    """Determine the email of the given Google Oauth2 token

    Gets the email address from Google and also verifies the token. Exception
    is raised if an email isn't found for whatever reason or if token
    verification fails.

    Args:
        user_token (str): The client token to verify and get email from

    Returns:
        str: Email address

    Raises:
        ValueError: No valid email found

    """
    try:
        decoded_token = verify_user_token(user_token)
    except ValueError:
        raise ValueError('No valid email found')

    email = decoded_token['email']

    return email

def verify_user_token(user_token):
    """Verify that the user's token is legit

    Verifies the JWT signature, the aud claim, and the exp claim

    Args:
        user_token (str): The client token to verify and get email from

    Returns:
        Decoded JWT

    Raises:
        ValueError: Token is invalid
    """
    # Modified from https://developers.google.com/identity/sign-in/web/backend-auth

    # Client ID of the Google API
    CLIENT_ID = 'whitman-books'

    # Raises ValueError if token is invalid
    decoded_token = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
    # Raises ValueError if token isn't from Google
    if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
        raise ValueError('Wrong issuer.')

    return decoded_token
