function Categories() {
    const categories = [
        {
            title: "All recipes",
        },
        {
            title: "Appetizers",
        },
        {
            title: "Breakfasts",
        },
        {
            title: "Lunches",
        },
        {
            title: "Desserts",
        },
        {
            title: "Dinner",
        },
        {
            title: "Drinks",
        },
        {
            title: "Snacks",
        },
        {
            title: "Soups",
        },
        {
            title: "Vegetarian",
        },
    ];

    return (
        <div className="categories-container">
            {categories.map((item) => (
                <div className="cat-item-container">
                    <div>🚧</div>
                    <h4>{item.title}</h4>
                </div>
            ))}
        </div>
    );
}

export default Categories;
