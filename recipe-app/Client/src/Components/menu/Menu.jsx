function menu() {
    const menuItems = [
        {
            title: "Discover",
            href: "/",
        },
        {
            title: "My Recipes",
            href: "/",
        },
        {
            title: "Create a Recipe",
            href: "/create",
        },
        {
            title: "Add an Internet Recipe",
            href: "/add",
        },
        {
            title: "Grocery List",
            href: "/list",
        },
        {
            title: "Log in",
            href: "/login",
        },
        { 
            title: "Register", 
            href: "/register" },
    ];

    return (
        <div className="side-container">
            <div className="menu-container">
                <h5>Menu</h5>
                <ul>
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
