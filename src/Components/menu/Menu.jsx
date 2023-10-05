import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillDropletFill } from "react-icons/bs";
import { useAuth } from "../../Context/AuthContext";

function menu() {

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
            href: `/auth/savedrecipes/`,
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

    const changeTheme = (e) => {
        setShowModal(!showModal);
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

    const themeColors = ["red", "orange", "green", "blue", "purple"];

    return (
        <>
            <div className="menu-container">
                <h5>Menu</h5>
                <ul>
                    {menuItems.map((item) => (
                        <li className="menuItem" key={item.title}>
                            <Link to={item.href}>{item.title}</Link>
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
                        <a onClick={openModal}>Theme</a>
                    </li>
                </ul>
            </div>
            {showModal && (
                <div className="theme-modal">
                    <button onClick={closeModal} className="recipe-back-button">
                        &times;
                    </button>
                    <p className="theme-modal-title">Choose your theme:</p>

                    <div className="theme-button-container">
                        {themeColors.map((color) => (
                            <button onClick={changeTheme} className={`theme-button ${color}`} key={color}>
                                <BsFillDropletFill />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default menu;
