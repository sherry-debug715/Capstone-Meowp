from app.models import db, Review

def seed_reviews():
    review1 = Review(
        user_id=3,
        business_id=1,
        rating=5,
        content="The niku udon is the item to get. The honeycomb tripe had an amazing texture that contrasted well with the tender beef and the chewy udon noodle, and the broth had lot of depth. It came with chili oil on the side that I would've preferred to be spicier, but it didn't take away from anything as the broth has enough flavour to hold its own."
    )
    review2 = Review(
        user_id=4,
        business_id=1,
        rating=4,
        content="I love udon and Raku does it well! Their hot udon noodles are soft and chewy with the perfect amount of flavor in every bite. I typically order the sansai and add on a poached egg and mochi. (mochi lovers out there this is a must!)While their wait time during busy times is typically an hour, its worth it!"
    )
    review3 = Review(
        user_id=5,
        business_id=1,
        rating=3,
        content="Popular place so I had to try it. Udon itself is rly good. Chewy and handmade - just the way I like it. I wanted to try one cold udon and one hot."
    )
    review4 = Review(
        user_id=6,
        business_id=1,
        rating=4,
        content="First of all, the noodles here are soooo chewy and good! My friend and I both got udon and they were pretty good. I got the gyunan and the broth was pretty light and filling. My friend got the tantan, but the broth tasted a LOT like sesame oil.. There were some peanut pieces at the bottom of the broth so make sure to stir through the broth while eating!"
    )
    review5 = Review(
        user_id=6,
        business_id=1,
        rating=5,
        content="Did it! Ventured to Raku. Sat outside and it was cool enough to the point that when we bit into the chicken and sipped the broth for the first time, the warmth was pronounced. Spicy Niku is not too spicy and even those with low spice tolerance would be able to enjoy. "
    )
    review6 = Review(
        user_id=7,
        business_id=1,
        rating=5,
        content="Friendly service. Waiter was knowledgeable on explaining the popular menu items in detail, helped us easily make a decision. I ordered the Ebiten udon with a side of poached egg and shiitake mushroom."
    )
    review7 = Review(
        user_id=1,
        business_id=1,
        rating=5,
        content="I'm not usually an udon person but Raku definitely changed my mind! The Niku Udon might be my favorite bowl of udon ever. The noodles are incredible--the shape is flatter than normal udon noodles, they have the perfect amount of chewiness, and the texture and feel of them is just entirely different from any other noodles I've had."
    )

    review8 = Review(
        user_id=3,
        business_id=2,
        rating=5,
        content="Was pleasantly surprised by how amazing this restaurant was. I had the best chicken parmesan and tiramisu I think I've ever had. Their fried calamari and bread dish was amazing as well."
    )
    review9 = Review(
        user_id=1,
        business_id=2,
        rating=4,
        content="Door is always open. Food is great. Great spot fir you and the kids. Amazing onion soup."
    )
    review10 = Review(
        user_id=4,
        business_id=2,
        rating=4,
        content="We had an excellent time eating here. My lamb burger was delicious, with the fries being the absolute perfect mixture of crispy and thick. The inside was great,  and nothing was wrong with the service."
    )
    review11 = Review(
        user_id=5,
        business_id=2,
        rating=5,
        content="We've past Barn Door a hundred times and saw the parking lot busy. A telltale sign of good food. So we called an made a reservation. Jen was great she found a table last minute. We were served by Bruno who was a happy waiter giving great service. The food was just plain Terrific. "
    )
    review12 = Review(
        user_id=6,
        business_id=2,
        rating=5,
        content="Bored with restaurants close to home so we ventured a bit far and decided to try Barn Door. I ignored the not so good review and gave it a shot.  Glad I did.  I like the rustic feel when I entered the restaurant...it's pretty .  The fireplace is romantic so perfect for date as well."
    )
    review13 = Review(
        user_id=7,
        business_id=2,
        rating=5,
        content="I have always enjoyed eating at Barn Door, but I've apparently never written a review. Well, better late than never! I find the location very cozy to dine in, either in the dining room or at the bar. "
    )

    review14 = Review(
        user_id=2,
        business_id=3,
        rating=5,
        content="Amazing Thai food experience here. One waan thai is a nice atmosphere,great quality and flavorful food. Definitely recommend this place!!!(the best spot in Glen park)"
    )
    review15 = Review(
        user_id=3,
        business_id=3,
        rating=4,
        content="Visiting in SF and a friend suggested this place, so we went to check it out!"
    )
    review16 = Review(
        user_id=4,
        business_id=3,
        rating=4,
        content="I've ordered from One Waan a few times now, it's near my house and orders are usually delivered within the hour. I typically order the same thing of every Thai restaurant and its no different here, I know what I like."
    )
    review17 = Review(
        user_id=1,
        business_id=4,
        rating=5,
        content="This Spanish restaurant is not to be missed. The paella is to die for. "
    )

    review18 = Review(
        user_id=2,
        business_id=4,
        rating=5,
        content="The third in my trio of three favorite restaurants in San Francisco! The Owner/host was incredibly friendly and helpful navigating the menu, and the food was amazing! They have the best Paella I have ever had."
    )

    review19 = Review(
        user_id=5,
        business_id=4,
        rating=4,
        content="More like 3 stars but bumped up for the friendly staff, good service, and ambiance."
    )

    review20 = Review(
        user_id=1,
        business_id=5,
        rating=3.5,
        content="Good pating work"
    )

    review21 = Review(
        user_id=2,
        business_id=5,
        rating=4,
        content="Good pating work"
    )

    review22 = Review(
        user_id=4,
        business_id=5,
        rating=5,
        content="Good pating work"
    )

    review23 = Review(
        user_id=6,
        business_id=5,
        rating=5,
        content="Good pating work"
    )

    review24 = Review(
        user_id=1,
        business_id=5,
        rating=3,
        content="Good pating work"
    )

    review25 = Review(
        user_id=1,
        business_id=6,
        rating=4,
        content="Good job"
    )

    review26 = Review(
        user_id=4,
        business_id=6,
        rating=5,
        content="Good job"
    )

    review27 = Review(
        user_id=6,
        business_id=6,
        rating=5,
        content="Good job"
    )

    review28 = Review(
        user_id=2,
        business_id=7,
        rating=4,
        content="Great service"
    )
    review29 = Review(
        user_id=3,
        business_id=7,
        rating=5,
        content="Great service"
    )
    review30 = Review(
        user_id=6,
        business_id=7,
        rating=4,
        content="Great service"
    )
    review31 = Review(
        user_id=1,
        business_id=8,
        rating=4,
        content="Great service"
    )
    review32 = Review(
        user_id=2,
        business_id=8,
        rating=4,
        content="Great service"
    )
    review33 = Review(
        user_id=1,
        business_id=8,
        rating=5,
        content="Great service"
    )
    review34 = Review(
        user_id=1,
        business_id=8,
        rating=3,
        content="Great service"
    )
    review35 = Review(
        user_id=1,
        business_id=8,
        rating=4,
        content="Great service"
    )
    review36 = Review(
        user_id=1,
        business_id=8,
        rating=5,
        content="Great service"
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
