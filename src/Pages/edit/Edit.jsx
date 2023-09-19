import RecipeForm from "../../Components/recipe-form/RecipeForm.jsx";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Edit() {
    const { recipeID } = useParams()
    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        ingredients: [],
        method: [],
    })

    useEffect(() => {
        try {
            axios.get("http://localhost:5712/edit/" + recipeID)
            .then((response) => {
                setRecipe(response.data)
            })
            console.log(recipe)
        } catch (error) {
            console.log(error)
        }

    }, [recipeID])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleIngredientChange = (e, index) => {
        const newIngredients = [...recipe.ingredients]
        newIngredients[index] = e.target.value
        setRecipe({...recipe, ingredients: newIngredients})
    }

    const handleAddIngredient = () => {
        setRecipe({
            ...recipe,
            ingredients: [...recipe.ingredients, ""]
        })
    }

    const handleDelete = (index) => {
        const newIngredients = [...recipe.ingredients]
        newIngredients.splice(index, 1)
        setRecipe({...recipe, ingredients: newIngredients})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            axios.put("http://localhost:5712/edit/" + recipeID)
            .then((response) => {
                console.log(response)
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <RecipeForm 
                label="edit" 
                recipe={recipe} 
                handleChange={handleChange} 
                handleIngredientChange={handleIngredientChange} 
                handleAddIngredient={handleAddIngredient} 
                handleSubmit={handleSubmit} 
                handleDelete={handleDelete}/>
    );
}

export default Edit;
