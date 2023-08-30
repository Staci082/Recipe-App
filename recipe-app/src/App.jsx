import "./Assets/SassStyles/app.css";
import Categories from "./Components/categories/Categories";
import Header from "./Components/header/Header";
import Pagination from "./Components/pagination/Pagination";
import Recipes from "./Components/recipes/Recipes";
import Menu from "./Components/menu/Menu";

import Create from "./Pages/create/Create";
import Login from "./Pages/login/Login";
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
        </>
    );
}

export default App;
