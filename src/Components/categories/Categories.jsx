// import Slider from "react-slick";
import { Link } from "react-router-dom";

function Categories() {
    const categories = [
        {
            title: "All recipes",
            img: "storytelling.avif",
            alt: "book",
            href: "/all",
        },
        {
            title: "Appetizers",
            img: "tapas.avif",
            alt: "tapas",
            href: "/appetizer",
        },
        {
            title: "Breakfast",
            img: "pancakes.avif",
            alt: "pancakes",
            href: "/breakfast",
        },
        {
            title: "Dessert",
            img: "cake.avif",
            alt: "cake",
            href: "/dessert",
        },
        {
            title: "Dinner",
            img: "spaghetti.avif",
            alt: "spaghetti",
            href: "/dinner",
        },
        {
            title: "Lunch",
            img: "rice-bowl.avif",
            alt: "rice-bowl",
            href: "/lunch",
        },
        {
            title: "Sides",
            img: "pelmeni.avif",
            alt: "pelmeni",
            href: "/side",
        },
        {
            title: "Vegetarian",
            img: "tofu.avif",
            alt: "tofu",
            href: "/vegetarian",
        },
    ];

    return (
        <div className="categories-container">
            {categories.map((item) => (
                <Link className="cat-item-container" to={item.href} key={item.title}>
                    <img className="cat-item-img" src={item.img} alt={item.alt} />
                    <h4 className="cat-item-title">{item.title}</h4>
                </Link>
            ))}
        </div>
    );
}

export default Categories;
