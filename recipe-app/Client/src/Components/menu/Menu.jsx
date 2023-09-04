


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
                    <li className="menuItem" >
                    <a href="/register">Register </a> /
                        <a href="/login"> Log in </a> 
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default menu;
