from app.models import db, Business

def seed_businesses():
    business1 = Business(
        owner_id=2,
        category_id=1,
        title='Raku',
        description='Japanese, Noodles',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/GEbZnH1jR4n7D5WOJ3urPg/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/ojw-7X29lVVK8872e1-ynw/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/o_zfzSuog1V1tVKSD8GrzA/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/gCGZAxUZlxegudhRxrd-Yw/o.jpg',
        media_5='https://s3-media0.fl.yelpcdn.com/bphoto/HZtxALI4djbVatv-te8JzA/o.jpg',
        address='342 E 6th St',
        city='New York',
        state='NY',
        zip_code='10003'
    )

    business2 = Business(
        owner_id=7,
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
        owner_id=6,
        category_id=1,
        title='One Waan Thai',
        description='Thai',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/eU5Gs0VxDNhr12bgNG10ew/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/wTxSq2Rpy9rddKO_dehX6A/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/Wm38GGM7zpaZ4BC118ahdg/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/6ReMAiPrHOYLdi0V5RFUQg/o.jpg',
        media_5='https://s3-media0.fl.yelpcdn.com/bphoto/ZWqM0TiMapu3mOnSHyS_jQ/o.jpg',
        address='2922 Diamond St',
        city='San Francisco',
        state='CA',
        zip_code='94131'
    )

    business4 = Business(
        owner_id=6,
        category_id=1,
        title='Alegrias',
        description='Spanish',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/Nc_icxzaW4lHJ9XSsK9TwQ/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/09H2tyGyhrIqH1l-dUnL0Q/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/vPCgPW6kaVPK1Kxf32oT8A/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/44sY9c6JZypXdmRWTUMZpA/o.jpg',
        media_5='https://s3-media0.fl.yelpcdn.com/bphoto/ptqNgaiGtV3VmyeW62koVQ/o.jpg',
        address='2018 Lombard St',
        city='San Francisco',
        state='CA',
        zip_code='94123'
    )

    business5 = Business(
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

    business6 = Business(
        owner_id=3,
        category_id=2,
        title='Renovate In Texas',
        description='Contractors, Patio Coverings, Decks & Railing',
        media_1='https://s3-media0.fl.yelpcdn.com/projectphoto/onVZlyXhGP0xggY0qhTlbg/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/projectphoto/rVz5q5ZIyPkUF4mFRB7L6Q/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/projectphoto/APoKa51J9_ZGiQUvcVwIDg/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/projectphoto/q0b8Rp4spJq5K-2Q19pPaQ/o.jpg',
        media_5='',
        address='9416 Anderson Mill Rd',
        city='Austin',
        state='TX',
        zip_code='78729'
    )

    business7 = Business(
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

    business8 = Business(
        owner_id=5,
        category_id=2,
        title="It's Cleaning Time!",
        description='Home Cleaning, Office Cleaning',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/_yXXwwXNrxbSp-ghxN1FyQ/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/u_uQ8HxtdlrLmEOajIgEtQ/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/m47ILpm7kPLlW3Oe7Ua0IQ/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/XCg6kxqmPufR0ZT1ealpFw/o.jpg',
        media_5='',
        address='',
        city='Round Rock',
        state='TX',
        zip_code='78681'
    )

    business9 = Business(
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

    business10 = Business(
        owner_id=4,
        category_id=4,
        title='Little Palm Island Resort & Spa',
        description='Beautiful beachfront family get away',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/pmzPeSYDIMoTYddQOrbkzQ/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/1HSdsJYCPXjhCq1sQWwfiw/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/xwswR-Bal4UgweyPkED6uA/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/OcP0BauEqX-GrYZIOqUG0Q/o.jpg',
        address='28500 Overseas Hwy',
        city='Little Torch Key',
        state='FL',
        zip_code='33042'
    )

    business11 = Business(
        owner_id=7,
        category_id=4,
        title='Casablanca Hotel',
        description='Hotels',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/jcijTRS7DLcQCfYI9AtA5w/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/VfvX62Gh8GoSQVHtNrfZiw/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/HVY0-snFeSBqu7q8UYzqHA/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/pvaqz73SKvQAHoUIfQ2E8Q/o.jpg',
        address='147 W 43rd St ',
        city='New York',
        state='NY',
        zip_code='10036'
    )

    business12 = Business(
        owner_id=7,
        category_id=4,
        title='Courtyard by Marriott New York Manhattan',
        description='Hotels',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/_VxAzYseqkUw7amBVltnfg/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/uDF8VDKQgzZ7voCJa2ccVQ/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/4VJfKx5x42MXhl2jjRy_Aw/o.jpg',
        address='866 3rd Ave',
        city='New York',
        state='NY',
        zip_code='10022'
    )

    business13 = Business(
        owner_id=7,
        category_id=4,
        title="23rd Street Hair Salon",
        description='Lounges',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/zk1RQhSYBQ7Dy9-QyDaVSQ/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/SVpW6VgIvoiqTAbTHuVk3A/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/vL4YWif3K6pc0Q92NdNOCQ/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/C-lmEWS96bHzGxNN-plLfA/o.jpg',
        address='23rd Street Hair Salon',
        city='New York',
        state='NY',
        zip_code='10010'
    )

    business14 = Business(
        owner_id=5,
        category_id=5,
        title='FITNESS SF - Fillmore',
        description='Gyms Trainers Swimming Pools ',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/oJoOTGdTL6_-bFD3fGo2gw/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/mtruDoUjHzopLdum8cB-ew/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/t8T-XgVfwcCLvojMdZvWWA/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/mXb1JsTp_cQuXjZfv_2xiw/o.jpg',
        address='1455 Fillmore St',
        city='San Francisco',
        state='CA',
        zip_code='94115'
    )


    business15 = Business(
        owner_id=7,
        category_id=1,
        title='Mama Chow',
        description='Noodles, Ramen',
        media_1='https://s3-media0.fl.yelpcdn.com/bphoto/6FJGJanlx7BScrqGTVu5aA/o.jpg',
        media_2='https://s3-media0.fl.yelpcdn.com/bphoto/ASlxWJz2Jcd-h4nGcrzjrg/o.jpg',
        media_3='https://s3-media0.fl.yelpcdn.com/bphoto/qbrUe7ws6JgKMGGjvKrgCQ/o.jpg',
        media_4='https://s3-media0.fl.yelpcdn.com/bphoto/AGA-8-_1S1V-GunZEik-cw/o.jpg',
        address='3381 Post Rd',
        city='Southport',
        state='CT',
        zip_code='06890'
    )


    db.session.add(business1)
    db.session.add(business2)
    db.session.add(business3)
    db.session.add(business4)
    db.session.add(business5)
    db.session.add(business6)
    db.session.add(business7)
    db.session.add(business8)
    db.session.add(business9)
    db.session.add(business10)
    db.session.add(business11)
    db.session.add(business12)
    db.session.add(business13)
    db.session.add(business14)
    db.session.add(business15)
    db.session.commit()

def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
