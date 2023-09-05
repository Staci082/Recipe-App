// import Slider from "react-slick";

function Categories() {
    const categories = [
        {
            title: "All recipes",
            img: "https://img.icons8.com/wired/64/storytelling.png",
        },
        {
            title: "Appetizers",
            img: "https://img.icons8.com/wired/64/tapas.png",
        },
        {
            title: "Breakfast",
            img: "https://img.icons8.com/wired/64/american-pancakes.png",
        },
        {
            title: "Dessert",
            img: "https://img.icons8.com/wired/64/strawberry-cheesecake.png",
        },
        {
            title: "Dinner",
            img: "https://img.icons8.com/wired/64/spaghetti.png",
        },
        {
            title: "Lunch",
            img: "https://img.icons8.com/wired/64/rice-bowl.png",
        },
        {
            title: "Sides",
            img: "https://img.icons8.com/wired/64/pelmeni.png",
        },
        {
            title: "Vegetarian",
            img: "https://img.icons8.com/wired/64/firm-tofu.png",
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
                    <button className="cat-item-container" key={item.title}>
                        <img className="cat-item-img" src={item.img} />
                        <h4 className="cat-item-title">{item.title}</h4>
                    </button>
                ))}
            {/* </Slider> */}
        </div>
    );
}

export default Categories;
