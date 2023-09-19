import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaPencil, FaTrashCan } from "react-icons/fa6";

function Recipe() {
    const params = useParams();
    const recipeID = params.id;
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get("http://localhost:5712/recipe/" + recipeID);
                setRecipe(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchRecipe();
    }, []);

    return (
        <>
            <div className="global-container">
                <div className="single-recipe-container">
                    <div className="single-recipe-title-container">
                        <h1 className="recipe-name">{recipe.name}</h1>
                        <h2 className="recipe-category-title">{recipe.category}</h2>
                    </div>
                    <a href="/" className="recipe-back-button">
                        &times;
                    </a>
                    <div className="recipe-details-container">
                        <div className="ingredients-container">
                            <ul>
                                <h5 className="recipe-details-title">Ingredients</h5>
                                {/* have to get values after data is fetched */}
                                {recipe.ingredients && recipe.ingredients.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="method-container">
                            <h5 className="recipe-details-title">Instructions</h5>
                            {recipe.method}
                        </div>
                        <div className="recipe-button-container">
                            <a href={`/edit/${recipeID}`} className="edit-buttons">
                                <FaPencil />
                            </a>
                            <a href={`/delete/${recipeID}`} className="edit-buttons">
                                <FaTrashCan />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recipe;
