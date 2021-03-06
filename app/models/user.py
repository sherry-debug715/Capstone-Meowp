from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    photo = db.Column(db.String)
    city = db.Column(db.String(40))
    state = db.Column(db.String(40))

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    # one to many relationship with businesses
    businesses = db.relationship('Business', back_populates='user', lazy='subquery', cascade="all, delete-orphan")
    # one to many relationship with reviews
    reviews = db.relationship('Review', back_populates='user', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'photo':self.photo,
            'city':self.city,
            'state':self.state,
            # 'business': [business.to_dict() for business in self.businesses],
            # 'review': [review.to_dict() for review in self.reviews]
        }
