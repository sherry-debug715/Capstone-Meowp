from colors import *
from flask import Blueprint
from app.models import db, Business
from flask_wtf.csrf import generate_csrf
from app.forms.create_business_form import BusinessForm
from flask_login import current_user, login_required

business_routes = Blueprint("businesses", __name__, url_prefix="/")


#get all businesses for a user
@business_routes.route('/businesses')
def get_businesses():
    businesses = Business.query.all()
    return {business.id:business.to_dict() for business in businesses}

#get a single business
@business_routes.route('/businesses/<int:id>')
def get_one_business(id):
    business = Business.query.filter(Business.id == id).first()
    return {
        'business': business.to_dict()
    }

#delete a single business
@business_routes.route('/businesses/delete/<int:id>', methods=['DELETE'])
def delete_business(id):
    deleted_business = Business.query.filter(Business.id == id).first()
    db.session.delete(deleted_business)
    db.session.commit()
    return delete_business.to_dict()
