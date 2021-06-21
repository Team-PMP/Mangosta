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

# end point crear usario
@api.route('/user', methods=['POST'])
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




# RUTAS PRIVADAS
@api.route("/user", methods=["GET"])
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    
    return jsonify({"email": email,
            "name": name,
            "surname": surname,
            "rrss": rrss,
            "phone": phone,
            "picture": picture,
            "profesional": profesional,
            "specialties": specialties,}), 200

# #end point profesionales
# @api.route('/profesional', methods=['POST'])
# def handle_create_user():
#     payload = request.get_json()
#     # validación
#     if payload is None:
#         return "The request payload is null", 400
#         if 'name' not in payload:
#             return 'Especificar name', 400
#         if 'email' not in payload:
#             return 'Especificar email', 400
#         if 'surname' not in payload:
#             return 'Especificar email', 400
#         if 'rss' not in payload:
#             return 'Especificar email', 400
#         if 'picture' not in payload:
#             return 'Especificar email', 400
#         if 'profesional' not in payload:
#             return 'Especificar email', 400
#         if 'specialties' not in payload:
#             return 'Especificar email', 400
        
        
  
#     print(payload)
#     profesional = Profesional(email=payload['email'],name=payload['name'],surname=payload['surname'],rrss=payload['rrss'],phone=payload['phone'],picture=payload['picture'],profesional=payload['profesional'],specialties=payload['specialties'])
    
#     db.session.add(user)
#     db.session.commit()

#     print ("end payload")
#     return jsonify(user.serialize()),



@api.route("/login", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    # Consulta la base de datos por el nombre de usuario y la contraseña
    user = User.filter.query(username=username, password=password).first()
    if User is None:
          # el usuario no se encontró en la base de datos
        return jsonify({"msg": "Bad username or password"}), 401
    
    # crea un nuevo token con el id de usuario dentro
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user": user.serialize() })