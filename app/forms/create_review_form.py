from re import S
from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from wtforms.validators import DataRequired

class NewReviewForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    business_id = IntegerField('business_id', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
    submit = SubmitField('Submit')
