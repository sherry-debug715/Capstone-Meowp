import {React, useEffect, useState} from 'react';
import './ReviewDisplayCard.css'


function ReviewDisplayCard({userName, userSrc, userAlt, userCity, userState, reviewContent, editDeleteButtons, rating}) {

    const [showMenu, setShowMenu] = useState(false);
    const openMenu = () => {
        // if(showMenu) return;
        setShowMenu(state => !state);
    };
    // useEffect(() => {
    //     if(!showMenu) return;
    //     const closeMenu = () => {
    //         setShowMenu(false);
    //     }
        // document.addEventListener('click', closeMenu);
        // return () => document.removeEventListener("click", closeMenu)
    // }, [showMenu]);



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
                    <span class="material-icons" onClick={openMenu}>
                        more_horiz
                    </span>
                    {showMenu && (
                        <>
                            {editDeleteButtons}
                        </>
                    )}
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
