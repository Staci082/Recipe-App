import { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

function DiscoverRecipes() {
    const { route } = useParams();
    const [recipes, setRecipes] = useState([]);

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