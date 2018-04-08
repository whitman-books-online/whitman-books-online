from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship

from db import db

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
	__tablename__ = 'book'

	isbn = db.Column(String, primary_key = True)
	title = db.Column(String)
	author = db.Column(String)
	# One to many relationship: Book to listings
	listings = relationship("Listing", backref="book", order_by="listing.id")

	def __init__(self, isbn, title, author):
		self.isbn = isbn
		self.title = title
		self.author = author


	def get_ids(self):
		listing_ids = []
		for listing in self.listings:
			listing_ids.append(listing.id)
		return listing_ids

	# Returns a json object representing the book
	def json(self):
		return {'isbn': self.isbn, 'title': self.title, 'author': self.author, 'listings': get_ids()}

	def find_by_isbn(cls, name): # Abstracted and redefined from get
		return BookModel.query.filter_by(isbn=isbn).first()

	def save_to_db(self):
		db.session.add(self)
		db.session.commit()
		return json()

	def delete_from_db(self):
		db.session.delete(self)
		db.session.commit()
		return json()

	# How the book class will be printed
	def __repr__(self):
		return "<Book(isbn='%s', title='%s', author='%s')>" % (
			self.isbn, self.title, self.author)
