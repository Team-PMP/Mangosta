"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Disease, Post, Service, Comment, Specialty
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
#
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity




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

@api.route('/users/professionals', methods=['GET'])
def get_all_professionals():
    
    all_professionals = User.query.filter_by(profesional= True).all()

    serialized_professionals = []
    for professional in all_professionals:
        serialized_professionals.append(professional.serialize())
    print(serialized_professionals)

    return jsonify(serialized_professionals), 200

# RUTAS PRIVADAS

# @api.route("/profiles", methods=["GET"])
# def protected():
#     # Accede a la identidad del usuario actual con get_jwt_identity
#     current_user_id = get_jwt_identity()
#     user = User.filter.get(current_user_id)
    
#     return jsonify({"email": email,
#             "name": name,
#             "surname": surname,
#             "phone": phone,
#             "picture": picture,
#             "profesional": profesional,
#             "specialties": specialties,}), 200

@api.route('/profiles', methods=['GET'])
@jwt_required()
def handle_profile():
    user_id = get_jwt_identity()
    user= User.get_user_by_id(user_id)
    return jsonify(user.serialize()), 200

    return jsonify({"email": email,
                    "name": name,
                    "surname": surname,
                    "phone": phone,
                    "picture": picture,
                    "profesional": profesional,
                    "specialties": specialties, }), 200


@api.route("/login", methods=["POST"])
def login():

    payload = request.get_json(force=True)
    print("payload", payload)

    user = User.query.filter_by(
        email=payload["email"], password=payload["password"]).first()
    if user is None:
        return jsonify({"error":"Invalid email or password"}), 401
    print("user",user)
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user": user.serialize() })

@api.route('/posts/diseases/<int:id>', methods=['GET'])
def get_posts(id):
    all_posts = Post.query.filter_by(disease_id=id).limit(10).all()
    if all_posts is None:
        return jsonify({'message': 'esta enfermedad no tiene posts relacionados'})
    serialized_posts = []
    for post in all_posts:
        serialized_posts.append(post.serialize())
    return jsonify(serialized_posts), 200
    

@api.route('/diseases', methods=['GET'])
def get_all_diseases():

    all_diseases = Disease.query.all()

    serialized_diseases = []
    for disease in all_diseases:
        serialized_diseases.append(disease.serialize())
    return jsonify(serialized_diseases), 200

@api.route('/disease/<int:id>', methods=['GET'])
def get_disease(id):

    disease = Disease.query.get(id)
    serialized_disease = disease.serialize()

    return jsonify(serialized_disease), 200


# end point usario
@api.route('/users', methods=['POST'])
def handle_create_user():
    payload = request.get_json()
    profesional = False
    picture = ""
    phone = None
    # validaci??n
    if payload is None:
        return "The request payload is null", 400
    if 'name' not in payload:
        return 'Especificar name', 400
    if 'email' not in payload:
        return 'Especificar email', 400
    if 'surname' not in payload:
        return 'Especificar surname', 400
    if 'picture' in payload:
        picture = payload['picture'],
    if 'phone' in payload:
        phone = payload['phone'],
    if 'specialty' in payload:
        specialty_id = payload['specialty'],
    if 'profesional' in payload:
        profesional = True
    if 'password' not in payload:
        return 'Especificar password', 400

    print(payload)
    user = User(email=payload['email'], password=payload['password'], name=payload['name'],
                surname=payload['surname'], phone=phone, picture=picture, profesional=profesional)
    
    db.session.add(user)
    specialty = Specialty.query.get(specialty_id)
    if specialty is not None:
        user.specialties.append(specialty)

    db.session.commit()
    print(specialty)
    print("end payload")
    return jsonify(user.serialize())

@api.route('/posts', methods=['POST'])
def create_post():
    req = request.get_json()
    # validaci??n
    if req is None:
        return "The request req is null", 400
    if 'title' not in req:
        return 'Especificar un titulo para el post', 400
    if 'info' not in req:
        return 'especificar informacion del post', 400
    if 'image' in req:
        image = req['image'],
    if 'user_id' in req:
        user_id = req['user_id'],
    if 'disease_id' in req:
        disease_id = req['disease_id'],
    

    print(req)
    post = Post(title=req['title'], info=req['info'], image=req['image'], user_id=req['user_id'], disease_id=req['disease_id'])

    db.session.add(post)
    db.session.commit()

    print("end req")
    return jsonify(post.serialize())
