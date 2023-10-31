import { useLocation } from "react-router-dom";

import Header from "../../Components/header/Header";
import RecipesContainer from "../../Components/recipes-container/RecipesContainer";
import Menu from "../../Components/menu/Menu";
import Categories from "../../Components/categories/Categories";
import Welcome from "../../Components/welcome/Welcome"

function Homepage() {
    const location = useLocation();
    const pathname = location.pathname;
    const welcomePage = pathname.endsWith("/");
    return (
        <>
           
            <div className="main-container">
                <div className="left-container">
                    <Menu />
                </div>
                <div className="right-container">
                    <Header />
                    <Categories />
                    {
                        welcomePage ? <Welcome/> : <RecipesContainer />
                    }

                </div>
            </div>
        </>
    );
}

export default Homepage;
