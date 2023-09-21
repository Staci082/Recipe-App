import { useState } from 'react'
import Categories from "../categories/Categories";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

function RecipesContainer() {

    const [saveRecipe, setSaveRecipe] = useState(false)

    const toggleSave = () => {
        setSaveRecipe(!saveRecipe)
    }

    return (
        <div className="recipe-container">
            <Categories />


            <div className="recipe" >
                <a href="/recipe" className="recipe-title-container">
                <h3 className="recipe-title">Recipe title</h3>
                <i className="recipe-category">category</i>
                </a> 
                <button className="save-icon" onClick={toggleSave}>
                    { saveRecipe ? <FaRegHeart/> : <FaHeart/> }
                </button>
            </div>
            
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
        </div>
    );
}

export default RecipesContainer;
