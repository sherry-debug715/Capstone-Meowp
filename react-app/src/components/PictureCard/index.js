import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css'


function Card({ src, alt, businessName, businessReview, reviewNum }) {

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
                        <NavLink className="card-review-number" to="#" style={{ textDecoration:'none'}}>{reviewNum} Reviews</NavLink>
                        <div className="business-sample-review">
                            <p>"{businessReview}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card
