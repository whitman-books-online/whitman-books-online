from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from flask_restful import Resource, reqparse
from math import ceil

from db import db

page_size = 20

class UserModel(db.Model):
	"""The Book object stores information about the book, as well as
	the listing objects that are associated with it.
    Attributes:
        isbn (string): The isbn number for the book.
        title (string): The title of the book.
		author (string): The author/authors of the book.
		listings (Listing): The current listings of the book.
    """

    # Creates a table named 'book'
	__tablename__ = 'users'

	google_tok = db.Column(db.String, primary_key = True)
	name = db.Column(db.String)
	email = db.Column(db.String)
	# One to many relationship: Book to listings
	listings = db.relationship("ListingModel")

	def __init__(self, google_tok, name, email):
		self.google_tok = google_tok
		self.name = name
		self.email = email


	def get_listings(self):
		listing_ids = []
		for listing in self.listings:
			listing_ids.append(listing.listing_json_w_book())
		return listing_ids

	# Returns a json object representing the book
	def user_json_wo_listings(self): # listings already displayed
		return {'google_tok': self.google_tok, 'name': self.name, 'email': self.email}

	def user_json_w_listings(self): # listings not already displayed
		return {'google_tok': self.google_tok, 'name': self.name, 'email': self.email, 'listings': self.get_listings()}

	@classmethod
	def find_by_email(cls, email): # emails are unique between students, used to see if user exists or not
		return UserModel.query.filter_by(email=email).first()
	@classmethod
	def find_by_google_tok(cls, google_tok):
		return UserModel.query.filter_by(google_tok=google_tok).first()

	def save_to_db(self):
		db.session.add(self)
		db.session.commit()
		return self.user_json_wo_listings()

	def delete_from_db(self):
		db.session.delete(self)
		db.session.commit()
		for listing in self.listings:
			listing.delete_from_db()

	# How the book class will be printed
	def __repr__(self):
		return "<User(name='%s', email='%s')>" % (
			self.name, self.email)


class User(Resource):
	parser = reqparse.RequestParser() # Book class parser
	parser.add_argument('google_tok',
		type=str,
		required=False,
		help="goog_tok required."
	)
	parser.add_argument('name',
		type=str,
        required=True,
		help="This field cannot be blank."
	)
	parser.add_argument('email',
		type=str,
		required=True,
		help="This field cannot be blank."
	)

	def get(self, google_tok): # Get request, looking for user from user_id
		#strings = find.split("+")
		#google_tok = int(strings[0])
		#page = int(strings[1])
		user = UserModel.find_by_google_tok(google_tok)
		listing_IDs = []
		if user:
			for listing in user.listings:
				listing_IDs.append(listing.listing_id)
			return {"name": user.name, "email": user.email, "listings": listing_IDs}
			user.user_json_w_listings()
			#of = ceil(len(all_listings)/page_size)
			#return{"user": [all_listings[i].user_json_w_listings() for i in range(page*page_size, min(((page+1)*page_size),len(all_listings)))], "page": page, "of": of}
		return {"message": "user not found"}, 404

	def post(self, google_tok): # create user
		data = User.parser.parse_args()
		print("hello")
		if UserModel.find_by_google_tok(google_tok):
			return {'message': 'A user with that google_token already exists'}, 400
		user = UserModel(google_tok, data["name"], data["email"])
		user.save_to_db()
		return {"message": "User created successfully."}, 201

	def delete(self, google_tok): # delete User
		user = UserModel.find_by_google_tok(google_tok)
		if user:
			user.delete_from_db()
			return {"message": "User deleted"}
		return {"message": "User with user_id (" + google_tok + ") does not exist."}

	def put(self, isbn): # update listings
		pass

		#relationships might already solve this

		"""data = User.parser.parse_args()
      	# Find book with matching isbn
		book = UserModel.find_by_isbn(isbn)

		if book is None:
			book = UserModel(isbn, data['title'], data['author'])
		else:
			book.title = data['title']
			book.author = data['author']"""

class UserList(Resource):
	def get(self, page):
		all_listings = UserModel.query.all()
		of = ceil(len(all_listings)/page_size)
		return{"users": [all_listings[i].user_json_w_listings() for i in range(page*page_size, min(((page+1)*page_size),len(all_listings)))], "page": page, "of": of}


	#	return {"users": [user.user_json_w_listings() for user in UserModel.query.all()]}

	# search_ = strings[1]
	# for i in search_:
	# 	if i == "_":
	# 		search_by.append(" ")
	# 	else:
	# 		search_by.append(i)
	# search_by = ''.join(search_by)
	# if len(strings[2]) > 0: # price was provided
	# 	price = float(strings[2])
	# 	if len(strings[3]) > 0: #condition was provided
	# 		condition = strings[3] # "bad", "ehh", "good", or "new"
	# 		print(search_by)
	# 		all_listings = ListingModel.query.filter(ListingModel.book.book_json_wo_listings()["author"] == search_by or ListingModel.book.book_json_wo_listings()["title"] == search_by).filter(ListingModel.price <= price).filter(ListingModel.condition >= condition).all()
	# 		return{"listings": [all_listings[i].listing_json_w_book_and_user() for i in range(page*page_size, min(((page+1)*page_size),len(all_listings)))], "page": page, "of": of}
