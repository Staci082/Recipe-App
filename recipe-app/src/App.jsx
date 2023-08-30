import "./Assets/SassStyles/app.css";
import Categories from "./Components/categories/Categories";
import Header from "./Components/header/Header";
import Pagination from "./Components/pagination/Pagination";
import Recipes from "./Components/recipes/Recipes";
import Menu from "./Components/menu/Menu";

import Create from "./Pages/create/Create";
import Edit from "./Pages/edit/Edit";
import GroceryList from "./Pages/grocery-list/GroceryList";
import Login from "./Pages/login/Login";
import Recipe from "./Pages/recipe/Recipe";
import Register from "./Pages/register/Register";

function App() {
    return (
        <>
            <div className="global-container">
                <Header />
                <div className="main-container">
                    <Menu />
                    <Recipes />
                    <Pagination />
                </div>
            </div>
            <div className="global-container">
                <Login />
            </div>
            <div className="global-container">
                <Register />
            </div>
            <div className="global-container">
                <Create />
            </div>
            <div className="global-container">
                <Edit />
            </div>
            <div className="global-container">
                <Recipe/>
            </div>
            <div className="global-container">
                <GroceryList />
            </div>

        </>
    );
}

export default App;
