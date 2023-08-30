function Categories() {
    const categories = [
        {
            title: "All recipes",
            img: "https://img.icons8.com/wired/64/storytelling.png"
        },
        {
            title: "Appetizers",
            img: "https://img.icons8.com/wired/64/tapas.png"
        },
        {
            title: "Breakfast",
            img: "https://img.icons8.com/wired/64/american-pancakes.png"
        },
        {
            title: "Dessert",
            img: "https://img.icons8.com/wired/64/strawberry-cheesecake.png"
        },
        {
            title: "Dinner",
            img: "https://img.icons8.com/wired/64/spaghetti.png"
        },
        {
            title: "Lunch",
            img: "https://img.icons8.com/wired/64/rice-bowl.png"
        },
        {
            title: "Sides",
            img: "https://img.icons8.com/wired/64/pelmeni.png"
        },
        {
            title: "Vegetarian",
            img: "https://img.icons8.com/wired/64/firm-tofu.png"
        },
    ];

    return (
        
        <div className="categories-container">
                    
            {categories.map((item) => (
                <button className="cat-item-container">
                    <img className="cat-item-img" src={item.img} />
                    <h4 className="cat-item-title">{item.title}</h4>
                </button>
            ))}
        </div>
       
    );
}

export default Categories;
