function SideMenu() {
    const menuItems = [
        {
            title: "Discover",
            href: "/discover",
            icon: "",
        },
        {
            title: "My Recipes",
            href: "/recipes",
            icon: "",
        },
        {
            title: "Create a Recipe",
            href: "/create",
            icon: "",
        },
        {
            title: "Add an Internet Recipe",
            href: "/add",
            icon: "",
        },
        {
            title: "Grocery List",
            href: "/list",
            icon: "",
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

export default SideMenu;
