import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Theme from "../theme/Theme";
import { useTheme } from "../../Context/ThemeContext";

function menu({ closeMenu }) {
    const { changeTheme, themes } = useTheme();
    const { isLoggedIn, logout } = useAuth();
    const [showModal, setShowModal] = useState(false);
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
        },
        {
            title: "Saved Recipes",
            href: "/saved",
        },
        {
            title: "Get Random Recipe",
            href: "/recipe/random",
        },
        {
            title: "Grocery List",
            href: "/auth/list",
        },
    ];

    const handleLogout = () => {
        logout();
    };

    const openModal = () => {
        setShowModal(true);
        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
        }
    };
    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = "unset";
    };

    return (
        <>
            <div className="menu-container">
                <h5>Menu</h5>
                <ul>
                    {menuItems.map((item) => (
                        <li className="menuItem" key={item.title}>
                            <Link
                                to={item.href}
                                onClick={() => {
                                    closeMenu();
                                }}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <h5>Settings</h5>
                <ul>
                    {!isLoggedIn ? (
                        <>
                            <li className="menuItem">
                                <Link to="/login">Log in </Link>
                            </li>
                            <li className="menuItem">
                                <Link to="/register"> Register</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="menuItem">
                                <Link to="/" onClick={handleLogout} className="logout-button">
                                    Log out
                                </Link>
                            </li>
                        </>
                    )}
                    <li className="menuItem">
                        <a
                            onClick={openModal}> Theme</a>{/* using "a" tag so styling stays the same */}
                    </li>
                </ul>
            </div>
            <Theme showModal={showModal} closeModal={closeModal} changeTheme={changeTheme} themeColors={Object.keys(themes)} />
        </>
    );
}

export default menu;
