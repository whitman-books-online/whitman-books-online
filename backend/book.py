import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base

# Definition of base object class
Base = declarative_base()

Class Book(Base):
	__tablename__ = 'books'

	isbn = Column(String, primary_key = True)
	title = Column(String)
	author = Column(String)
	listings = Column(String[])

	def __repr__(self):
		return "<Book(isbn='%s', title='%s', author='%s')>" % (
			self.isbn, self.title, self.author)