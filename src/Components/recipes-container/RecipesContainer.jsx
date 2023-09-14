import Categories from "../categories/Categories";
import Pagination from "../../Components/pagination/Pagination";
import { Outlet } from "react-router-dom";
import DiscoverRecipes from "../discover-recipes/DiscoverRecipes";
import Dessert from "../dessert/Dessert";

function RecipesContainer() {
    return (
        <>
            <div className="recipe-container">
                <Categories />

                {/* Outlet provides this space with the ever changing component data */}
                <Outlet />
            </div>

            <Pagination />
        </>
    );
}

export default RecipesContainer;
