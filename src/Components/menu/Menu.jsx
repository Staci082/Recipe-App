import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Theme from "../theme/Theme";
import { useTheme } from "../../Context/ThemeContext";

import { IoCreateOutline, IoSaveOutline, IoListOutline, IoLogInOutline, IoStarOutline } from "react-icons/io5";
import { LiaRandomSolid } from "react-icons/lia";
import { AiOutlineBgColors } from "react-icons/ai";
import { LuClipboardEdit } from "react-icons/lu";

function menu({ closeMenu }) {
    const { changeTheme, themes } = useTheme();
    const { isLoggedIn, logout } = useAuth();
    const [showThemeModal, setShowThemeModal] = useState(false);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            const userData = JSON.parse(localStorage.getItem("user"));
            if (userData) {
                setUserId(userData.id);
            }
        }
    }, [isLoggedIn]);

    const menuItems = [
        {
            title: "Create a Recipe",
            href: "/create",
            icon: <IoCreateOutline />,
        },
        {
            title: "Saved Recipes",
            href: "/saved",
            icon: <IoSaveOutline />,
        },
        {
            title: "Get Random Recipe",
            href: "/recipe/random",
            icon: <IoStarOutline />,
        },
        {
            title: "Grocery List",
            href: "/auth/list",
            icon: <IoListOutline />,
        },
    ];

    const handleLogout = () => {
        logout();
    };

    const openThemeModal = () => {
        setShowThemeModal(true);
        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
        }
    };
    const closeThemeModal = () => {
        setShowThemeModal(false);
        document.body.style.overflow = "unset";
    };

    const openConvertModal = () => {
        console.log(converter);
    };

    return (
        <>
            <div className="menu-container">
                <div className="logo-container">
                    <img width="48" height="48" src="/logo.avif" alt="taco logo" />
                    <p className="logo-title">Fiesta Flavors</p>
                </div>
                <h5>Menu</h5>
                <ul>
                    {menuItems.map((item) => (
                        <li className="menuItem" key={item.title}>
                            <Link
                                className="menuLink"
                                to={item.href}
                                onClick={() => {
                                    closeMenu();
                                }}
                            >
                                {item.icon}
                                {item.title}
                            </Link>
                        </li>
                    ))}
                    <li onClick={openConvertModal} className="menuItem menuLink">
                        <LiaRandomSolid />
                        Converter
                    </li>
                </ul>

                <h5>Settings</h5>
                <ul>
                    {!isLoggedIn ? (
                        <>
                            <li className="menuItem">
                                <Link to="/login" className="menuLink">
                                    <IoLogInOutline />
                                    Log in
                                </Link>
                            </li>
                            <li className="menuItem">
                                <Link to="/register" className="menuLink">
                                <LuClipboardEdit />

                                    Register
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="menuItem">
                                <Link to="/" onClick={handleLogout} className="logout-button menuLink">
                                    Log out
                                </Link>
                            </li>
                        </>
                    )}
                    <li className="menuItem">
                        <a onClick={openThemeModal} className="menuLink">
                            <AiOutlineBgColors />
                            Theme
                        </a>
                        {/* using "a" tag so styling stays the same */}
                    </li>
                </ul>
            </div>
            <Theme showModal={showThemeModal} closeModal={closeThemeModal} changeTheme={changeTheme} themeColors={Object.keys(themes)} />
        </>
    );
}

export default menu;
