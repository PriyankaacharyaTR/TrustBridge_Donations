import psycopg2
import os

def get_db():
    return psycopg2.connect(
        host="localhost",
        database="donation",
        user="postgres",
        password="1234",
        port=5432
    )
