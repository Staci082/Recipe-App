import { useEffect} from "react";

function DiscoverRecipes() {

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("http://localhost:5712/");
                setRecipes(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchRecipes();
    }, [route]);

    return (
    <>
    {recipes.map((recipe) => (
                <div className="recipe" key={recipe._id}>
                    <a href={`/${recipe._id}`} className="recipe-title-container">
                        <h3 className="recipe-title">{recipe.name}</h3>
                        <i className="recipe-category">{recipe.category}</i>
                    </a>
                    <button className="save-icon">
                        <FaRegHeart />
                    </button>
                </div>
            ))}
    </>
    )
}

export default DiscoverRecipes 