import sqlite3

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

create_table = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username text, password text)'
# INTEGER PRIMARY KEY is an automatically incrementing id number
# user will only have to pass in username and password, and the id number will then be assigned
cursor.execute(create_table)

create_table = 'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name text, price real)' #real is a decimal number
cursor.execute(create_table)

connection.commit()

connection.close()
