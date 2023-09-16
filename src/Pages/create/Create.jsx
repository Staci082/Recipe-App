import RecipeForm from "../../Components/recipe-form/RecipeForm";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Create() {
    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        ingredients: [],
        instructions: "",
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
                "http://localhost:5712/create",
                {...recipe} );
                console.log(recipe)
            alert("Recipe Created");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = (i) => {
        const deleteValue = [...recipe]
        deleteValue.splice(i, 1)
        setRecipe(deleteValue);
    }

    console.log(recipe);

    return (

        <RecipeForm
            label="create"
            recipe={recipe}
            handleChange={handleChange}
            handleIngredientChange={handleIngredientChange}
            handleAddIngredient={handleAddIngredient}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
        />

    );
}

export default Create;
