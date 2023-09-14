import "./Assets/SassStyles/app.scss";
import {Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Create from "./Pages/create/Create";
import Edit from "./Pages/edit/Edit";
import Error from "./Pages/error/Error";
import GroceryList from "./Pages/grocery-list/GroceryList";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Recipe from "./Pages/recipe/Recipe";
import Register from "./Pages/register/Register";
import URLRecipe from "./Pages/url-recipe/URLRecipe";



// CREATE ROUTER
const router = [
  {
      path: "/",
      element: <Homepage />,
  },
  {
      path: "/login",
      element: <Login />,
  },
  {
      path: "/register",
      element: <Register />,
  },
  {
      path: "/recipe",
      element: <Recipe />,
  },
  {
      path: "/create",
      element: <Create />,
  },
  {
      path: "/list",
      element: <GroceryList />,
  },
  {
    path: "/url",
    element: <URLRecipe />,
},
  {
      path: "*",
      element: <Error />,
  },
]

function App() {
    

    return (
        <>
            <div className="global-container">
                <Routes>
                {router.map((item) => (
                    <Route path={item.path} element={item.element}/>
                    ))}
                </Routes>
            </div>
        </>
    );
}

export default App;
