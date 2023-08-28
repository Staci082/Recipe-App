
import "./SassStyles/app.scss";
import SideMenu from './Components/sideMenu/SideMenu';
import Header from "./Components/header/Header";
import Categories from "./Components/categories/Categories";
import Items from "./Components/items/Items";
import Pagination from "./Components/pagination/Pagination";

function App() {


    return (
        <>
            <div className="App">
              <Header/>
              <SideMenu/>
              <Categories/>
              <Items/>
              <Pagination/>
              
            </div>
        </>
    );
}

export default App;
