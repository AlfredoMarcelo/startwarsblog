from flask import Flask, render_template,jsonify, request
from flask_cors import CORS
from flask_migrate import Migrate
from models import db

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

@app.route('/api/people')
def people():
    return render_template("index.html")

@app.route('/api/people/<int:people_id>')
def single_people(people_id):
    return render_template("index.html")

@app.route('/api/planets')
def planets():
    return render_template("index.html")

@app.route('/api/planets/<int:planet_id>')
def single_planet(planet_id):
    return render_template("index.html")

@app.route('/api/users')
def users():
    return render_template("index.html")

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