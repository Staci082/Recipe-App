// IMPORT COMPONENTS

import Header from "../../Components/header/Header";
import Pagination from "../../Components/pagination/Pagination";
import Recipes from "../../Components/recipes/Recipes";
import Menu from "../../Components/menu/Menu";

function Homepage() {

  
  return (
    <>

        <Header  />
        <div className="main-container">
            <Menu />
            <Recipes />
            <Pagination />
        </div>

   

</>
  )
}

export default Homepage