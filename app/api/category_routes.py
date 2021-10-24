from flask import Blueprint, request
from app.models import db, Category


category_routes = Blueprint("categories", __name__, url_prefix="/")


#get all categories
@category_routes.route('/categories')
def get_categories():
    all_category = Category.query.all()
    return { category.id:category.to_dict() for category in all_category}
