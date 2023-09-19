import { useNavigate } from "react-router-dom";
import { HiPlus, HiOutlineXMark } from "react-icons/hi2";

function RecipeForm({ label, recipe, handleChange, handleIngredientChange, handleAddIngredient, handleSubmit, handleDelete }) {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
   
    return (
        <>
            <div className="global-container">
                <button onClick={goBack} className="form-back-button">
                    &times;
                </button>
                <form className="recipe-form" onSubmit={handleSubmit}>
                    <h2>{label} recipe</h2>

                    <div className="form-separator">
                        <div className="form-inner-separator">
                            <label htmlFor="title">Name:</label>
                            <input type="text" name="name" onChange={handleChange}/>

                            <label htmlFor="category">Category:</label>
                            <select name="category" className="form-control" onChange={handleChange} required>
                                <option value="">
                                    Select category
                                </option>
                                <option value="appetizer">Appetizer</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="dessert">Dessert</option>
                                <option value="dinner">Dinner</option>
                                <option value="lunch">Lunch</option>
                                <option value="side">Side</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>

                            <label htmlFor="method">Instructions:</label>
                            <textarea className="input-textarea" name="method" onChange={handleChange}></textarea>
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
                        {label}
                    </button>
                </form>
            </div>
        </>
    );
}

export default RecipeForm;
