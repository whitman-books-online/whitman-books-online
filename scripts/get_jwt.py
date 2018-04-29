#!/usr/bin/env python3
import os
import sys
import json


def decode_jwt_from_console():
    """Get JWT from token issued by Google

    Can be found as a response from Google when signing into front end app.
    Prints JWT and puts it on the system clipboard, ready to be pasted.
    """
    import pyperclip
    response = json.loads(sys.argv[1])
    jwt_key = 'id_token'
    jwt = response[jwt_key]
    pyperclip.copy(jwt)
    print(jwt)


if __name__ == '__main__':
    decode_jwt_from_console()
