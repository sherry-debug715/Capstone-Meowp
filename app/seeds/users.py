from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='Marnie', email='marnie@aa.io', password='password', photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7jTi0tRmc03WaV4ZxuA-LuKnc2GDUbb5Ng&usqp=CAU', city='New York', state='New York')
    bobbie = User(
        username='Bobbie', email='bobbie@aa.io', password='password', photo='https://i.redd.it/v0caqchbtn741.jpg', city='Austin', state='Texas' )
    raegan = User(
        username='Raegan', email='raegan@aa.io', password='password', photo='https://s3-media0.fl.yelpcdn.com/photo/ROYrT7cuomHHp4A8_mM93g/300s.jpg', city='Marathon', state='Florida' )
    matthew = User(
        username='Matthew', email='matthew@aa.io', password='password', photo='https://s3-media0.fl.yelpcdn.com/photo/AFsVcMxL0dDSnknk6BSPGg/300s.jpg', city='Oakhurst', state='California' )
    jeanne = User(
        username='Jeanne', email='Jeanne@aa.io', password='password', photo='https://i.redd.it/v0caqchbtn741.jpg', city='San Francisco', state='California' )
    jhone = User(
        username='Jhone', email='Jhone@aa.io', password='password', photo='https://i.redd.it/v0caqchbtn741.jpg', city='Fairfield', state='Connecticut' )


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(raegan)
    db.session.add(matthew)
    db.session.add(jeanne)
    db.session.add(jhone)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
