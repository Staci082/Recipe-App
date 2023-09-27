import RecipeForm from "../../Components/recipe-form/RecipeForm.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts";

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate()

    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        ingredients: [],
        method: [], // Initialize as an empty array
    });
    useEffect(() => {
        // Fetch the existing recipe data for the specified recipeID
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get("http://localhost:5712/recipe/" + id);
                const existingRecipe = response.data;

                console.log("Response data:", existingRecipe);
                setRecipe(existingRecipe);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipeData();
    }, [id]);

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
            ToastSuccess("Recipe updated!");
            await axios.put(`http://localhost:5712/edit/${id}`, { ...recipe });
            navigate("/")
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


    return (
        <RecipeForm
            label="edit"
            initialRecipeData={recipe} // Pass the initial recipe data correctly
            handleChange={handleChange}
            handleIngredientChange={handleIngredientChange}
            handleAddIngredient={handleAddIngredient}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
        />
    );
}

export default Edit;
