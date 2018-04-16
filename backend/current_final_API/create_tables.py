import sqlite3

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

create_table = 'CREATE TABLE IF NOT EXISTS listings (listing_id INTEGER PRIMARY KEY, price real, condition text, isbn int, user_id int, status text)'
# INTEGER PRIMARY KEY is an automatically incrementing id number
cursor.execute(create_table)

create_table = 'CREATE TABLE IF NOT EXISTS books (book_id INTEGER PRIMARY KEY, isbn int, title text, author text)' #real is a decimal number
cursor.execute(create_table)

create_table = 'CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, name text, email text)'
cursor.execute(create_table)

connection.commit()

connection.close()
