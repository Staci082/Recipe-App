import { HiPlus } from "react-icons/hi2";

function RecipeForm({ label, recipe, handleChange, handleIngredientChange, handleAddIngredient, handleSubmit }) {
    return (
        <>
            <a href="/" className="form-back-button">
                &times;
            </a>
            <form className="recipe-form" onSubmit={handleSubmit}>
                <h2>{label} recipe</h2>

                <div className="form-separator">
                    <div className="form-inner-separator">
                        <label htmlFor="title">Name:</label>
                        <input type="text" name="title" onChange={handleChange} />

                        <label htmlFor="category">Category:</label>
                        <select name="category" className="form-control" required>
                            <option disabled="disabled" value="" onChange={handleChange}>
                                Select category
                            </option>
                            <option value="Appetizer">Appetizer</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Side">Side</option>
                            <option value="Vegetarian">Vegetarian</option>
                        </select>

                        <label htmlFor="instructions">Instructions:</label>
                        <textarea className="input-textarea" name="instructions" onChange={handleChange}></textarea>
                    </div>

                    <div className="form-inner-separator">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <button type="button" onClick={handleAddIngredient}>
                        <HiPlus size={28} />
                        </button>
                        {recipe.ingredients.map((ingredient, index) => (
                            <input key={index} type="text" name="ingredients" value={ingredient} onChange={(e) => handleIngredientChange(e, index)} />
                        ))}

                        {/* <div className="add-ingredient-container">
                        <input 
                            type="text" 
                            value="" 
                            className="form-control ingredient-input" 
                            name="ingredients" 
                            onChange={(e) => handleIngredientChange(e)} />
                            <button type="button" className="add-ingredient-button" onClick={addIngredient}>
                                <HiPlus size={28} />
                            </button>
                        </div>
                        <ul className="ingredients-list">
                            {recipe.ingredients.map((ingredient) => {
                                <li key={ingredient}>{ingredient}</li>
                            })}
                        </ul> */}
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    create
                </button>
            </form>
        </>
    );
}

export default RecipeForm;
