import RecipeForm from "../../Components/recipe-form/RecipeForm";
import { useState } from "react";
import axios from "axios";

function Create() {
    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        ingredients: [],
        method: [],
    });

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
            await axios.post("http://localhost:5712/create", { ...recipe });
            console.log(recipe);
            alert("Recipe Created");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = (i) => {
        const newArray = [...recipe.ingredients];
        newArray.splice(i, 1);
        setRecipe({...recipe, ingredients: newArray});
    };

    console.log(recipe);

    return <RecipeForm 
                label="create" 
                recipe={recipe} 
                handleChange={handleChange} 
                handleIngredientChange={handleIngredientChange} 
                handleAddIngredient={handleAddIngredient} 
                handleSubmit={handleSubmit} 
                handleDelete={handleDelete} />;
}

export default Create;
