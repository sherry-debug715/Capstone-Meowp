import React from "react";
import BlogCard from "./BlogCard";
import './Home.css'

const HomePage = () => {

    let photo1 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/a2a6dfbdce53/assets/img/home/hero_photos/Y52KtIDZeG8aAMBaLIjSlQ.jpg";
    let photo2 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/b63753e02fe3/assets/img/home/hero_photos/w1be4pCC7p0rySKSbvSBPA.jpg";
    let photo3 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/7822ae13199f/assets/img/home/hero_photos/9pnLHoZnwY067nbjHNPnfQ.jpg";
    let photo4 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/ad9f16b7b26d/assets/img/home/hero_photos/-j5Gbjs3j_MEN4bwf9Mf_w.jpg";
    let photo5 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/884c12b285fc/assets/img/home/hero_photos/TdClV4QlpucjFX4GdPc2QQ.jpg";
    let photo6 = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/e456d8b923f5/assets/img/home/hero_photos/DLIUyjgS7v50YRV2xfNquA.jpg";
    let blogUrl1 = "https://blog.yelp.com/businesses/how-to-add-a-business-to-yelp/?utm_medium=search&utm_source=type:claim_ad_google&utm_campaign=ClickLogic-Main_CPC_D_yelp-marketing&utm_content=claim-your-free-business-page&gclid=Cj0KCQjwt-6LBhDlARIsAIPRQcJUD-B9kcygWI9PS42yX5j0D2TuKhgaOcKeNnThLvltlRqiWfcGftIaAr2tEALw_wcB";
    let blog1Image = "https://blog.yelp.com/wp-content/uploads/2020/08/Photo-by-Artem-Gavrysh-scaled.jpg?utm_medium=search&utm_source=type:claim_ad_google&utm_campaign=ClickLogic-Main_CPC_D_yelp-marketing&utm_content=claim-your-free-business-page&gclid=Cj0KCQjwt-6LBhDlARIsAIPRQcJUD-B9kcygWI9PS42yX5j0D2TuKhgaOcKeNnThLvltlRqiWfcGftIaAr2tEALw_wcB";
    let blogUrl2 = "https://blog.yelp.com/businesses/how-to-write-a-business-description/?utm_medium=search&utm_source=type:claim_ad_google&utm_campaign=ClickLogic-Main_CPC_D_yelp-marketing&utm_content=claim-your-free-business-page&gclid=Cj0KCQjwt-6LBhDlARIsAIPRQcJUD-B9kcygWI9PS42yX5j0D2TuKhgaOcKeNnThLvltlRqiWfcGftIaAr2tEALw_wcB";
    let blog2Image = "https://blog.yelp.com/wp-content/uploads/2020/02/Full-Article-Feature-Image-900x354-3-1-1024x394.png";
    let blogUrl3 = "https://blog.yelp.com/businesses/5-free-things-you-didnt-know-you-could-do-on-your-yelp-page/?utm_medium=search&utm_source=type:claim_ad_google&utm_campaign=ClickLogic-Main_CPC_D_yelp-marketing&utm_content=claim-your-free-business-page&gclid=Cj0KCQjwt-6LBhDlARIsAIPRQcJUD-B9kcygWI9PS42yX5j0D2TuKhgaOcKeNnThLvltlRqiWfcGftIaAr2tEALw_wcB"
    let blog3Image = "https://blog.yelp.com/wp-content/uploads/2020/02/Screen-Shot-2020-02-26-at-2.24.52-PM.png?utm_medium=search&utm_source=type:claim_ad_google&utm_campaign=ClickLogic-Main_CPC_D_yelp-marketing&utm_content=claim-your-free-business-page&gclid=Cj0KCQjwt-6LBhDlARIsAIPRQcJUD-B9kcygWI9PS42yX5j0D2TuKhgaOcKeNnThLvltlRqiWfcGftIaAr2tEALw_wcB";


    return (
        <>
            <div id="splashpage_container_main">
                <div id="carousel-container">
                    <div className="carousel">
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo1})`,
                            }}
                        ></div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo2})`,
                            }}
                        ></div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo3})`,
                            }}
                        ></div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo4})`,
                            }}
                        ></div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo5})`,
                            }}
                        ></div>
                        <div
                            className="inner_carousel"
                            style={{
                            backgroundImage: `url(${photo6})`,
                            }}
                        ></div>
                    </div>
                </div>

                <div id="business-display-container">
                    <h3>Learn how to market your business on Meowp like a pro</h3>
                    <div id="blog-card-content">
                        <div>
                            <BlogCard
                                src={blog1Image}
                                title="How to add a business"
                                blogUrl={blogUrl1}
                            />
                        </div>
                        <div>
                            <BlogCard
                                src={blog2Image}
                                title="How to write a great business description for review and social media sites"
                                blogUrl={blogUrl2}
                            />
                        </div>
                        <div>
                            <BlogCard
                                src={blog3Image}
                                title="How to add a business"
                                blogUrl={blogUrl3}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;
