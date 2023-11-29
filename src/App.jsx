import "./Assets/SassStyles/global.scss";
import { Routes, Route} from "react-router-dom";

import { SearchProvider } from "./Context/SearchContext";

import Converter from "./Pages/converter/Converter"
import Create from "./Pages/create/Create";
import Error from "./Pages/error/Error";
import Edit from "./Pages/edit/Edit";
import GroceryList from "./Pages/grocery-list/GroceryList";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Recipe from "./Pages/recipe/Recipe";
import RecipesContainer from "./Components/recipes-container/RecipesContainer";
import Register from "./Pages/register/Register";

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
        path: "/auth/list",
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
        path: "/converter",
        element: <Converter />,
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
                        <Route path="/:category" element={<RecipesContainer />} />
                        <Route path="/auth/savedrecipes/:userId" element={<RecipesContainer />} />
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
