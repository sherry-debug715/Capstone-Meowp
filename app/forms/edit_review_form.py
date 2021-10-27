from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from wtforms.validators import DataRequired


class EditReviewForm(FlaskForm):
    rating = IntegerField('rating', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
    submit = SubmitField('Submit')
