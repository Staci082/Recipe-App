import "./Assets/SassStyles/app.scss";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Create from "./Pages/create/Create";
import Error from "./Pages/error/Error";
import Edit from "./Pages/edit/Edit"
import GroceryList from "./Pages/grocery-list/GroceryList";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Recipe from "./Pages/recipe/Recipe";
import Register from "./Pages/register/Register";
import URLRecipe from "./Pages/url-recipe/URLRecipe";
import FilterRecipes from "./Components/filter-recipes/FilterRecipes";


const router = [
    {
        path: "/create",
        element: <Create />,
    },
    {
        path: "/edit/:id",
        element: <Edit />,
    },
    {
        path: "/list",
        element: <GroceryList />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/recipe/:id",
        element: <Recipe />,
    },
    {
        path: "/recipe/random",
        element: <Recipe randomRecipe={true} />,
    },
    {
        path: "/register",
        element: <Register />,
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
        <SearchProvider>
            <Routes>
                <Route path="/" element={<Homepage />}>
                    <Route path="/category/:category" element={<FilterRecipes />} />
                </Route>
                {router.map((item) => (
                        <Route path={item.path} element={item.element} key={item.path} />
                ))}
            </Routes>
        </SearchProvider>
        </>
    );
}

export default App;
