from webbrowser import get
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    email = db.Column(db.String(200),unique=True)
    password = db.Column(db.String(300))
    favorites = db.relationship('Favorite', cascade="all,delete",backref="user")

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "password": self.password
        }
    
    def serialize_whit_favorite(self):
        return{
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "password": self.password,
            "favorites": self.get_favorites()
        }

    def get_favorites(self):
        return list(map(lambda favorite:favorite.serialize(),self.favorites))

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()



class Favorite(db.Model):
    __tablename__='favorites'
    id = db.Column(db.Integer, primary_key=True)
    name_favorite = db.Column(db.String(200))
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'),nullable=False)
    
    
    def serialize(self):
        return {
            "id": self.id,
            "name_favorite":self.name_favorite
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()