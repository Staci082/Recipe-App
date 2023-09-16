import React from "react";

function URLRecipe() {
    return (
        <>
        <div className="global-container">
        <a href="/" className="back-button">&times;</a>
            <form className="url-form">
            <h1>Add recipe URL</h1>
                <input type="text" className="url-input" />
                <button type="submit" className="submit-button">save recipe</button>
            </form>
            </div>
        </>
    );
}

export default URLRecipe;
