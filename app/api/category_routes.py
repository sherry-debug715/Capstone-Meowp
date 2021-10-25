from flask import Blueprint, request
from app.models import db, Category
from app.forms.create_category_form import NewCategoryForm

category_routes = Blueprint("categories", __name__, url_prefix="/")


#get all categories
@category_routes.route('/categories')
def get_categories():
    all_category = Category.query.all()
    return { category.id:category.to_dict() for category in all_category}


# create a new category
@category_routes.route('/categories/new', methods=['POST'])
def create_category():
    form = NewCategoryForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_category = Category(
            name=form.data['name']
        )
        db.session.add(new_category)
        db.session.commit()

        return new_category.to_dict()
    else:
        return form.errors
