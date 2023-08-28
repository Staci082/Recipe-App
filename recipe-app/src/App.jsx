
import "./SassStyles/app.scss";
import Categories from "./Components/categories/Categories";
// import Login from "./Components/login/Login";
import Header from "./Components/header/Header";
import Pagination from "./Components/pagination/Pagination";
import Recipes from "./Components/recipes/Recipes";
import SideMenu from './Components/sideMenu/SideMenu';

function App() {


    return (
        <>
            <div className="App">
              <Header/>
              <SideMenu/>
              <Categories/>
              <Recipes/>
              <Pagination/>
              
            </div>
        </>
    );
}

export default App;
