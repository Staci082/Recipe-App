import "./Assets/SassStyles/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// IMPORT PAGES
import Create from "./Pages/create/Create";
import Edit from "./Pages/edit/Edit";
import Error from "./Pages/error/Error";
import GroceryList from "./Pages/grocery-list/GroceryList";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Recipe from "./Pages/recipe/Recipe";
import Register from "./Pages/register/Register";

// CREATE ROUTER
const router = createBrowserRouter([
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
        path: "/recipe/",
        element: <Recipe />,
    },
    {
        path: "/create",
        element: <Create />,
    },
    {
        path: "/edit/",
        element: <Edit />,
    },
    {
        path: "/list",
        element: <GroceryList />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);

function App() {
    return (
        <>
                <div className="global-container">
                    <RouterProvider router={router} />
                </div>
        </>
    );
}

export default App;
