function Create() {
    return (
        <div className="create-container">
            <form className="create-form">
                <a href="/" className="form-back-button">&times;</a>
                <h2>Create Recipe</h2>

                <div className="form-separator">
                    <div className="form-inner-separator">
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" />

                        <label>Which best describes your recipe?</label>
                        <select id="dropdown" name="category" className="form-control" required>
                            <option disabled="disabled" selected="selected" value="">
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
                        <textarea id="instructions" className="input-textarea" name="instructions"></textarea>

                        
                    </div>
                    
                    <div className="form-inner-separator">
                        <label>Ingredients</label>
                        <input type="text" name="ingredients" className="form-control" id="ingredient-input"/>
                        <div className="ingredients-list"></div>
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    create
                </button>
            </form>
        </div>
    );
}

export default Create;