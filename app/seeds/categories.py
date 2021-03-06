from app.models import db, Category

def seed_categories():
    categories1 = Category(
        name = 'Restaurants'
    )
    categories2 = Category(
        name = 'Home Services'
    )
    categories3 = Category(
        name = 'Dry Cleaning'
    )
    categories4 = Category(
        name = 'Hotels'
    )
    categories5 = Category(
        name = 'Gyms'
    )

    db.session.add(categories1)
    db.session.add(categories2)
    db.session.add(categories3)
    db.session.add(categories4)
    db.session.add(categories5)
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
