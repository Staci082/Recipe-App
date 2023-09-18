import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function menu() {
    const menuItems = [
        {
            title: "Saved Recipes",
            href: "/savedrecipes",
        },
        {
            title: "My Recipes",
            href: "/myrecipes",
        },
        {
            title: "Create a Recipe",
            href: "/create",
        },
        {
            title: "Add Internet Recipe",
            href: "/url",
        },
        {
            title: "Get Random Recipe",
            href: "/recipe",
        },
        {
            title: "Grocery List",
            href: "/list",
        },
    ];

    const [cookies, setCookies] = useCookies(["access_token"]);

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
    };

    return (
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
                    <Link>Theme</Link>
                </li>
            </ul>
        </div>
    );
}

export default menu;
