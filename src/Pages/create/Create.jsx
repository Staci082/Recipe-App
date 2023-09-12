import RecipeForm from "../../Components/recipe-form/RecipeForm";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const useGetUserID = () => {
    return window.localStorage.getItem("userID");
};

function Create() {
    const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);
    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        ingredients: [],
        instructions: "",
        userOwner: 0,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleIngredientChange = (e, index) => {
        const { value } = e.target;
        const ingredients = recipe.ingredients;
        ingredients[index] = value;
        setRecipe({ ...recipe, ingredients });
    };

    const handleAddIngredient = () => {
        const ingredients = [...recipe.ingredients, ""];
        setRecipe({ ...recipe, ingredients });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(
                "http://localhost:5173/",
                { ...recipe },
                {
                    headers: { authorization: cookies.access_token },
                }
            );

            alert("Recipe Created");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    console.log(recipe);

    return (
        <RecipeForm
            label="create"
            recipe={recipe}
            handleChange={handleChange}
            handleIngredientChange={handleIngredientChange}
            handleAddIngredient={handleAddIngredient}
            handleSubmit={handleSubmit}
        />
    );
}

export default Create;
