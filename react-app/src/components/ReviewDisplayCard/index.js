import React from 'react';
import './ReviewDisplayCard.css'


function ReviewDisplayCard({userName, userSrc, userAlt, userCity, userState, reviewContent, rating}) {

    return (
        <>
            <div className="review-card-container">
                <div className="user-info-container">
                    <div className="user-profile-img-container">
                        <img className="user-profile-img" src={userSrc} alt={userAlt}/>
                    </div>
                    <div className="user-info">
                        <div className="user-info-name">{userName}</div>
                        <div>{userCity} {userState}</div>
                    </div>
                </div>

                <div className="review-rating">
                    {rating}
                </div>

                <div className="review-content">
                    {reviewContent}
                </div>
            </div>

        </>
    )
}

export default ReviewDisplayCard
