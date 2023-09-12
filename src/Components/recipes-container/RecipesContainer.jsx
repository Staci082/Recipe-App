import { useState, useEffect } from "react";
import axios from "axios";
import Categories from "../categories/Categories";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";

function RecipesContainer() {
    const { route } = useParams(); 

    // FILTER RECIPES
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/${route}`);
                setRecipes(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        fetchData();
    }, [route]);

    // SAVE RECIPES
    const [saveRecipe, setSaveRecipe] = useState(false);

    const toggleSave = () => {
        setSaveRecipe(!saveRecipe);
    };

    return (
        <div className="recipe-container">
            <Categories />

            {recipes.map((recipe) => (
                <div className="recipe" id={recipe._id}>
                    <a href={`/${recipe._id}`} className="recipe-title-container">
                        <h3 className="recipe-title">{recipe.name}</h3>
                        <i className="recipe-category">{recipe.category}</i>
                    </a>
                    <button className="save-icon" onClick={toggleSave}>
                        {saveRecipe ? <FaRegHeart /> : <FaHeart />}
                    </button>
                </div>
            ))}

            {/* <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a> */}
        </div>
    );
}

export default RecipesContainer;
