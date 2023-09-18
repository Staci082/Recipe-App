import "./Assets/SassStyles/app.scss";
import { Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Create from "./Pages/create/Create";
import Error from "./Pages/error/Error";
import GroceryList from "./Pages/grocery-list/GroceryList";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Recipe from "./Pages/recipe/Recipe";
import Register from "./Pages/register/Register";
import URLRecipe from "./Pages/url-recipe/URLRecipe";
import FilterRecipes from "./Components/filter-recipes/FilterRecipes";

// CREATE ROUTER
const router = [
    //   {
    //       path: "/",
    //       element: <Homepage />,
    //   },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/recipe/:id",
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
];

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}>
                    <Route path="/category/:category" element={<FilterRecipes />} />
                </Route>
                {router.map((item) => (
                        <Route path={item.path} element={item.element} key={item.path} />
                ))}
            </Routes>
        </>
    );
}

export default App;
