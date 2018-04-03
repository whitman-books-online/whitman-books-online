from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship

from db import db

Class Book(db.Model):
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

	def get_ids(self):
		listing_ids = []
		for listing in self.listings:
			listing_ids.append(listing.id)
		return listing_ids

	# Returns a json object representing the book
	def json(self):
		return {'isbn': self.isbn, 'title': self.title, 'author': self.author, 'listings': get_ids(self)}

	def get(self):
		return json()

	def post(self):
		db.session.add(self)
		return json()

	def delete(self):
		db.session.delete(self)
		return json()

	# How the book class will be printed
	def __repr__(self):
		return "<Book(isbn='%s', title='%s', author='%s')>" % (
			self.isbn, self.title, self.author)