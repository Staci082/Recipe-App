import { HiPlus, HiOutlineXMark } from "react-icons/hi2";
import { MdOutlineChevronLeft } from "react-icons/md";
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
    };

    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        ingredients: [],
        methods: [],
        description: "",
        source: "", // if empty add creator's name
        servingSize: "",
        prepTime: "",
        cookTime: "",
    });
    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get(baseAPI + "recipe/" + id);
                const existingRecipe = response.data;
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
    const handleMethodChange = (e, index) => {
        const { value } = e.target;
        const methods = recipe.methods;
        methods[index] = value;
        setRecipe({ ...recipe, methods });
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
    const handleAddMethod = () => {
        const methods = Array.isArray(recipe.methods) ? [...recipe.methods, ""] : [""];
        setRecipe({ ...recipe, methods });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            ToastSuccess("Recipe updated!");
            await axios.put(baseAPI + "edit/" + id, { ...recipe });
        } catch (error) {
            console.error(error);
            ToastError("Oops! Something went wrong!");
        }
    };

    const handleDelete = (index, type) => {
        if (type === "ingredients") {
            const newIngredients = [...recipe.ingredients];
            newIngredients.splice(index, 1);
            setRecipe({ ...recipe, ingredients: newIngredients });
        } else if (type === "methods") {
            const newMethods = [...recipe.methods];
            newMethods.splice(index, 1);
            setRecipe({ ...recipe, methods: newMethods });
        }
    };

    return (
        <>
            <div className="global-container">
                <a onClick={goBack} className="back-button">
                <MdOutlineChevronLeft />
                </a>
                <form className="recipe-form" onSubmit={handleSubmit}>
                    <h2>Edit recipe</h2>

                    <div className="form-separator">
                    
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

                            <label htmlFor="image">Image url:</label>
                            <input type="text" name="image" value={recipe.image} id="image-input" onChange={handleChange} />

                            <label htmlFor="source">Source:</label>
                            <input type="text" name="source" value={recipe.source} onChange={handleChange} />


                            <label htmlFor="description">Description:</label>
                            <textarea className="input-textarea" name="description" maxLength="300" value={recipe.description} onChange={handleChange}></textarea>

                            <div className="formRow">
                                <div>
                                <label htmlFor="servingSize">Serving size:</label>
                                <input type="text" value={recipe.servingSize} className="smallInput" maxLength="30" name="servingSize" onChange={handleChange}></input>
                                </div>
                                <div>
                                <label htmlFor="prepTime">Prep time:</label>
                                <input type="text" value={recipe.prepTime} className="smallInput" maxLength="30" name="prepTime" onChange={handleChange}></input>
                                </div>
                                <div>
                                <label htmlFor="cookTime">Cooking time:</label>
                                <input type="text" value={recipe.cookTime} className="smallInput" maxLength="30" name="cookTime" onChange={handleChange}></input>
                                </div>
                            </div>

                            <label htmlFor="method">
                                Instructions:
                                <button type="button" onClick={handleAddMethod} className="add-button">
                                    <HiPlus size={28} />
                                </button>
                            </label>

                            {recipe.methods && recipe.methods.map((method, index) => (
                                <div className="input-container" key={index}>
                                    <textarea className="input-textarea" name="method" maxLength="300" value={method} onChange={(e) => handleMethodChange(e, index)}></textarea>

                                    <button type="button" onClick={() => handleDelete(index, "methods")} className="remove-method-button">
                                        <HiOutlineXMark size={26} />
                                    </button>
                                </div>
                            ))}
                        

                        
                        <label htmlFor="ingredients">
                                Ingredients:
                                <button type="button" onClick={handleAddIngredient} className="add-button">
                                    <HiPlus size={28} />
                                </button>
                            </label>

                            {recipe.ingredients.map((ingredient, index) => (
                                <div className="input-container" key={index}>
                                    <input key={index} type="text" name="ingredients" value={ingredient} onChange={(e) => handleIngredientChange(e, index)} />
                                    <button type="button" onClick={() => handleDelete(index)} className="remove-ingredient-button">
                                        <HiOutlineXMark size={26} />
                                    </button>
                                </div>
                            ))}
 </div>
                    <button type="submit" className="submit-button" onClick={goBack}>
                        Save
                    </button>
                </form>
            </div>
        </>
    );
}

export default Edit;
