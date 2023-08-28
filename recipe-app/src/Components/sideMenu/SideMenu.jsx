
function SideMenu() {
    const menuItems = [
        {
            title: "Dashboard",
            href: "/",
            icon: "",
                // if empty can add something like 'add recipes to fill this space + link to discover'
        },
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
