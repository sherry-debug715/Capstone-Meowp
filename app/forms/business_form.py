from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import IntegerField,StringField

class BusinessForm(FlaskForm):
    owner_id = IntegerField('user_id', validators=[DataRequired()])
    category_id = IntegerField('category_id', validators=[DataRequired()])
    title = StringField('business_title', validators=[DataRequired()])
    description = StringField('business_description', validators=[DataRequired()])
    media_1 = StringField('business_url1', validators=[DataRequired()])
    media_2 = StringField('business_url2')
    media_3 = StringField('business_url3')
    media_4 = StringField('business_url4')
    media_5 = StringField('business_url5')
    address = StringField('business_address')
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zip_code = StringField('zip_code', validators=[DataRequired()])
