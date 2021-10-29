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
                    <span class="material-icons" onClick={openMenu}>
                        arrow_drop_down
                    </span>
                </div>
                <div className="dropdown-content">
                    {showMenu && (
                        <ul id="profile-drop-down">
                            <li id="user-name">
                                {sessionUser?.username}
                            </li>
                            {sessionUser?.city &&(
                                <li>
                                    {sessionUser?.city}, {sessionUser?.state}
                                </li>
                            )}
                            <li>
                                <LogoutButton />
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProfileIcon
