from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

# Definition of base object class
Base = declarative_base()

Class Book(Base):
	__tablename__ = 'book'

	isbn = Column(String, primary_key = True)
	title = Column(String)
	author = Column(String)
	# One to many relationship: Book to listings
	listings = relationship("Listing", backref="book", order_by="listing.id")

	def get_ids():
		listing_ids = []
		for listing in listings:
			listing_ids.append(listing.id)
		return listing_ids

	def __repr__(self):
		return "<Book(isbn='%s', title='%s', author='%s')>" % (
			self.isbn, self.title, self.author)