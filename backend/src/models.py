from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Role(db.Model):
    __tablename__="roles"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100))
    users = db.relationship("User", cascade="all,delete",backref="role")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class User(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    email = db.Column(db.String(200),unique=True)
    password = db.Column(db.String(300))
    role_id = db.Column(db.Integer,db.ForeignKey("roles.id"))
    characters = db.relationship('Character', cascade="all, delete", backref='user')
    planets = db.relationship('Planet', cascade="all, delete", backref='user')
    

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "password": self.password,
            "role_id": self.role_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


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
    user_id = db.Column(db.Integer,db.ForeignKey('users.id',ondelete="CASCADE"))

    def serialize(self):
        return {
            "id": self.id,
            "planet_name": self.planet_name,
            "image": self.image,
            "climate": self.climate,
            "population": self.population,
            "orbital_period": self.orbital_period,
            "rotation_period": self.rotation_period,
            "diameter": self.diameter,
            "bio":self.bio,
            "user_id": self.user_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

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
    user_id = db.Column(db.Integer,db.ForeignKey('users.id', ondelete='CASCADE'))
    

    def serialize(self):
        return {
            "id": self.id,
            "character_name": self.character_name,
            "image": self.image,
            "gender": self.gender,
            "height": self.height,
            "skin_color": self.skin_color,
            "hair_color": self.hair_color,
            "eye_color": self.eye_color,
            "bio": self.bio,
            "user_id": self.user_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

""" class Favorite(db.Model):
    __tablename__='favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'),nullable=False)
    character_id = db.Column(db.Integer,db.ForeignKey('character.id'))
    planet_id = db.Column(db.Integer,db.ForeignKey('planet.id'))
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "character_id": self.character_id,
            "planet_id": self.planet_id
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
 """