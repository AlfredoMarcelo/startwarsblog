from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey

db = SQLAlchemy()

class User(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    email = db.Column(db.String(200))
    password = db.Column(db.String(300))

class Planet(db.Model):
    __tablename__='planets'
    id = db.Column(db.Integer, primary_key=True)
    planet_name = db.Column(db.String(100))
    image = db.Column(db.String(500))
    climate = db.Column(db.String(100))
    population = db.Column(db.Integer)
    orbital_period = db.Column(db.Integer)
    rotation_period = db.Column(db.Integer)
    diameter = db.Column(db.Integer)
    bio = db.Column(db.String(600))

class Character(db.Model):
    __tablename__='characters'
    id = db.Column(db.Integer, primary_key=True)
    character_name = db.Column(db.String(100))
    image = db.Column(db.String(500))
    gender = db.Column(db.String(100))
    height = db.Column(db.Integer)
    skin_color = db.Column(db.String(100))
    hair_color = db.Column(db.String(100))
    eye_color = db.Column(db.String(100))
    bio = db.Column(db.String(600))

class Favorite(db.Model):
    __tablename__='favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'),nullable=False)
    character_id = db.Column(db.Integer,db.ForeignKey('character.id'))
    planet_id = db.Column(db.Integer,db.ForeignKey('planet.id'))



