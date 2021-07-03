from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

diseases_services = db.Table('diseases_services',
    db.Column("disease_id", db.Integer, db.ForeignKey(
        "disease.id"), primary_key=True),
    db.Column("service_id", db.Integer, db.ForeignKey(
        "service.id"), primary_key=True)
)

diseases_specialties = db.Table('diseases_specialties',
    db.Column("disease_id", db.Integer, db.ForeignKey(
        "disease.id"), primary_key=True),
    db.Column("specialty_id", db.Integer, db.ForeignKey(
        "specialty.id"), primary_key=True)
)

specialties_users = db.Table('specialties_users',
    db.Column("specialty_id", db.Integer, db.ForeignKey(
        "specialty.id"), primary_key=True),
    db.Column("user_id", db.Integer, db.ForeignKey(
        "user.id"), primary_key=True)
)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(50), unique=False, nullable=False)
    surname = db.Column(db.String(120), unique=False, nullable=False)
    phone = db.Column(db.String(50), unique=True, nullable=True)
    picture = db.Column(db.String(120), nullable=True)
    profesional = db.Column(db.Boolean, unique=False, nullable=False)


    posts = db.relationship('Post', lazy=True)
    services = db.relationship('Service', lazy=True)
    comments = db.relationship('Comment', lazy=True)
    # diseases = db.relationship('Disease', lazy=True)
    specialties = db.relationship(
        "Specialty", secondary=specialties_users, back_populates="users")

    def get_user_by_id(user_id):
       return User.query.get(user_id)

 
    def __repr__(self):
        return '<User %r>' % self.email
 
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "surname": self.surname,
            "phone": self.phone,
            "picture": self.picture,
            "profesional": self.profesional,
            "specialties": list(map(lambda x: x.serialize(), self.specialties))
        }
 
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    info = db.Column(db.Text, unique=False, nullable=False)
    image = db.Column(db.String(120),  nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    disease_id = db.Column(db.Integer,  db.ForeignKey("disease.id"), nullable=False)

    comments = db.relationship('Comment', backref="post", lazy=True)
    
    def create(self):
        db.session.add(self)
        db.session.commit()    
        
    
 
    def __repr__(self):
        return '<Post %r>' % self.title
 
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "info": self.info,
            "image": self.image,
 
        }
class Disease(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    information = db.Column(db.Text, unique=False, nullable=False)
    image = db.Column(db.String(120),  nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    posts = db.relationship('Post', backref="disease", lazy=True)
    services = db.relationship("Service",
                    secondary=diseases_services,
                    back_populates="diseases") 
    specialties = db.relationship("Specialty",
                    secondary=diseases_specialties,
                    back_populates="diseases")
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        
    def __repr__(self):
        return '<Disease %r>' % self.name
 
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "information": self.information,
            "image": self.image,
            "specialties": list(map(lambda x: x.serialize(), self.specialties)),
            "services": list(map(lambda x: x.serialize(), self.services))
 
        }
 
 
class Comment (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    information = db.Column(db.Text, unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey("post.id"), nullable=False)
    
    
        
    def create(self):
        db.session.add(self)
        db.session.commit()    
    
 
    def __repr__(self):
        return '<Comment %r>' % self.id
 
    def serialize(self):
        return {
            "id": self.id,
            "information": self.information,
 
        }
 
class Service (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    information = db.Column(db.Text, unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    
    diseases = db.relationship("Disease",
                    secondary=diseases_services,
                    back_populates="services")
        
 
    def __repr__(self):
        return '<Service %r>' % self.name
 
    def serialize(self):
        return {
            "id": self.id,
            "information": self.information,
            "name": self.name,
            "diseases": list(map(lambda x: x.serialize(), self.diseases))
 
        }
 
class Specialty (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
 
    users = db.relationship("User",
                    secondary=specialties_users,
                    back_populates="specialties") 
    diseases = db.relationship("Disease",
                    secondary=diseases_specialties,
                    back_populates="specialties")
    
    def __repr__(self):
        return '<Specialty %r>' % self.id
 
    def serialize(self):
        return {
            "id": self.id,
            "name": self.information,
            "users": list(map(lambda x: x.serialize(), self.users)),
            "diseases": list(map(lambda x: x.serialize(), self.diseases))
           
 }
