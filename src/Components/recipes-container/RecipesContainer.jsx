import { useState, useEffect } from "react";
import axios from "axios";
import Categories from "../categories/Categories";
import UseGetUserId from "../../Hooks/useGetUserId";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";

function RecipesContainer() {
    const { route } = useParams();

    // FILTER RECIPES
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState();
    const userID = UseGetUserId();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("http://localhost:5712/");
                setRecipes(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        const fetchSavedRecipes = async () => {
            try {
                const response = await fetch("http://localhost:5712/savedrecipes", {userID});
                // setSavedRecipes(recipes);
                console.log(response.data)
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        fetchRecipes();
        fetchSavedRecipes();
    }, [route]);

    const saveRecipe = async (recipeID) => {
        try {
            const response = await axios.put("http://localhost:5712/", { recipeID, userID });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    // // SAVE RECIPES
    // const [saveRecipe, setSaveRecipe] = useState(false);

    // const toggleSave = () => {
    //     setSaveRecipe(!saveRecipe);
    // };

    return (
        <div className="recipe-container">
            <Categories />

            {recipes.map((recipe) => (
                <div className="recipe" key={recipe._id}>
                    <a href={`/${recipe._id}`} className="recipe-title-container">
                        <h3 className="recipe-title">{recipe.name}</h3>
                        <i className="recipe-category">{recipe.category}</i>
                    </a>
                    <button className="save-icon" onClick={() => saveRecipe(recipe._id)}>
                        {saveRecipe ? <FaRegHeart /> : <FaHeart />}
                    </button>
                </div>
            ))}

            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
        </div>
    );
}

export default RecipesContainer;
