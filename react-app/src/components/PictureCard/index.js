import React from 'react';
import './Card.css'


function Card({ src, alt, businessName }) {
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
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card
