from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

import logging

app = Flask(__name__, static_folder="Frontend", template_folder="Frontend")
CORS(app)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)

#region Website Routes
@app.route("/", methods= ['GET'])
def getWebsiteIndex():
    return render_template('index.html')

@app.route("/index.js", methods= ['GET'])
def getWebsiteIndexJS():
    return render_template('index.js')

@app.route("/index.css", methods= ['GET'])
def getWebsiteIndexCSS():
    return render_template('index.css')

@app.route("/newsletter.html", methods= ['GET'])
def getWebsite():
    return render_template('newsletter.html')

@app.route("/newsletter.js", methods= ['GET'])
def getWebsiteNewletterJS():
    return render_template('newsletter.js')

@app.route("/newsletter.css", methods= ['GET'])
def getWebsiteNewsletterCSS():
    return render_template('newsletter.css')

#endregion

#region API Routes
#endroutes