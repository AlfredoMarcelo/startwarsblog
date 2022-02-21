import json
from flask import Flask, render_template,jsonify, request
from flask_cors import CORS
from flask_migrate import Migrate
from models import db,Character,Planet,User

app = Flask(__name__)

app.url_map.strict_slashes=False
app.config['DEBUG']=True
app.config['ENV']='development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///database.db'

db.init_app(app)
Migrate(app,db)
CORS(app)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/api/characters', methods=['GET'])
def characters():
    characters = Character.query.all()
    characters = list(map(lambda character:character.serialize(),characters))
    return jsonify(characters,{"msg":"se consiguio con exito"}),200

@app.route('/api/characters/<int:character_id>', methods=['GET'])
def single_character(character_id):
    character = Character.query.get(character_id)
    """ character = Character.query.filter_by(character_id=character_id).first()
    character = list(map(lambda character:character.serialize(),character)) """
    return jsonify({"character":character.serialize()}),200

@app.route('/api/planets', methods=['GET'])
def planets():
    planets = Planet.query.all()
    planets = list(map(lambda planet:planet.serialize(),planets))
    return jsonify(planets,{"msg":"Se consiguieron los planetas con exito"}),200

@app.route('/api/planets/<int:planet_id>')
def single_planet(planet_id):
    planet = Planet.query.get(planet_id)
    return jsonify({"planet":planet.serialize()}),200

@app.route('/api/users')
def users():
    users = User.query.all()
    users = list(map(lambda user:user.serialize(),users))
    return jsonify(users,{"msg":"Usuarios conseguidos con exito"}),200

@app.route('/api/users/favorites')
def favorites():
    return render_template("index.html")

@app.route('/api/favorite/planet/<int:planet_id>')
def favorite_planet(planet_id):
    return render_template("index.html")

@app.route('/api/favorite/people/<int:planet_id>')
def favorite_people(planet_id):
    return render_template("index.html")

@app.route('/api/favorite/planet/<int:planet_id>')
def favorite_planet_deleted(planet_id):
    return render_template("index.html")

@app.route('/api/favorite/people/<int:people_id>')
def favorite_people_deleted(people_id):
    return render_template("index.html")



if __name__ == '__main__':
    app.run()