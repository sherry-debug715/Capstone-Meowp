import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import './NavBar.css'

function ProfileIcon() {

    const [showMenu, setShowMenu] = useState(false);
    const sessionUser = useSelector((state) => state.session?.user);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);


    return (
        <>
            <div className="profile-container">
                <div className="profile-btn-drowdown">
                    <img alt="profile-button" onClick={openMenu} id="profile-button" src="https://cdn.discordapp.com/attachments/900530489574703194/903399493779742770/unknown.png"/>
                    <span id="material-icon-arrow-dropdown" class="material-icons" onClick={openMenu}>
                        arrow_drop_down
                    </span>
                </div>
                <div className="dropdown-content">
                    {showMenu && (
                        <div id="profile-drop-down">
                            <div className="user-info">
                                <div id="profile-dropdown-content">
                                    <span id="material-icon-profile" class="material-icons">
                                        face
                                    </span>
                                    <p className="user-info-content">{sessionUser?.username}</p>
                                </div>
                                {sessionUser?.city &&(
                                    <div id="profile-dropdown-content">
                                        <span id="material-icon-profile" class="material-icons">
                                            location_city
                                        </span>
                                        <p className="user-info-content">{sessionUser?.city}</p>
                                    </div>
                                )}
                            </div>

                            <div id="profile-dropdown-content" className="logout-btn-container">
                                <span id="material-icon-profile" class="material-icons">
                                    logout
                                </span>
                                <LogoutButton />
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProfileIcon
