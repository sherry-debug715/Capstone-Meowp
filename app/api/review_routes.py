from flask import Blueprint, request
from app.models import db, Review
from flask_wtf.csrf import generate_csrf
from flask_login import current_user, login_required
from colors import *
from app.forms.create_review_form import NewReviewForm
from app.forms.edit_review_form import EditReviewForm
from app.api.auth_routes import validation_errors_to_error_messages

review_routes = Blueprint("reviews", __name__, url_prefix="")

#get all reviews
@review_routes.route('/reviews')
def all_reviews():
    reviews = Review.query.all()
    return {review.id:review.to_dict() for review in reviews}

#get all reviews of a business
@review_routes.route('/reviews/<int:businessId>')
def get_reviews(businessId):
    business_reviews = Review.query.filter(Review.business_id == businessId)
    print(CREDBG, business_reviews, CEND)
    return {review.id:review.to_dict() for review in business_reviews}

#delete a review of a business
@review_routes.route('/reviews/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    deleted_review = Review.query.filter(Review.id == id).first()
    db.session.delete(deleted_review)
    db.session.commit()

    return deleted_review.to_dict()

#create a review of a business
@review_routes.route('/reviews/add', methods=['POST'])
@login_required
def create_new_review():
    form = NewReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data

    if form.validate_on_submit():
        new_review = Review(
            user_id = current_user.id,
            business_id = data['business_id'],
            rating = data['rating'],
            content = data['content']
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    else:
        return { 'errors': validation_errors_to_error_messages(form.errors)}, 400



#edit a review
@review_routes.route('/reviews/edit/<int:id>', methods=['PATCH'])
@login_required
def edit_review(id):

    form = EditReviewForm()

    form["csrf_token"].data = request.cookies["csrf_token"]
    data = form.data
    if form.validate_on_submit():
        edited_review = Review.query.filter(Review.id == id).first()

        edited_review.rating = data['rating']
        edited_review.content = data['content']

        db.session.commit()
        return edited_review.to_dict()
    else:
        return { 'errors': validation_errors_to_error_messages(form.errors)}, 400
