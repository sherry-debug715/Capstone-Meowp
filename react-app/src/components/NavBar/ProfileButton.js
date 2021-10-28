import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";

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
            <span class="material-icons" onClick={openMenu}>
                face
            </span>
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
        </>
    )
}

export default ProfileIcon
