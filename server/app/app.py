from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad

import logging
import base64

import database as db

app = Flask(__name__, static_folder="Frontend", template_folder="Frontend")
CORS(app)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)

#region Website Routes
@app.route("/", methods= ['GET'])
@app.route("/index.html", methods= ['GET'])
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

@app.route("/login.html", methods= ['GET'])
def getWebsiteLogin():
    return render_template('login.html')

@app.route("/login.css", methods= ['GET'])
def getWebsiteLoginCSS():
    return render_template('login.css')

@app.route("/login.js", methods= ['GET'])
def getWebsiteLoginJS():
    return render_template('login.js')
#endregion

#region API Routes
@app.route("/user/check", methods= ['POST'])
def checkUser():
    if request.method == 'POST':
        logging.error(request.values)

        username = str(request.values.get("username"))
        password = decrypt(str(request.values.get("password")))

        if "@" in username:
            return db.checkUserOverEmail(username, password)
        
        else:
            return db.checkUserOverUsername(username, password)
#endregion

def decrypt(text) -> str:
    enc = base64.b64decode(text)
    derived_key = base64.b64decode("5DByrBheits6gUD4FK7RwZp8QjFMRYd2")
    iv = "1020304050607080"
    
    cipher = AES.new(derived_key, AES.MODE_CBC, iv.encode('utf-8'))
    return unpad(cipher.decrypt(enc),16).decode('utf-8')

