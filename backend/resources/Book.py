from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.item import ItemModel

class Book(Resource):
	parser = reqparse.RequestParser() # Book class parser
	parser.add_argument('isbn',
        type=str,
        required=True,
        help="This field cannot be blank."
    )
    parser.add_argument('title',
        type=str,
        required=True,
        help="This field cannot be blank."
    )
    parser.add_argument('author',
        type=str,
        required=True,
        help="This field cannot be blank."
    )

	def get(self, isbn): # Get request, looking for isbn
		book = BookModel.find_by_isbn(isbn)
		if book:
			return book.json()
		return {"message": "Book not found"}, 404

	def post(self):
		data = Book.parser.parse_args()
		if BookModel.find_by_isbn(data["isbn"]):
			return {'message': 'A book with isbn ' + isbn + 'already exists'}, 400
		book = BookModel(data['isbn'], data['title'], data['author'])
		book.save_to_db()

		return {"message": "Book created successfully."}, 201

	def delete(self, isbn):
		book = BookModel.find_by_isbn(isbn)
		if book:
			book.delete_from_db()
			return {"message": "Book deleted"}
		return {"message": "Book with isbn (" + isbn + ") does not exist."}

	def put(self, isbn):
		data = Book.parser.parse_args()

		# Find book with matching isbn
		book = BookModel.find_by_isbn(isbn)

		if book is None:
			book = BookModel(isbn, data['title'], data['author'])
		else:
			book.title = data['title']
			book.author = data['author']

class BookList(Resource):
	def get(self):
		return {"books": [book.json() for book in BookModel.query.all()]}





