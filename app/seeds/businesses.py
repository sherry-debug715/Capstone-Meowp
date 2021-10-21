from app.models import db, Business

def seed_businesses():
    business1 = Business(
        owner_id=6,
        category_id=1,
        title='Blue Cactus Grill',
        description='Best burger in town',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/rGh--mf-1FzK9U03KMYZ4Q/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/iHIjPvOoQb0AH27w8XLZrQ/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/zfXtkQitogKrzqyTq-BeYw/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/TRrPGrVWM4VQnHhbbqgjNg/o.jpg',
        media_5='https://s3-media0.fl.yelpcdn.com/bphoto/HNcNN3tP9Kts-YhQbvsQvA/o.jpg',
        address='51 Stevens St Norwalk',
        city='Norwalk',
        state='CT',
        zip_code='06850'
    )

    business2 = Business(
        owner_id=2,
        category_id=1,
        title='Barn Door Restaurant',
        description='Traditional American Food',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/nx6bQ308E0BL1PTgC0ya9Q/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/tylg-rlow2YEjnWjeEnnqQ/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/qHGalFQSxvopGNB_aZHo4A/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/gBOA8TElQHdOmNA8k10JbQ/o.jpg',
        media_5='https://s3-media0.fl.yelpcdn.com/bphoto/SBsm_MEB9B70qXIcqswT2A/o.jpg',
        address='37 Ethan Allen Hwy Ridgefield',
        city='Ridgefield',
        state='CT',
        zip_code='06877'
    )

    business3 = Business(
        owner_id=3,
        category_id=2,
        title='Austin Professional Painting',
        description='Painters, Pressure Washers',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/E-Y6hQdtf225bZGM4O_lNw/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/PYatM_vNDmsnoZAFKnP2sw/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/KCFLuYVbC5REp-cvG8_2YA/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/i6HEAPafz7K9ae3NFzTzCA/o.jpg',
        media_5='https://s3-media0.fl.yelpcdn.com/bphoto/nE3i3uSbulCjAF4P70azsQ/o.jpg',
        address='5555 N Lamar Blvd Ste L103',
        city='Austin',
        state='TX',
        zip_code='78701'
    )
    business4 = Business(
        owner_id=5,
        category_id=3,
        title='Oakhurst Cleaners & Laundry',
        description='Dry Cleaning, Sewing&Alterations, Clothing Rental',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/Zkdnjn5qsS1iYi0MtH9cxw/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/UwlqzmeyYlRmftoiUCSQ6w/o.jpg',
        media_3='',
        media_4='',
        media_5='',
        address='40119 Enterprise Dr',
        city='Oakhurst',
        state='CA',
        zip_code='93644'
    )
    business5 = Business(
        owner_id=4,
        category_id=4,
        title='Courtyard by Marriott Marathon Florida Keys',
        description='Beautiful beachfront family get away',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/C7Vrb9s1nw0FirrVXNATsw/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/4BkrnmxPnXTgfVM3Ja2cew/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/S7rhJeI9jNBIRs_9qPkSeA/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/jtrK0jqTKjLO3As7G0OpxA/o.jpg',
        address='2146 Overseas Highway',
        city='Marathon',
        state='FL',
        zip_code='33050'
    )

    db.session.add(business1)
    db.session.add(business2)
    db.session.add(business3)
    db.session.add(business4)
    db.session.add(business5)
    db.session.commit()

def undo_businesses():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
