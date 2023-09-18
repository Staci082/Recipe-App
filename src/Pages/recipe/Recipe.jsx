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
                    <h1 className="recipe-name">{recipe.name}</h1>
                    <a href="/" className="recipe-back-button">
                        &times;
                    </a>
                    <div className="recipe-details-container">
                        <div className="ingredients-container">
                            <ul>
                                {/* have to get values after data is fetched */}
                                {recipe.ingredients && recipe.ingredients.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="instructions-container">
                        {/* {recipe.instructions && recipe.instructions.map((item) => (
                                    <li key={item}>{item}</li>
                                ))} */}
                            {recipe.instructions}
                        </div>
                        <div className="recipe-button-container">
                            <a href="/edit/{_id}" className="edit-buttons">
                                <FaPencil />
                            </a>
                            <a href="/delete/{_id}" className="edit-buttons">
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
