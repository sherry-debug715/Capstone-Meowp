from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class NewCategoryForm(FlaskForm):
    name = StringField('Category', validators=[DataRequired()])
    submit = SubmitField('Submit')
