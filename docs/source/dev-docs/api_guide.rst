############
API Guide
############

*Written by Sean Miller.*
*Converted to reStructured Text by Tyler Phillips.*

*Updated 2018-04-11.*

:Run the API:
    ``python3 app.py``
    
    All files must be in the same directory.
    
:Reset the database:
    ``rm data.db``

The API will run on ``http://127.0.0.1:5000/some_endpoint``.  Each time the API
runs, it will generate a new ``data.db``.  

*********************************
1. Adding Books to the Database
*********************************

To add a book to the database, send a POST request to::
    
    /book/isbn_of_book

The body of the request should be the JSON body return from a Node.ISBN query. 
All JSON parsing of the body will happen on the back end.

**********************************
2. Adding a User to the Database
**********************************

To add a user to the database, send a POST request to::
    
    /user/google_token_of_user

The body of the request should look like this::
    
    {
        "imageURL": "http://hello.com",
        "name": "Big Will",
        "email": "ashleygw@whitman.edu",
        "givenName": "Thick Ricky",
        "familyName": "Slick Nicky"
    }

*************************************
3. Adding a Listing to the Database
*************************************

To add a listing to the database, send a POST request to::
    
    /listing/isbn_of_book

The body of the request should look like this::
    
    {
        "price": 27.99,
        "condition": "good",
        "google_tok": "1A",
        "status": "selling"
    }

``google_tok`` must be the Google token of the user making the listing.  At the
moment, the only ``condition``s that I expect are ``"new"``, ``"good"``, 
``"ehh"``, and ``"bad"`` so that Python string comparisons can uphold that 
order (In this case, we are using first-character comparison.).  For the MVP, 
``status`` should always be ``"selling"``.  Price must be a float, *not* a 
string.  If ``google_tok`` does not match a user in the database, or if the 
``isbn`` in the endpoint does not match a book in the database, the request 
will fail.  

****************************
4. User -> Listing -> Book
****************************

This series of steps will be executed when a user wants to see their own 
listings on their user profile.  

**First**, a GET request is sent to::
    
    /book/google_token_of_user

The body will look like this::
    
    {
        "givenName": "Thick Ricky",
        "familyName": "Slick Nicky",
        "name": "Big Will",
        "listings": [
            1,
            2
        ],
        "google_tok": "1A",
        "email": "ashleygw@whitman.edu",
        "imageURL": "http://hello.com"
    }

``listings`` is a list of all ``listing_id``s that correspond to each of the 
user's listings.  The other information can be used to load the user's profile,
including the image tied to their Google account, name, email address, etc.  

**Second**, use ``listings`` to make the following GET request::
    
    /listings/listing_ids_separated_by_commas

The response will look like this::
    
    {
        "listings": [
            {
                "status": "selling",
                "listing_id": 1,
                "timestamp": "2018-04-16 19:57:26.674665",
                "condition": "ehh",
                "price": 24.99
            },
            {
                "status": "selling",
                "listing_id": 2,
                "timestamp": "2018-04-16 19:57:35.568820",
                "condition": "good",
                "price": 27.99
            }
        ],
        "isbns": [
            1
        ]
    }

``listings`` is all of the listings tied to the user.  ``isbns`` is the list of
ISBNs corresponding to the books paired with these listings.  Notice that, in 
this case, both listings are for the same book, which has an ``isbn`` of 1.  
Use the ``listings`` data to edit the user's home page.  

**Third**, use ``isbns`` for the following GET request::
    
    /book/isbns_seperated_by_commas

The response will look like this::
    
    {
        "books": [
            {
                "subtitle": "The Musical",
                "listing_ids": [
                    1,
                    2
                ],
                "canonicalVolumeLink": "TRIPLElol",
                "title": "Moby Dick",
                "isbn": 1,
                "thumbnail": "http://blahBLAHblah",
                "smallThumbnail": "http://blahblah",
                "authors": "Will Smith, Edgar Wright",
                "publishedDate": "1975",
                "categories": "Artificial Intelligence, Computer Science",
                "infoLink": "doublelol",
                "previewLink": "lolwhatisthis"
            }
        ]
    }

This information will be used to construct the book objects.  Notice that 
users, listings, and books will need to be matched thorugh ``listing_id``.  
This will be cumbersome for the front end, but, hopefully, it will be more 
streamlined in the final product.  

****************************
5. Book -> Listing -> User
****************************

This pipeliune will be used when a user is looking to buy a used textbook from 
our site.  

**First**, the user will search by author, title, subtitle, category, or date 
published.  The response the user types into the search bar will be used in a 
GET request to the following endpoint.  

**Important:** The user's search query must have spaces replaced by underscores
("_") and must be converted to all lower case before being sent to the back end
through the endpoint::
    
    /booklist/search_value

The response will look like this (for ``/booklist/will_smith`)::
    
    {
        "books": [
            {
                "subtitle": "The Musical",
                "listing_ids": [
                    1,
                    2
                ],
                "canonicalVolumeLink": "TRIPLElol",
                "title": "Moby Dick",
                "isbn": 1,
                "thumbnail": "http://blahBLAHblah",
                "smallThumbnail": "http:://blahblah",
                "authors": "Will Smith, Edgar Wright",
                "publishedDate": "1975",
                "categories": "Artificial Intelligence, Computer Science",
                "infoLink": "doublelol",
                "previewLink": "lolwhatisthis"
            }
        ]
    }

This data can be used to construct the book objects.  

**Second**, use ``listing_id``s to perform the following GET request.  

**Important:** This is where condition and price ordering comes into play.  To 
retrieve listings without any ordering::
    
    /listings/listing,ids,separated,by,commas+

To retrieve listings ordering by lowest -> highest price::
    
    /listings/listing,ids,separated,by,commas+price

To retrieve listings ordering by best -> worst condition::
    
    /listings/listing,ids,separated,by,commas+condition

The response will look like this::
    
    {
        "listings": [
            {
                "condition": "ehh",
                "status": "selling",
                "listing_id": 1,
                "google_tok": "1A",
                "price": 24.99,
                "timestamp": "2018-04-16 19:57:26.674665"
            },
            {
                "condition": "good",
                "status": "selling",
                "listing_id": 2,
                "google_tok": "1A",
                "price": 27.99,
                "timestamp": "2018-04-16 19:57:35.568820"
            }
        ],
        "google_tokens": [
            "1A"
        ]
    }

Use this data to construct the listing objects.  

_`6.3`
**Third**, use ``google_tokens`` for a GET request to the following endpoint::
    
    /userlist/google,tokens,separated,by,commas

The response will look like this::
    
    {
        "users": [
            {
                "name": "Big Will",
                "listing_ids": [
                    1,
                    2
                ],
                "givenName": "Thick Ricky",
                "google_tok": "1A",
                "imageURL": "http://hello.com",
                "familyName": "Slick Nicky",
                "email": "ashleygw@whitman.edu"
            }
        ]
    }

Again, the ``listing_id`` will be used to match books to listings to users.  

**************************
6. Loading the Home Page
**************************

When a user first enters Whitman Books Online, they enter a home page with 
listings ordered from most to least recent.  To get most-recent listings::
    
    /listings/home

This will return a JSON object similar to this::
    
    {
        "listings": [
            {
                "condition": "good",
                "price": 27.99,
                "listing_id": 2,
                "status": "selling",
                "timestamp": "2018-04-16 19:57:35.568820"
            },
            {
                "condition": "ehh",
                "price": 24.99,
                "listing_id": 1,
                "status": "selling",
                "timestamp": "2018-04-16 19:57:26.674665"
            }
        ],
        "google_tokens": [
            "1A"
        ],
        "isbns": [
            1
        ]
    }

Notice that the listings are in order from most to least recent.  From here, 
the user and book objects will be loaded *separately*.  For book-object queries
from ISBNs, see here_.  Use the data from those queries to construct the full 
home page.  

.. _here: `6.3`_

*********************
7. Deleting Objects
*********************

To delete a user, send a ``DELETE`` request to::
    
    /user/google_token_of_user

To delete a listing, send a ``DELETE`` request to::
    
    /listing/listing_id

I don't forsee us wanting to remove book objects from the database (at least 
for the MVP), but it works as you'd expect:  Send a ``DELETE`` request to::
    
    /book/isbn