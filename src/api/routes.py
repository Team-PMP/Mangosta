"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Disease, Post, Service, Comment, Specialty
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

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


@api.route("/login", methods=["POST"])
def login():

    payload = request.get_json()

    user = User.query.filter_by(email=payload["email"]).first()
    if user.password != payload["password"]:
        return "Invalid email or password", 404

    access_token = create_access_token(identity=payload["email"])
    return jsonify({"token": access_token})


@api.route('/disease', methods=['GET'])
def get_all_diseases():

    all_diseases = Disease.query.all()

    serialized_diseases = []
    for disease in all_diseases:
        serialized_diseases.append(disease.serialize())
    print(all_diseases)

    return jsonify(serialized_diseases), 200
