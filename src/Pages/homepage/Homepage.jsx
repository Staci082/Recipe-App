
import Header from "../../Components/header/Header";
import RecipesContainer from "../../Components/recipes-container/RecipesContainer";
import Menu from "../../Components/menu/Menu";
import Categories from "../../Components/categories/Categories";

function Homepage() {
    return (
        <>
           
            <div className="main-container">
                <div className="left-container">
                    <Menu />
                </div>
                <div className="right-container">
                     <Header />
                    <Categories />
                    <RecipesContainer />
                </div>
            </div>
        </>
    );
}

export default Homepage;
