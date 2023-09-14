

// IMPORT COMPONENTS
import Header from "../../Components/header/Header";
import RecipesContainer from "../../Components/recipes-container/RecipesContainer";
import Menu from "../../Components/menu/Menu";



function Homepage() {



  return (
    <>
        <Header/>
        <div className="main-container">
        <div className="side-container">
            <Menu/>
            </div>
            <RecipesContainer />
        </div>
</>
  )
}

export default Homepage