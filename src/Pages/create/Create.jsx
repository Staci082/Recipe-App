import { HiPlus, HiOutlineXMark } from "react-icons/hi2";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import NotAuthorized from "../../Components/not-authorized/NotAuthorized";
import baseAPI from "../../Context/baseAPI";

function Create() {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        image: "",
        ingredients: [],
        method: [],
        description: "",
        source: "", // if empty add creator's name
        servingSize: "",
        prepTime: "",
        cookTime: "",
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
    const handleMethodChange = (e, index) => {
        const { value } = e.target;
        const method = recipe.method;
        method[index] = value;
        setRecipe({ ...recipe, method });
    };

    const handleAddIngredient = () => {
        const ingredients = [...recipe.ingredients, ""];
        setRecipe({ ...recipe, ingredients });
    };

    const handleAddMethod = () => {
        const method = [...recipe.method, ""];
        setRecipe({ ...recipe, method });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(baseAPI + "create", { ...recipe });
            navigate("/");
            ToastSuccess("Recipe created!");
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
        } else if (type === "method") {
            const newMethods = [...recipe.method];
            newMethods.splice(index, 1);
            setRecipe({ ...recipe, method: newMethods });
        }
    };

    // start with one method and one ingredient field open
    const initializeInput = () => {
        setRecipe({
            ...recipe,
            ingredients: [""],
            method: [""],
        });
    };
    useEffect(() => {
        initializeInput();
    }, []);

    return (
        <>
            {isLoggedIn ? (
                <div className="global-container">
                    <a onClick={goBack} className="back-button">
                        <MdOutlineChevronLeft />
                    </a>
                    <form className="recipe-form" onSubmit={handleSubmit}>
                        <h2>Create a recipe</h2>

                        <div className="form-separator">
                            <label htmlFor="title">Name:</label>
                            <input type="text" name="name" maxLength="33" value={recipe.name} onChange={handleChange} />

                            <label htmlFor="category">Category:</label>
                            <select name="category" className="form-control" onChange={handleChange} value={recipe.category} required>
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

                            {recipe.method.map((method, index) => (
                                <div className="input-container" key={index}>
                                    <textarea className="input-textarea" name="method" maxLength="300" value={method} onChange={(e) => handleMethodChange(e, index)}></textarea>
                                    <button type="button" onClick={() => handleDelete(index, "method")} className="remove-method-button">
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
                                    <button type="button" onClick={() => handleDelete(index, "ingredients")} className="remove-ingredient-button">
                                        <HiOutlineXMark size={26} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button type="submit" className="submit-button">
                            Create
                        </button>
                    </form>
                </div>
            ) : (
                <NotAuthorized />
            )}
        </>
    );
}

export default Create;
