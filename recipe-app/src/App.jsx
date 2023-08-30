import "./SassStyles/app.scss";
import Categories from "./Components/categories/Categories";
import Header from "./Components/header/Header";
import Pagination from "./Components/pagination/Pagination";
import Recipes from "./Components/recipes/Recipes";
import SideMenu from "./Components/sideMenu/SideMenu";

import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";

function App() {
    return (
        <>
            <div className="global-container">
                {/* <Header />
                <Categories />
                <div className="main-container">
                    <SideMenu />
                    <Recipes />
                    <Pagination />
                </div> */}
                <Login/>
            </div>
        </>
    );
}

export default App;
