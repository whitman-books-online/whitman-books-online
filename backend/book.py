from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

# Definition of base object class
Base = declarative_base()

Class Book(Base):
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

	isbn = Column(String, primary_key = True)
	title = Column(String)
	author = Column(String)
	# One to many relationship: Book to listings
	listings = relationship("Listing", backref="book", order_by="listing.id")

	def add_to_db(self):
		session.add(self) # TODO: Decide on handling sessions

	def remove_from_db(self):
		session.delete(self)

	def get_ids(self):
		listing_ids = []
		for listing in self.listings:
			listing_ids.append(listing.id)
		return listing_ids

	# Returns a json object representing the book
	def json(self):
		return {'isbn': self.isbn, 'title': self.title, 'author': self.author, 'listings': get_ids(self)}

	# How the book class will be printed
	def __repr__(self):
		return "<Book(isbn='%s', title='%s', author='%s')>" % (
			self.isbn, self.title, self.author)