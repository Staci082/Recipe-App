import RecipeForm from "../../Components/recipe-form/RecipeForm";

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

const useGetUserID = () => {
    return window.localStorage.getItem("userID");
    };



function Create() {

    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        ingredients: [],
        instructions: "",
        userOwner: 0
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setRecipe({...recipe, [name]: value})
    }

    const handleIngredientChange = (e) => {
        const { value } = e.target
        const ingredients = recipe.ingredients
        ingredients[index] = value
        setRecipe({...recipe, ingredients})
    }

    const addIngredient = () => {
        setRecipe({...recipe, ingredients: [...recipe.ingredients, "" ] })
    }
    console.log(recipe)
    return <RecipeForm
    label="create"
    recipe={recipe}
    handleChange={handleChange}
    handleIngredientChange={handleIngredientChange}
    addIngredient={addIngredient}
    // onChange={handleChange}
    // onClick={addIngredient}
    />;
}

export default Create;
