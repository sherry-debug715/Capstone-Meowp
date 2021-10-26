import React from 'react';
import './Card.css'


function Card({ src, alt, businessName, businessReview }) {
    return (
        <>
            <div className="card-container">
                <div className="card-content-container">
                    <div className="business-image">
                        <img src={src} alt={alt} />
                    </div>
                    <div className="content-container">
                        <div className="business-name-container">
                            <h3 className="business-name">{businessName}</h3>
                        </div>
                        <div className="business-sample-review">
                            <div
                                className="review-icon"
                                style={{
                                    backgroundImage:`url(https://toppng.com/uploads/preview/chat-icon-comments-icon-11553508047pnx3f5bvsr.png)`,
                                }}
                            ></div>
                            <p>"{businessReview}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card
