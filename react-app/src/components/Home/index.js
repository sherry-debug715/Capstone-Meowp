import React, { useState, useEffect } from "react";
import './Home.css'

const HomePage = () => {

    let photo1 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/a2a6dfbdce53/assets/img/home/hero_photos/Y52KtIDZeG8aAMBaLIjSlQ.jpg";
    let photo2 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/b63753e02fe3/assets/img/home/hero_photos/w1be4pCC7p0rySKSbvSBPA.jpg";
    let photo3 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/7822ae13199f/assets/img/home/hero_photos/9pnLHoZnwY067nbjHNPnfQ.jpg";
    let photo4 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/ad9f16b7b26d/assets/img/home/hero_photos/-j5Gbjs3j_MEN4bwf9Mf_w.jpg";
    let photo5 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/884c12b285fc/assets/img/home/hero_photos/TdClV4QlpucjFX4GdPc2QQ.jpg";
    let photo6 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/e456d8b923f5/assets/img/home/hero_photos/DLIUyjgS7v50YRV2xfNquA.jpg";

    return (
        <>
            <div id="splashpage_container_main">
                <div>
                    {/* <div
                    className="splashpage_container_main_left"
                    style={{ backgroundImage: `url(${photo1})` }}
                    > */}
                    <div className="carousel">
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo1})`,
                            }}
                        >Real People Real Reviews</div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo2})`,
                            }}
                        >Try something New Everyday</div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo3})`,
                            }}
                        >We Know Just The Place</div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo4})`,
                            }}
                        >A Place to Meowp Your Review</div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo5})`,
                            }}
                        >Meowp What You Love</div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo6})`,
                            }}
                        ></div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default HomePage;
