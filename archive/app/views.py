from app import app
from flask import render_template, abort
import json

@app.route('/')
def home():
   return render_template('home.html')

@app.route('/health')
def healthcheck():
   # abort(500, description="server error")
   return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 