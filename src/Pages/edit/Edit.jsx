
import { HiPlus, HiOutlineXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts";
import baseAPI from "../../Context/baseAPI";

function Edit() {
    const { id } = useParams();

    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        ingredients: [],
        method: []
    });
    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get(baseAPI + "recipe/" + id);
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
            await axios.put(baseAPI + "edit/" + id, { ...recipe });
            navigate("/");
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
        <>
            <div className="global-container">
                <button onClick={goBack} className="form-back-button">
                    &times;
                </button>
                <form className="recipe-form" onSubmit={handleSubmit}>
                    <h2>update recipe</h2>

                    <div className="form-separator">
                        <div className="form-inner-separator">
                            <label htmlFor="title">Name:</label>
                            <input type="text" name="name" maxLength="33" value={recipe.name || ""} onChange={handleChange} />

                            <label htmlFor="category">Category:</label>
                            <select name="category" className="form-control" onChange={handleChange} value={recipe.category || ""} required>
                                <option value="">Select category</option>
                                <option value="appetizer">Appetizer</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="dessert">Dessert</option>
                                <option value="dinner">Dinner</option>
                                <option value="lunch">Lunch</option>
                                <option value="side">Side</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>

                            <label htmlFor="method">Instructions:</label>
                            <textarea className="input-textarea" name="method" maxLength="300" value={recipe.method || ""} onChange={handleChange}></textarea>
                        </div>

                        <div className="form-inner-separator">
                            <label htmlFor="ingredients">Ingredients:</label>
                            <button type="button" onClick={handleAddIngredient} className="add-ingredient-button">
                                <HiPlus size={28} />
                            </button>

                            {recipe.ingredients.map((ingredient, index) => (
                                <div className="ingredient-input-container" key={index}>
                                    <input key={index} type="text" name="ingredients" value={ingredient} onChange={(e) => handleIngredientChange(e, index)} />
                                    <button type="button" onClick={() => handleDelete(index)} className="remove-ingredient-button">
                                        <HiOutlineXMark size={26} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        update recipe
                    </button>
                </form>
            </div>
        </>
    );
}

export default Edit;
