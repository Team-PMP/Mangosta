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


@api.route('/users', methods=['GET'])
def get_all_users():

    all_users = User.query.all()

    serialized_users = []
    for user in all_users:
        serialized_users.append(user.serialize())
    print(all_users)

    return jsonify(serialized_users), 200


# RUTAS PRIVADAS
@api.route("/profiles", methods=["GET"])
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    
    return jsonify({"email": email,
            "name": name,
            "surname": surname,
            "phone": phone,
            "picture": picture,
            "profesional": profesional,
            "specialties": specialties,}), 200



@api.route("/login", methods=["POST"])
def login():

    payload = request.get_json()

    user = User.query.filter_by(email=payload["email"], password=payload["password"]).first()
    if user is None:
        return jsonfiy({"error":"Invalid email or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id})



@api.route('/diseases', methods=['GET'])
def get_all_diseases():

    all_diseases = Disease.query.all()

    serialized_diseases = []
    for disease in all_diseases:
        serialized_diseases.append(disease.serialize())
    print(all_diseases)

    return jsonify(serialized_diseases), 200



# end point usario
@api.route('/users', methods=['POST'])
def handle_create_user():
    payload = request.get_json()
    profesional = False
    picture=""
    phone=None
     # validación
    if payload is None:
        return "The request payload is null", 400
    if 'name' not in payload:
        return 'Especificar name', 400
    if 'email' not in payload:
        return 'Especificar email', 400
    if 'surname' not in payload:
        return 'Especificar surname', 400
    if 'picture' in payload:
        picture= payload['picture'],
    if 'phone' in payload:
        phone= payload['phone'],
    if 'profesional' in payload:
        profesional = True
    if 'password' not in payload:
        return 'Especificar password', 400
        
       
    print(payload)
    user = User(email=payload['email'],password=payload['password'],name=payload['name'],surname=payload['surname'],phone=phone,picture=picture,profesional=profesional)
    
    db.session.add(user)
    db.session.commit()

    print ("end payload")
    return jsonify(user.serialize())

