from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from listing import Listing, allListings
from book import Book, BookList
from user import User, UserList
from flask.ext import restful
from flask.ext.sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #turns off Flask-SQL Alchemy modification tracker, not underlying SQLAlchemy modification tracker
api = Api(app)

@app.before_first_request
def create_tables():
    db.create_all()

#Listing endpoints:
api.add_resource(Listing, "/listing/<string:ids>") # must be listing_id to support POST and DELETE
api.add_resource(allListings, "/listings/<string:search>")

#Book endpoints:
api.add_resource(Book, "/book/<string:isbns>")
api.add_resource(BookList, "/booklist/<string:search>")


#user endpoints:
api.add_resource(User, "/user/<string:google_tok>")
api.add_resource(UserList, "/userlist/<string:tokens>")

if __name__ == '__main__': # prevents app from running when being imported from elsewhere
    from db import db # prevents circular import
    db.init_app(app)
    app.run(port=5000, debug=True)
