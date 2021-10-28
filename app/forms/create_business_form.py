from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, ValidationError
from wtforms import IntegerField, StringField, SubmitField


def businessPhotoEmpty(form, field):
    businessPhoto = field.data
    if businessPhoto == 'undefined' or businessPhoto == 'null':
        raise ValidationError('Please upload at least one image to represent your business')


class BusinessForm(FlaskForm):
    owner_id = IntegerField('user_id', validators=[DataRequired()])
    category_id = IntegerField('category_id', validators=[DataRequired()])
    title = StringField('business_title', validators=[DataRequired('Please provide the name of your business')])
    description = StringField('business_description', validators=[DataRequired('Please provide a description about your business')])
    media_1 = StringField('business_url1', validators=[DataRequired(), businessPhotoEmpty])
    media_2 = StringField('business_url2')
    media_3 = StringField('business_url3')
    media_4 = StringField('business_url4')
    media_5 = StringField('business_url5')
    address = StringField('business_address')
    city = StringField('city', validators=[DataRequired("Please provide the name of the city your business is located at")])
    state = StringField('state', validators=[DataRequired("Please provide the name of the state your business is located at")])
    zip_code = StringField('zip_code', validators=[DataRequired("Please provide a valid zipcode for your business")])
    submit = SubmitField('Submit')
