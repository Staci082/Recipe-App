import RecipeForm from "../../Components/recipe-form/RecipeForm.jsx";
import { useAuth } from "../../Context/AuthContext";
import NotAuthorized from "../../Components/not-authorized/NotAuthorized";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts";

function Edit() {
    const { isLoggedIn } = useAuth();
    const { recipeID } = useParams();

    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        ingredients: [],
        method: [],
    });

    useEffect(() => {
        // Fetch the existing recipe data for the specified recipeID
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get(`http://localhost:5712/recipe/${recipeID}`, { ...recipe });
                const existingRecipe = response.data;
                setRecipe(existingRecipe);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipeData();
    }, [recipeID]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleIngredientChange = (e, index) => {
        const { value } = e.target;
        const ingredients = [...recipe.ingredients];
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
            await axios.put(`http://localhost:5712/edit/${recipeID}`, { ...recipe });
            console.log(recipe);
            ToastSuccess("Recipe updated!");
        } catch (error) {
            console.error(error);
            ToastError("Oops! Something went wrong!");
        }
    };

    const handleDelete = (i) => {
        const newArray = [...recipe.ingredients];
        newArray.splice(i, 1);
        setRecipe({ ...recipe, ingredients: newArray });
    };

    console.log(recipe);

    return (
        <>  
        { isLoggedIn ?
            <RecipeForm label="edit" recipe={recipe} handleChange={handleChange} handleIngredientChange={handleIngredientChange} handleAddIngredient={handleAddIngredient} handleSubmit={handleSubmit} handleDelete={handleDelete} />
            : <NotAuthorized/> }
        
            </>
    );
}

export default Edit;
