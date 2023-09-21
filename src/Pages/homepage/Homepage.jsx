// IMPORT COMPONENTS

import Header from "../../Components/header/Header";
import Pagination from "../../Components/pagination/Pagination";
import RecipesContainer from "../../Components/recipes-container/RecipesContainer";
import Menu from "../../Components/menu/Menu";

function Homepage() {

  
  return (
    <>

        <Header  />
        <div className="main-container">
            <Menu />
            <RecipesContainer />
            <Pagination />
        </div>

   

</>
  )
}

export default Homepage