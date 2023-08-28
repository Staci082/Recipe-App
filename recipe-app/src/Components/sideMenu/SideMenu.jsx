function SideMenu() {
    const menuItems = [
        {
            title: "Dashboard",
            href: "",
            icon: "",
        },
        {
            title: "Discover",
            href: "",
            icon: "",
        },
        {
            title: "My Recipes",
            href: "",
            icon: "",
        },
        {
            title: "Create a Recipe",
            href: "",
            icon: "",
        },
        {
            title: "Add an Internet Recipe",
            href: "",
            icon: "",
        },
        {
            title: "Grocery List",
            href: "",
            icon: "",
        },
    ];

    return (
        <div className="side-menu-container">
            <h5>Menu</h5>
            <ul>
                {menuItems.map((item) => (
                    <li className="menuItem"><a href={item.href}>{item.title}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default SideMenu;
