import {React, useEffect, useState} from 'react';
import './ReviewDisplayCard.css'


function ReviewDisplayCard({userName, currentUser, userInitial, userSrc, userAlt, userCity, userState, reviewContent, editDeleteButtons, rating}) {

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
    function handleRating() {
        if(rating === 1) {
            return (
                <>
                    <span id="rating-icons" class="material-icons">
                        star
                    </span>
                </>
            )
        } else if(rating === 2) {
            return (
                <>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                </>
            )
        } else if(rating === 3) {
            return (
                <>
                    <span  id="rating-icons"class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                </>
            )
        } else if(rating === 4) {
            return (
                <>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                </>
            )
        } else {
            return (
                <>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                    <span  id="rating-icons" class="material-icons">
                        star
                    </span>
                </>
            )
        }

    }


    return (
        <>
            <div className="review-card-container">
                <div className="user-info-container">
                    <div id="user-name-display">
                        <div className="user-profile-img-container">
                            {userSrc ? (
                            <img className="user-profile-img" src={userSrc} alt={userAlt}/>
                            ):(
                                <div id="user-profile-inital">
                                    {userInitial}
                                </div>
                            )}
                        </div>
                        <div className="user-info">
                            <div className="user-info-name">{userName}</div>
                            <div>{userCity} {userState}</div>
                        </div>
                    </div>
                    {currentUser && (
                        <>
                        <span class="material-icons" onClick={openMenu}>
                            more_horiz
                        </span>
                        {showMenu && (
                            <>
                                {editDeleteButtons}
                            </>
                        )}
                        </>
                    )}
                </div>

                <div className="review-rating">
                    {handleRating()}
                </div>

                <div className="review-content">
                    {reviewContent}
                </div>

            </div>
        </>
    )
}

export default ReviewDisplayCard
