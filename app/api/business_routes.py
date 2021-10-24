from colors import *
from flask import Blueprint, request
from app.models import db, Business
from flask_wtf.csrf import generate_csrf
from app.forms.create_business_form import BusinessForm
from app.forms.edit_business_form import EditBusinessForm
from flask_login import current_user, login_required
# from app.s3aws_upload import (
#     upload_file_to_s3, allowed_file, get_unique_filename
# )


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

#create a new business
@business_routes.route('/businesses/create', methods=['POST'])
@login_required
def create_business():
    create_business_form = BusinessForm()
    create_business_form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    if form.validate_on_submit():
        new_business = Business(
            owner_id=current_user.id,
            category_id=data['category_id'],
            title=data['title'],
            description=data['description'],
            media_1=data['media_1'],
            media_2=data['media_2'],
            media_3=data['media_3'],
            media_4=data['media_4'],
            media_5=data['media_5'],
            address=data['address'],
            city=data['city'],
            state=data['state'],
            zip_code=data['zip_code']
        )
        db.session.add(new_business)
        db.session.commit()
        return new_business.to_dict()
    else:
        return form.errors

#edit business route
@business_routes.route('/businesses/edit/<int:id>', methods=['PATCH'])
def edit_business(id):
    form = EditBusinessForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    data = form.data
    if form.validate_on_submit():
        editedBusiness = Business.query.get(Business.id == id)

        editedBusiness.owner_id = current_user.id
        editedBusiness.category_id = data['category_id']
        editedBusiness.title = data['title']
        editedBusiness.description = data['description']
        editedBusiness.media_1 = data['media_1']
        editedBusiness.media_1 = data['media_2']
        editedBusiness.media_1 = data['media_3']
        editedBusiness.media_1 = data['media_4']
        editedBusiness.media_1 = data['media_5']
        editedBusiness.address = data['address']
        editedBusiness.city = data['city']
        editedBusiness.state = data['state']
        editedBusiness.zip_code = data['zip_code']

        db.session.commit()
        return editedBusiness.to_dict()

    else:
        return form.errors
