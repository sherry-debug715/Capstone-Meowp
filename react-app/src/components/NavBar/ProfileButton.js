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
                <LogoutButton />
            )}
            </div>
        </>
    )
}

export default ProfileIcon
