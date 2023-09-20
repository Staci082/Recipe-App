import { useState } from "react"
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { BsFillDropletFill } from "react-icons/bs";

function menu() {
    const menuItems = [
        {
            title: "Create a Recipe",
            href: "/create",
        },
        {
            title: "Saved Recipes",
            href: "/savedrecipes",
        },
        {
            title: "Add Internet Recipe",
            href: "/url",
        },
        {
            title: "Get Random Recipe",
            href: "/recipe/random",
        },
        {
            title: "Grocery List",
            href: "/list",
        },
    ];

    const [showModal, setShowModal] = useState(false)
    const [cookies, setCookies] = useCookies(["access_token"]);

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
    };


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
                {!cookies.access_token ? (
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
                            <Link to="/" onClick={logout} className="logout-button">
                                Log out
                            </Link>
                        </li>
                    </>
                )}
                <li className="menuItem">
                    <a  onClick={() => setShowModal(!showModal)}>Theme</a>
                </li>
            </ul>
        </div>
        {showModal && (
            <div className="theme-modal">
                <button onClick={() => setShowModal(!showModal)} className="recipe-back-button">
                        &times;
                    </button>
                <p className="theme-modal-title">Choose your theme:</p>

                <div className="theme-button-container">
                    <button className="theme-button orange"><BsFillDropletFill/></button>
                    <button className="theme-button red"><BsFillDropletFill/></button>
                    <button className="theme-button green"><BsFillDropletFill/></button>
                    <button className="theme-button blue"><BsFillDropletFill/></button>
                    <button className="theme-button purple"><BsFillDropletFill/></button>
                </div>
            </div>
        )}
        </>
    );
}

export default menu;
