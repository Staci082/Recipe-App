// IMPORT COMPONENTS
import Header from "../../Components/header/Header";
import RecipesContainer from "../../Components/recipes-container/RecipesContainer";
import Menu from "../../Components/menu/Menu";
import Categories from "../../Components/categories/Categories";

function Homepage() {
    return (
        <>
            <Header />
            <div className="main-container">
                <div className="left-container">
                    <Menu />
                </div>
                <div className="right-container">
                    
                    <Categories />
                    <RecipesContainer />
                </div>
            </div>
        </>
    );
}

export default Homepage;
