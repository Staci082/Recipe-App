import { useCookies } from "react-cookie";

function menu() {
    const menuItems = [
        {
            title: "My Recipes",
            href: "/",
        },
        {
            title: "Discover",
            href: "/",
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
            <div className="menu-container">
                <h5>Menu</h5>
                <ul>
                    <li className="menuItem">
                        {!cookies.access_token ? (
                            <>
                                <a href="/login">Log in </a> /<a href="/register"> Register</a>
                            </>
                        ) : (
                            <a onClick={logout} className="logout-button">Log out</a>
                        )}
                    </li>

                    {menuItems.map((item) => (
                        <li className="menuItem" key={item.title}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default menu;
