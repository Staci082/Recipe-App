import Categories from "../categories/Categories";
import Pagination from "../../Components/pagination/Pagination";
import { Outlet } from "react-router-dom";

function RecipesContainer() {
    return (
        <>
            <div className="recipe-container">
            <Categories />
                <Outlet /> {/* Outlet provides this space with the ever changing component data */}
            </div>

            <Pagination />
        </>
    );
}

export default RecipesContainer;
