
import Header from "../../Components/header/Header";
import RecipesContainer from "../../Components/recipes-container/RecipesContainer";
import Menu from "../../Components/menu/Menu";
import Categories from "../../Components/categories/Categories";

function Homepage() {
    return (
        <>
            <Header />
            <div className="main-container">
                <div id="left-container">
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
