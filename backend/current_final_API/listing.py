from sqlalchemy import Table, Column, Integer, ForeignKey, desc, asc
from sqlalchemy.orm import relationship
from flask_restful import Resource, reqparse
from math import ceil # for ceil used for paging

from db import db

page_size = 20

class ListingModel(db.Model):
    #used to be ^^ class ListingModel(db.Model):
    __tablename__ = 'listings' #our items database

    listing_id = db.Column(db.Integer, primary_key=True) # listing id's are assigned by integer key, not used by constructor
    price = db.Column(db.Float(precision = 2))
    condition = db.Column(db.String(15))
    isbn = db.Column(db.Integer, db.ForeignKey('books.isbn'))
    book = db.relationship('BookModel')
    google_tok = db.Column(db.String, db.ForeignKey('users.google_tok'))
    user = db.relationship('UserModel')
    status = db.Column(db.String(15))


    def __init__(self, price, condition, isbn, google_tok, status):
        self.price = price
        self.condition = condition
        self.isbn = isbn
        self.google_tok = google_tok
        self.status = status

    #Both json functions below used to also include 'isbn': self.isbn

    def listing_json_w_user(self):
        try:
            return {"listing_id": self.listing_id, 'price': self.price, 'condition': self.condition, 'status': self.status, 'user': self.user.user_json_wo_listings()}
        except:
            return {"Message": "User does not exist in DB"}

    def listing_json_w_book(self):
        try:
            return {"listing_id": self.listing_id, 'price': self.price, 'condition': self.condition, 'status': self.status, 'book': self.book.book_json_wo_listings()}
        except:
            return {"Message": "Book does not exist in DB"}

    def listing_json_w_book_and_user(self):
        try:
            return {"listing_id": self.listing_id, 'price': self.price, 'condition': self.condition, 'status': self.status, 'book': self.book.book_json_wo_listings(), 'user': self.user.user_json_wo_listings()}
        except:
            # return {"message": "user deleted"}
            return {"Message": "Object does not exist in DB"}

    def bare_json(self):
        return {'price': self.price, 'condition': self.condition, 'status': self.status}

    #def get_user(self):
    #    user = []
    #    user.append(user.find_by_google_tok(self.google_tok))
    #    return user

    @classmethod
    def find_by_isbn(cls, isbn): # abstracted and redifined from get
        listings = ListingModel.query.filter_by(name=isbn).all() # returns all listings of isbn as a list
        if len(listings) > 0:
            return listings
        return None

    @classmethod
    def find_by_listing_id(cls, listing_id):
        listing = ListingModel.query.filter_by(listing_id=listing_id).first()
        #For next time... How to search ONLY listing_id column???
        if listing:
            return listing
        return None


    def save_to_db(self):
        # write to database
        # abstracted just like find_by_name so that it can be used by both post and put
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

class Listing(Resource):
    parser = reqparse.RequestParser() #Item class parser
    parser.add_argument("listing_id", #requests must be in format { "price": float}
        type=int,
        required=False,
        help="FORMAT ERROR: This request must have be string : integer "
    )
    parser.add_argument("price", #requests must be in format { "price": float}
        type=float,
        required=False,
        help="FORMAT ERROR: This request must have be string : float where string == price "
    )
    parser.add_argument("condition",
        type=str,
        required=False,
        help="FORMAT ERROR: This request must have be string : string "
    )
    parser.add_argument("isbn",
        type=int,
        required=False,
        help="FORMAT ERROR: This request must have be string : integer where string == price "
    )
    parser.add_argument("google_tok",
        type=str,
        required=False,
        help="FORMAT ERROR: This request must have be string : integer where string == price "
    )
    parser.add_argument("status",
        type=str,
        required=False,
        help="FORMAT ERROR: This request must have be string : string where string == price "
    )

    def get(self, ids): # get request, looking for all listing objects from ID's,
        isbns = []
        ids = ids.split(",")
        for id_ in range(0, len(ids)):
            print(ids)
            ids[id_] = int(ids[id_]) # must be in format ISBN, ISBN, etc. , LAST ISBN CANNOT BE FOLLOWED BY COMMA, single ISBN should not have comma
        all_listings = ListingModel.query.filter(ListingModel.listing_id.in_(ids)).all()
        for l in all_listings:
            if l.isbn not in isbns: # avoid duplicates
                isbns.append(l.isbn)
        return {"listings": [listing.bare_json() for listing in all_listings], "isbns": isbns}
        #return {"listings": [listing.listing_json_w_user() for listing in ListingModel.query.filter_by(isbn=isbn).order_by(ListingModel.price).all()]}

        # l = ListingModel.find_by_isbn(isbn)
        # if l:
        #     return l.listing_json_w_user()
        # return {"message": "Item not found"}, 404

    def post(self, ids):
        #Code below shouldn't be necessary
        #if ListingModel.find_by_isbn(isbn):
        #    return {'message': 'An item with isbn ' + isbn + 'already exists.'}, 400
        data = Listing.parser.parse_args() # what the user will send to the post request (in good format)
        # In our case, the user sends the price as JSON, but the item name gets passed into the function
        isbn = int(ids)
        item = ListingModel(data["price"], data["condition"], isbn, data["google_tok"], data["status"])
        try:
            item.save_to_db()
        except:
            return{"message": "An error occurred while inserting"}, 500 # internal server error

        return {"message": "post was successful"}, 201 #post was successful

    def delete(self, ids):
        data = Listing.parser.parse_args()
        item = ListingModel.find_by_listing_id(data["listing_id"])
        if item:
            item.delete_from_db()
            return {"message": "Item deleted"}
        return {"message": "Listing with ID " + str(data["listing_id"]) + " does not exist"}

    def put(self, listing_id, price, condition, isbn, google_tok, status): # aka "mostly just use to change status"
        data = Listing.parser.parse_args() # only add valid JSON requests into data

        if(listing_id):
            item = ListingModel.find_by_listing_id(listing_id) # find item
            if item:
                item.condition = condition # returns one element or None,
            else:
                return {"message": "listing not found"}

        else: # no listing found, add listing (probably unnecessary)
            item = ListingModel(data['price'], data["condition"], data["isbn"], data["google_tok"], data["status"])

        item.save_to_db()

        return item.listing_json_w_book()


class allListings(Resource):
    #def get(self):
    #    return{"listings": [item.json() for item in ListingModel.query.all()]}

    def get(self, search):
        strings = search.split("+")
        try:
            page = int(strings[3])
        except:
            return {"message": "No page provided"}
        listings = []
        all_listings = []
        final_listings = []
        search_by = []
        if len(strings[0]) > 0: # ISBN's WERE provided
            ISBNS = strings[0].split(",") # seperate ISBN's by comma,
            for i in range(len(ISBNS)): # turn to ints
                ISBNS[i] = int(ISBNS[i])
            if len(strings[1]) > 0: # price was provided
                price = float(strings[1])
                if len(strings[2]) > 0: #condition was provided
                    condition = strings[2] # "bad", "ehh", "good", or "new"
                    for current_isbn in ISBNS:
                        all_listings = ListingModel.query.filter(ListingModel.isbn == current_isbn).filter(ListingModel.price <= price).filter(ListingModel.condition >= condition).all()








                    all_listings = ListingModel.query.filter(ListingModel.isbn.in_(ISBNS)).filter(ListingModel.price <= price).filter(ListingModel.condition >= condition).all()
                else: # ISBN's, price, no condition
                    all_listings = ListingModel.query.filter(ListingModel.isbn.in_(ISBNS)).filter(ListingModel.price <= price).all()
            elif len(strings[2]) > 0: # ISBNs, no price, condition
                condition = strings[2]
                all_listings = ListingModel.query.filter(ListingModel.isbn.in_(ISBNS)).filter(ListingModel.condition >= condition).all()
            else: #ISBN's, no price nor condition
                all_listings = ListingModel.query.filter(ListingModel.isbn.in_(ISBNS)).all()
        else: # No ISBN's provided,
            return {"message": "No ISBN's provided"}

            #below is code to be used for a search function given above implementation

            search_ = strings[1]
            for i in search_:
                if i == "_":
                    search_by.append(" ")
                else:
                    search_by.append(i)
            search_by = ''.join(search_by)
            if len(strings[2]) > 0: # price was provided
                price = float(strings[2])
                if len(strings[3]) > 0: #condition was provided
                    condition = strings[3] # "bad", "ehh", "good", or "new"
                    print(search_by)
                    all_listings = ListingModel.query.filter(ListingModel.book.book_json_wo_listings()["author"] == search_by or ListingModel.book.book_json_wo_listings()["title"] == search_by).filter(ListingModel.price <= price).filter(ListingModel.condition >= condition).all()
                    return{"listings": [all_listings[i].listing_json_w_book_and_user() for i in range(page*page_size, min(((page+1)*page_size),len(all_listings)))], "page": page, "of": of}




        of = ceil(len(all_listings)/page_size)
        return{"listings": [all_listings[i].listing_json_w_book_and_user() for i in range(page*page_size, min(((page+1)*page_size),len(all_listings)))], "page": page, "of": of} # add all filtered listings
                    #return listings[0].listing_json_w_user()

                    #WOOOOO!!!!!


    # def get(self, filtr):
    #     firstString = []
    #     secondString = []
    #     first = True
    #     for i in range(0, len(filtr)):
    #         if filtr[i] == ":":
    #             first = False
    #             continue
    #         if first:
    #             firstString.append(filtr[i])
    #         elif not first:
    #             secondString.append(filtr[i])
    #     isbn = ''.join(firstString)
    #     isbn = int(isbn)
    #     print(isbn)
    #     if len(secondString) > 0:
    #         s = ''.join(secondString)
    #         print(s)
    #         if s == "price": #For next time: figure out ordering by price and condition!!!
    #             return {"listings": [listing.listing_json_w_user() for listing in ListingModel.query.filter_by(isbn=isbn).order_by(ListingModel.price).all()]}
    #         elif s == "condition":
    #             return {"listings": [listing.listing_json_w_user() for listing in ListingModel.query.filter_by(isbn=isbn).order_by(ListingModel.condition.desc()).all()]}
    #         else:
    #             return{"message": "error, can only search by title or author: /booklist/author:Bill_Shakespeare"}
    #     elif search != "all":
    #         return {"message": "Please enter booklist/all or booklist/author:xxx or booklist/title:xxx"}
    #     return {"books": [listing.listing_json_w_user() for listing in ListingModel.query.all()]}
