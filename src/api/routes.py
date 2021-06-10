"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def get_all_users():

    all_users = User.query.all()

    serialized_users = []
    for user in all_users:
        serialized_users.append(user.serialize())
    print(all_users)

    return jsonify(serialized_users), 200

@api.route('/user', methods=['POST'])
def handle_create_user():
    payload = request.get_json()
    print(payload)
    user = User(email=payload['email'],name=payload['name'],surname=payload['surname'],rrss=payload['rrss'],phone=payload['phone'],picture=payload['picture'],profesional=payload['profesional'],specialties=payload['specialties'])
    
    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()),