import { HiPlus } from "react-icons/hi2";

function Edit() {
    return (
        <>
            <div className="edit-container">
                <a href="/" className="form-back-button">
                    &times;
                </a>
                <form className="edit-form">
                    <h2>Edit Recipe</h2>

                    <div className="form-separator">
                        <div className="form-inner-separator">
                            <label htmlFor="title">Name:</label>
                            <input type="text" name="title" />

                            <label>Which best describes your recipe?</label>
                            <select name="category" className="form-control dropdown" required>
                                <option disabled="disabled" value="">
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

                            <label>Instructions</label>
                            <textarea className="input-textarea" name="instructions"></textarea>
                        </div>

                        <div className="form-inner-separator">
                            <label>Ingredients</label>
                            <div className="add-ingredient-container">
                                <input type="text" name="ingredients" className="form-control ingredient-input" />
                                <button className="add-ingredient-button">
                                    <HiPlus size={28} />
                                </button>
                            </div>
                            <div className="ingredients-list"></div>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        update
                    </button>
                </form>
            </div>
        </>
    );
}

export default Edit;
