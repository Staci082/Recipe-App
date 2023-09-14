// import Slider from "react-slick";
import { Link } from "react-router-dom"

function Categories() {
    const categories = [
        {
            title: "All recipes",
            img: "https://img.icons8.com/wired/64/storytelling.png",
            href: "/all"
        },
        {
            title: "Appetizers",
            img: "https://img.icons8.com/wired/64/tapas.png",
            href: "/appetizers"
        },
        {
            title: "Breakfast",
            img: "https://img.icons8.com/wired/64/american-pancakes.png",
            href: "/breakfast"
        },
        {
            title: "Dessert",
            img: "https://img.icons8.com/wired/64/strawberry-cheesecake.png",
            href: "/dessert"
        },
        {
            title: "Dinner",
            img: "https://img.icons8.com/wired/64/spaghetti.png",
            href: "/dinner"
        },
        {
            title: "Lunch",
            img: "https://img.icons8.com/wired/64/rice-bowl.png",
            href: "/lunch"
        },
        {
            title: "Sides",
            img: "https://img.icons8.com/wired/64/pelmeni.png",
            href: "/sides"
        },
        {
            title: "Vegetarian",
            img: "https://img.icons8.com/wired/64/firm-tofu.png",
            href: "/vegetarian"
        },
    ];

    // const sliderSettings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 8,
    //     slidesToScroll: 2,
    //     initialSlide: 0,
    //     swipeToSlide:true,
    //     swipe:true,
    //     arrows:false,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 5,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true,
    //             },
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // };

    return (
        <div className="categories-container">
            {/* <Slider className="slider" {...sliderSettings} > */}
                {categories.map((item) => (
                    <Link className="cat-item-container" to={`/category${item.href}`} key={item.title}>
                        <img className="cat-item-img" src={item.img} />
                        <h4 className="cat-item-title">{item.title}</h4>
                    </Link>
                ))}
            {/* </Slider> */}
        </div>
    );
}

export default Categories;
