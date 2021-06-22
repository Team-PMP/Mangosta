"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Disease
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

@api.route('/disease', methods=['GET'])
def get_all_diseases():

    all_diseases = Disease.query.all()

    serialized_diseases = []
    for disease in all_diseases:
        serialized_diseases.append(disease.serialize())
    print(all_diseases)

    return jsonify(serialized_diseases), 200

""" @api.route('/disease/disease_id')
def getDisease(disease_id):
    diseasesFound = [
        disease for disease in diseases if disease['id'] == disease_id]
    if (len(diseasesFound) > 0):
        return jsonify({'disease': diseasesFound[0]})
    return jsonify({'message': 'Disease Not found'}) """
    
@api.route('/disease/<int:id>', methods=['GET'])
def get_disease(id):
    
    disease = Disease.query.get(id)
    serialized_disease = disease.serialize()
    
    return jsonify(serialized_disease), 200