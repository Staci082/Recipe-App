import { useState, useEffect } from "react";
import axios from "axios";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts.js";
import baseAPI from "../../Context/baseAPI.js";

function SaveRecipes({ isLoggedIn }) {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            try {
                const userId = JSON.parse(localStorage.getItem("user")).id;

                const fetchUser = async () => {
                    const response = await axios.get(baseAPI + "auth/user/" + userId);
                    const userData = response.data;
                    setSavedRecipes(userData.savedRecipes);
                };
                fetchUser();
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
    }, [isLoggedIn]);

    const handleSaveRecipe = async (recipeId) => {
        if (!isLoggedIn) {
            ToastError("You need to be logged in to save a recipe.");
            return;
        }
        try {
            const userId = JSON.parse(localStorage.getItem("user")).id;

            const response = await axios.get(baseAPI + "auth/user/" + userId);
            const userData = response.data;

            const isRecipeAlreadySaved = userData.savedRecipes.includes(recipeId);

            if (isRecipeAlreadySaved) {
                const updatedSavedRecipes = userData.savedRecipes.filter((id) => id !== recipeId);
                userData.savedRecipes = updatedSavedRecipes;
            } else {
                userData.savedRecipes.push(recipeId);
            }
            await axios.put(baseAPI + "auth/user/" + userId, userData);

            setSavedRecipes(userData.savedRecipes);
            ToastSuccess(isRecipeAlreadySaved ? "Recipe removed!" : "Recipe saved!");
        } catch (error) {
            console.error("Error saving recipe:", error);
            ToastError("Recipe could not be saved.");
        }
    };

    const fetchSavedRecipes = async () => {
        try {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            const response = await axios.get(baseAPI + "auth/user/" + userId);
            const recipeIds = response.data.savedRecipes;
            const recipesObj = await fetchSavedRecipesByIds(recipeIds);
            return recipesObj; // Return the recipesObj
        } catch (error) {
            console.error("Error fetching saved recipes:", error);
        }
    };

    const fetchSavedRecipesByIds = async (recipeIds) => {
        try {
            const response = await axios.post(baseAPI + "auth/saved", { recipeIds });
            const recipesObj = response.data;
            return recipesObj;
        } catch (error) {
            console.error("Error fetching saved recipes:", error);
        }
    };

    return { savedRecipes, handleSaveRecipe, fetchSavedRecipes };
}

export default SaveRecipes;
