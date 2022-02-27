from flask import Flask, render_template,jsonify, request
from flask_cors import CORS
from flask_migrate import Migrate
from models import db,User,Favorite

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

@app.route('/api/users')
def users():
    users = User.query.all()
    users = list(map(lambda user:user.serialize(),users))
    return jsonify(users,{"msg":"Usuarios conseguidos con exito"}),200

@app.route('/api/user/<int:user_id>')
def get_favorites(user_id):
    user = User.query.filter_by(id=user_id)
    user = list(map(lambda person:person.serialize_whit_favorite(),user))
    return jsonify(user, {"msg":"Usuario conseguido con exito"}),200

@app.route('/api/user/<int:user_id>/planet', methods=['POST'])
def favorite_planet(user_id):

    name_favorite = request.json.get("name_favorite")
    user_id = request.json.get("user_id")
    
    favorite=Favorite()
    favorite.name_favorite = name_favorite
    favorite.user_id = user_id
    favorite.save()
    
    return jsonify({"msg":"planeta agregado a tus favoritos"})

@app.route('/api/user/<int:user_id>/character', methods=['POST'])
def favorite_character(user_id):

    name_favorite = request.json.get("name_favorite")
    user_id = request.json.get("user_id")
    
    favorite=Favorite()
    favorite.name_favorite = name_favorite
    favorite.user_id = user_id
    favorite.save()
    
    return jsonify({"msg":"Personaje agregado a tus favoritos"})

@app.route('/api/user/<int:user_id>/vehicle', methods=['POST'])
def favorite_vehicle(user_id):

    name_favorite = request.json.get("name_favorite")
    user_id = request.json.get("user_id")
    
    favorite=Favorite()
    favorite.name_favorite = name_favorite
    favorite.user_id = user_id
    favorite.save()
    
    return jsonify({"msg":"Personaje agregado a tus favoritos"})

@app.route('/api/user/<int:user_id>/favorite/<int:favorite_id>', methods=['DELETE'])
def favorite_planet_deleted(user_id,favorite_id):
    favorite = Favorite.query.filter_by(user_id=user_id,id=favorite_id).first()
    favorite.delete()

    return jsonify({"msg":"El item fue removido de los favoritos"})

if __name__ == '__main__':
    app.run()