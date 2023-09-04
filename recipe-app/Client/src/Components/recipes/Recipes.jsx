import Categories from "../categories/Categories";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

function Recipes() {
    return (
        <div className="recipe-container">
            <Categories />


            <a className="recipe" href="/recipe">
                <div className="recipe-title-container">
                <h3 className="recipe-title">Recipe title</h3>
                <i className="recipe-category">category</i>
                </div> 
                <FaRegHeart size={25} className="save-icon"/> 
            </a>
            
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
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

export default Recipes;
