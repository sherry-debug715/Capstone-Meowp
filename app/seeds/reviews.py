from app.models import db, Review

def seed_reviews():
    review1 = Review(
        user_id=2,
        business_id=1,
        rating=4,
        content="Their cheese steak burger is out of the world"
    )
    review2 = Review(
        user_id=3,
        business_id=2,
        rating=5,
        content="Friendly workers and delicious foods",
        media_1="https://s3-media0.fl.yelpcdn.com/bphoto/FR7VDdPBmDJmVx3HsnHLSg/o.jpg",
        media_2="https://s3-media0.fl.yelpcdn.com/bphoto/uTi5RKshjUybpgXyyb4kOQ/o.jpg",
        media_3="https://s3-media0.fl.yelpcdn.com/bphoto/pKl2AzS_EfbcF8n5br68jA/o.jpg"
    )
    review3 = Review(
        user_id=1,
        business_id=3,
        rating=3.5,
        content="Good pating work"
    )
    review4 = Review(
        user_id=2,
        business_id=4,
        rating=4,
        content="It's just so so"
    )
    review5 = Review(
        user_id=3,
        business_id=5,
        rating=5,
        content="Great room ! Very spacious . I picked this hotel because it was almost the middle of all the Florida Keys, so I was able to have access to all of the MajorKeys and not have to travel too far. 45 miles from Key west, about 50 to 60 from Key Largo. The service was great and the property was by far the nicest Marriott property that I've seen thus far.",
        media_1="https://s3-media0.fl.yelpcdn.com/bphoto/02W5UyMMx0xv058OVMjHOg/o.jpg"
    )
    review6 = Review(
        user_id=1,
        business_id=2,
        rating=5,
        content="Come here with my family, everybody was happy with food here"
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
