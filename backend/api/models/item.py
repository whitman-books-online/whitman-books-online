from db import db

class ItemModel(db.Model):
    __tablename__ = 'items' #our items database

    id = db.Column(db.Integer, primary_key=True) # items are assigned integer key, not used by constructor
    name = db.Column(db.String(80))
    price = db.Column(db.Float(precision = 2))

    def __init__(self, name, price):
        self.name = name
        self.price = price

    def json(self):
        return {'name': self.name, 'price': self.price}

    @classmethod
    def find_by_name(cls, name): # abstracted and redifined from get
        # Does NOT require jwt_auth, so it can be used by both get and post
        return ItemModel.query.filter_by(name=name).first() # SELECT * FROM items WHERE name=name LIMIT 1 (only returns first row where name matches)

    def save_to_db(self):
        # write to database
        # abstracted just like find_by_name so that it can be used by both post and put
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
