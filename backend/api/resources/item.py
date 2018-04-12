from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.item import ItemModel

class Item(Resource):
    parser = reqparse.RequestParser() #Item class parser
    parser.add_argument("price", #requests must be in format { "price": float}
        type=float,
        required=True,
        help="FORMAT ERROR: This request must have be string : float where string == price "
    )

    @jwt_required() # jwt authentification required
    def get(self, name): # get request, looking for item called "name",
        item = ItemModel.find_by_name(name)
        if item:
            return item.json()
        return {"message": "Item not found"}, 404

    @jwt_required()
    def post(self, name):
        if ItemModel.find_by_name(name):
            return {'message': 'An item with name ' + name + 'already exists.'}, 400
        data = Item.parser.parse_args() # what the user will send to the post request (in good format)
        # In our case, the user sends the price as JSON, but the item name gets passed into the function
        item = ItemModel(name, data["price"])
        try:
            item.save_to_db()
        except:
            return{"message": "An error occurred while inserting"}, 500 # internal server error

        return item.json(), 201 #post was successful

    @jwt_required()
    def delete(self, name):
        item = ItemModel.find_by_name(name)
        if item:
            item.delete_from_db
            return {"message": "Item deleted"}
        return {"message": chair + " does not exist"}

    @jwt_required()
    def put(self, name):
        data = Item.parser.parse_args() # only add valid JSON requests into data

        item = ItemModel.find_by_name(name) # find item

        if item is None: # no item found, add item name with JSON price
            item = ItemModel(name, data['price'])
        else:
            item.price = data['price']

        item.save_to_db()

        return item.json()


class ItemList(Resource):
    def get(self):
        return{"items": [item.json() for item in ItemModel.query.all()]}
