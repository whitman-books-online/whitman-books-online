from sqlalchemy import Table, Column, Integer, ForeignKey, or_
from sqlalchemy.orm import relationship
from flask_restful import Resource, reqparse
import math # math.ciel() used for paging
#from assoc_tables import association_table1
import ast # for json parsing imageLinks around line 177

from db import db

page_size = 20

class BookModel(db.Model):
	"""The Book object stores information about the book, as well as
	the listing objects that are associated with it.
    Attributes:
        isbn (string): The isbn number for the book.
        title (string): The title of the book.
		author (string): The author/authors of the book.
		listings (Listing): The current listings of the book.
    """

    # Creates a table named 'book'
	__tablename__ = 'books'

	title = db.Column(db.String)
	subtitle = db.Column(db.String)
	# many to many relationship to author
	authors = db.Column(db.String)
	"""authors = relationship(
        "AuthorModel",
        secondary=association_table1,
        back_populates='works')
	"""
	isbn = db.Column(db.Integer, primary_key=True) # only use 13 digit isbn, 10 digit if no 13
	categories = db.Column(db.String)
	publishedDate = db.Column(db.String)
	smallThumbnail = db.Column(db.String)
	thumbnail = db.Column(db.String)
	previewLink = db.Column(db.String)
	infoLink = db.Column(db.String)
	canonicalVolumeLink = db.Column(db.String)
	#author = db.Column(db.String)
	# One to many relationship: Book to listings
	# Changing Owen's method a bit using different functions, hopefully desired effect
	listings = db.relationship('ListingModel')

	def __init__(self, title, subtitle, authors, isbn, categories, publishedDate, smallThumbnail, thumbnail, previewLink, infoLink, canonicalVolumeLink):
		self.title = title
		self.subtitle = subtitle
		self.isbn = isbn
		self.authors = authors
		self.categories = categories
		self.publishedDate = publishedDate
		self.smallThumbnail = smallThumbnail
		self.thumbnail = thumbnail
		self.previewLink = previewLink
		self.infoLink = infoLink
		self.canonicalVolumeLink = canonicalVolumeLink

	def get_listings(self):
		listing_ids = []
		for listing in self.listings:
			listing_ids.append(listing.listing_json_w_user())
		return listing_ids

	# Returns a json object representing the book
	def book_json_w_listings(self):
		return {'isbn': self.isbn, 'title': self.title, 'subtitle': self.subtitle, 'authors': self.authors, 'categories': self.categories, 'publishedDate': self.publishedDate, 'smallThumbnail': self.smallThumbnail, 'thumbnail': self.thumbnail, 'previewLink': self.previewLink, 'infoLink': self.infoLink, 'canonicalVolumeLink': self.canonicalVolumeLink, 'listings': self.get_listings()}
		#if you ALSO want listings tied to the book
		#return {'isbn': self.isbn, 'title': self.title, 'author': self.author, 'listings': self.get_listings()}
	def book_json_wo_listings(self):
		return {'isbn': self.isbn, 'title': self.title, 'subtitle': self.subtitle, 'authors': self.authors, 'categories': self.categories, 'publishedDate': self.publishedDate, 'smallThumbnail': self.smallThumbnail, 'thumbnail': self.thumbnail, 'previewLink': self.previewLink, 'infoLink': self.infoLink, 'canonicalVolumeLink': self.canonicalVolumeLink}

	def bare_json(self):
		return {'isbn': self.isbn, 'title': self.title, 'subtitle': self.subtitle, 'authors': self.authors, 'categories': self.categories, 'publishedDate': self.publishedDate, 'smallThumbnail': self.smallThumbnail, 'thumbnail': self.thumbnail, 'previewLink': self.previewLink, 'infoLink': self.infoLink, 'canonicalVolumeLink': self.canonicalVolumeLink, "listing_ids": [l.listing_id for l in self.listings]}


	@classmethod
	def find_by_isbn(cls, isbn): # Abstracted and redefined from get
		return BookModel.query.filter_by(isbn=isbn).first()

	def save_to_db(self):
		db.session.add(self)
		db.session.commit()
		return self.book_json_wo_listings()

	def delete_from_db(self):
		db.session.delete(self)
		db.session.commit()
		for listing in self.listings:
			listing.delete_from_db()
		#return self.book_json_wo_listings()

	# How the book class will be printed
	def __repr__(self):
		return "<Book(isbn='%s', title='%s', author='%s')>" % (
			self.isbn, self.title, self.author)


class Book(Resource):
	parser = reqparse.RequestParser() # Book class parser
	"""parser.add_argument('isbn',
		type=int,
        required=True,
		help="This field cannot be blank."
	)"""
	parser.add_argument('subtitle',
		type=str,
		required=False,
		help="subtitle"
	)
	parser.add_argument('title',
		type=str,
		required=True,
		help="title: This field cannot be blank."
	)
	parser.add_argument('authors',
		action='append',
		type=str,
		required=True,
		help="author: This field cannot be blank."
	)
	parser.add_argument('categories',
		action='append',
		type=str,
		required=False,
		help="categories: Check formatting."
	)
	parser.add_argument('publishedDate',
		type=str,
		required=False,
		help="publishedDate: check formatting"
	)
	parser.add_argument('imageLinks',
		action='append',
		#type=str,
		required=False,
		help="imageLinks check formatting."
	)
	parser.add_argument('previewLink',
		type=str,
		required=False,
		help="previewLink: check formatting."
	)
	parser.add_argument('infoLink',
		type=str,
		required=False,
		help="infoLink: check formatting."
	)
	parser.add_argument('canonicalVolumeLink',
		type=str,
		required=False,
		help="canonicalVolumeLink: check formatting."
	)

	def get(self, isbns): # Get request, looking for all books based on isbns
		all_isbns = isbns.split(",")
		for i in range(0, len(all_isbns)):
			all_isbns[i] = int(all_isbns[i])
		data = BookModel.query.filter(BookModel.isbn.in_(all_isbns)).all()
		listing_ids = []
		if len(data):
			return {"books": [book.bare_json() for book in data]}
		return {"message": "Book not found"}, 404


	def post(self, isbns):
		data = Book.parser.parse_args()
		isbn = int(isbns) # string of only one ISBN
		#Error handling, in case not all passed in
		title = "None"
		authors = "None"
		categories = "None"
		imagelinks = "None"
		thumbnail = "None"
		smallThumbnail = "None"
		subtitle = "None"
		publishedDate = "None"
		previewLink = "None"
		infoLink = "None"
		canonicalVolumeLink = "None"
		if BookModel.find_by_isbn(isbn):
			return {'message': 'A book with isbn ' + str(isbn) + ' already exists'}, 400
		#print(data["imageLinks"][0])
		if data["title"]:
			title = data["title"]
		if data["authors"]:
			authors = ', '.join(author for author in data["authors"]) #BOOM!
		if data["subtitle"]:
			subtitle = data["subtitle"]
		if data["publishedDate"]:
			publishedDate = data["publishedDate"]
		if data["previewLink"]:
			previewLink = data["previewLink"]
		if data["infoLink"]:
			infoLink = data["infoLink"]
		if data["canonicalVolumeLink"]:
			canonicalVolumeLink = data["canonicalVolumeLink"]
		if data["categories"]:
			categories = ', '.join(category for category in data["categories"])
		if data["imageLinks"]:
			imagelinks = ast.literal_eval(data["imageLinks"][0]) #dumb json parsing
			if imagelinks["thumbnail"]:
				thumbnail = imagelinks["thumbnail"] # dumb json parsing.
			if imagelinks["smallThumbnail"]:
				smallThumbnail = imagelinks["smallThumbnail"] # dumb json parsing
		book = BookModel(title, subtitle, authors, isbn, categories, publishedDate, smallThumbnail, thumbnail, previewLink, infoLink, canonicalVolumeLink)
		book.save_to_db()
		return {"message": "Book created successfully."}, 201

	def delete(self, isbns):
		book = BookModel.find_by_isbn(isbns)
		if book:
			book.delete_from_db()
			return {"message": "Book deleted"}
		return {"message": "Book with isbn (" + isbns + ") does not exist."}

	"""def put(self, isbn):
		data = Book.parser.parse_args()
      	# Find book with matching isbn
		book = BookModel.find_by_isbn(isbn)
		if book is None:
			book = BookModel(isbn, data['title'], data['author'])
		else:
			book.title = data['title']
			book.author = data['author']"""

class BookList(Resource):
	def get(self, search): # books -> users
		search = search.replace("_", " ")
		print(search)
		books = BookModel.query.filter(or_(BookModel.title.contains(search), BookModel.authors.contains(search), BookModel.subtitle.contains(search), BookModel.categories.contains(search), BookModel.publishedDate.contains(search))) #Operator 'contains' is not supported on this expression!!! search in subtitle, search in publishedDate
		return {"books": [book.bare_json() for book in books]}
