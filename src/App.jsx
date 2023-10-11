import "./Assets/SassStyles/app.scss";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { SearchProvider } from "./Context/SearchContext";

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
        path: "*",
        element: <Error />,
    },
];

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/all");
        }
    }, [navigate, location]);

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
