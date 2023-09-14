import { useCookies } from "react-cookie";
import { Link } from "react-router-dom"


function menu() {
    const menuItems = [
        {
            title: "Discover",
            href: "/recipes",
        },
        {
            title: "Get Random Recipe",
            href: "/random",
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
        <div className="side-container">
            <div className="menu-container" >
                <h5>Menu</h5>
                <ul>
                    {!cookies.access_token ? (
                        <>
                            <li className="menuItem">
                                <a href="/login">Log in </a> /<a href="/register"> Register</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="menuItem">
                                <a href="/" onClick={logout} className="logout-button">
                                    Log out
                                </a>
                            </li>
                            <li className="menuItem">
                                <a href="/savedrecipes">My Recipes</a>
                            </li>
                        </>
                    )}

                    {menuItems.map((item) => (
                        <li className="menuItem" key={item.title}>
                            <Link to={item.href}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default menu;
