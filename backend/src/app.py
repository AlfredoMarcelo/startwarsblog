from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
app.config['DEBUG']=True
app.config['ENV']='development'
CORS(app)

@app.route('/')
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run()