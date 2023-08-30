function menu() {
    const menuItems = [
        {
            title: "Discover",
            href: "/discover",
        },
        {
            title: "My Recipes",
            href: "/recipes",
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
    ];

    return (
        <div className="side-container">
            <div className="menu-container">
                <h5>Menu</h5>
                <ul>
                    {menuItems.map((item) => (
                        <li className="menuItem">
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default menu;
