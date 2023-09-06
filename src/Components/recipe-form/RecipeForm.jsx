import { HiPlus } from "react-icons/hi2";


function RecipeForm({   label, 
                        recipe, 
                        handleChange, 
                        handleIngredientChange, 
                        addIngredient }) {
  return (
    <>
            <a href="/" className="form-back-button">
                &times;
            </a>
            <form className="recipe-form">
                <h2>{label} recipe</h2>

                <div className="form-separator">
                    <div className="form-inner-separator">
                        <label htmlFor="title">Name:</label>
                        <input type="text" name="title" onChange={handleChange}/>

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
                        <div className="add-ingredient-container">
                            <button type="button" className="add-ingredient-button" onClick={addIngredient}>
                                <HiPlus size={28} />
                            </button>
                        </div>
                        <ul className="ingredients-list">
                            {recipe.ingredients.map((ingredient, index) => {
                                // <li key={index}>{ingredient}</li>

                                <input  key={index} 
                                        type="text" 
                                        value={ingredient} 
                                        className="form-control ingredient-input" 
                                        name="ingredients" 
                                        onChange={(e) => handleIngredientChange(e, index)} />
                            })}
                        </ul>
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    create
                </button>
            </form>
        </>
  )
}

export default RecipeForm