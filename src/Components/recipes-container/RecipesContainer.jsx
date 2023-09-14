
import { Outlet } from "react-router-dom";

function RecipesContainer() {
    return (
        <>
            <div className="recipe-container">
       
                <Outlet /> {/* Outlet provides this space with the ever changing component data */}
            </div>
        </>
    );
}

export default RecipesContainer;
