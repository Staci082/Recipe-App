import { useState, useEffect, useContext } from "react"; // keep "useContext" here or else "UseSearchContext" fails
import axios from "axios";
import { useParams } from "react-router-dom";
import Pagination from "../pagination/Pagination.jsx";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts.js";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import UseSearchContext from "../../Context/SearchContext.jsx";
import { useAuth } from "../../Context/AuthContext.jsx";

function FilterRecipes() {

    const baseAPI = import.meta.env.VITE_API_URL || 'http://localhost:5712'

    const { input, results } = UseSearchContext();
    const { isLoggedIn } = useAuth();
    const { route, category } = useParams();

    const [savedRecipes, setSavedRecipes] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const recipesPerPage = 12;
    const pagesVisited = pageNumber * recipesPerPage;

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(baseAPI + category);
                setRecipes(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchRecipes();
    }, [route, recipes]);

    useEffect(() => {
        if (isLoggedIn) {
            try {
                const userId = JSON.parse(localStorage.getItem("user")).id;
                const fetchUser = async () => {
                    const response = await axios.get(`${baseAPI}/auth/user/${userId}`);
                    const userData = response.data;
                    setSavedRecipes(userData.savedRecipes);
                };
                fetchUser();
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
    }, [isLoggedIn]);

    const handleSaveRecipe = async (recipeId) => {
        if (!isLoggedIn) {
            ToastError("You need to be logged in to save a recipe.");
            return;
        }
        try {
            const userId = JSON.parse(localStorage.getItem("user")).userId;

            const response = await axios.get(`http://localhost:5712/auth/user/${userId}`);
            const userData = response.data;

            const isRecipeAlreadySaved = userData.savedRecipes.includes(recipeId);

            if (isRecipeAlreadySaved) {
                const updatedSavedRecipes = userData.savedRecipes.filter((id) => id !== recipeId);
                userData.savedRecipes = updatedSavedRecipes;
            } else {
                userData.savedRecipes.push(recipeId);
            }

            await axios.put(`http://localhost:5712/auth/user/${userId}`, userData);

            setSavedRecipes(userData.savedRecipes);
            ToastSuccess(isRecipeAlreadySaved ? "Recipe removed from saved recipes!" : "Recipe saved!");
        } catch (error) {
            console.error("Error saving recipe:", error);
            console.log("Recipe could not be saved.");
        }
    };



    const displayRecipes = (recipeList) =>
        recipeList.slice(pagesVisited, pagesVisited + recipesPerPage).map((recipe) => {
            const isRecipeSaved = savedRecipes.includes(recipe._id);
            return (
                <div className="recipe" key={recipe._id}>
                    <a href={`/recipe/${recipe._id}`} className="recipe-title-container">
                        <h3 className="recipe-title">{recipe.name}</h3>
                        <p className="recipe-category">{recipe.category}</p>
                    </a>
                    <button className="save-icon" onClick={() => handleSaveRecipe(recipe._id)}>
                        {isRecipeSaved ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>
            );
        });

    const displayRecipesList = results.length > 0 ? displayRecipes(results) : displayRecipes(recipes);

    const pageCount = results.length > 0 ? Math.ceil(results.length / recipesPerPage) : Math.ceil(recipes.length / recipesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const fetchSavedRecipes = async () => {
        try {
            const userId = JSON.parse(localStorage.getItem("user")).userId;
            const response = await axios.get(`http://localhost:5712/auth/user/${userId}`);
            const userData = response.data;
            const recipeIds = userData.savedRecipes;
            await fetchSavedRecipesByIds(recipeIds);
        } catch (error) {
            console.error("Error fetching saved recipes:", error);
        }
    };

    const fetchSavedRecipesByIds = async (recipeIds) => {
        try {
            const response = await axios.post("http://localhost:5712/auth/savedrecipes", { recipeIds });
            const recipesObj = response.data;
            console.log("Fetched saved recipes:", recipesObj);
            setRecipes(recipesObj);
        } catch (error) {
            console.error("Error fetching saved recipes:", error);
        }
    };

    return (
        <>
            <div className="recipe-container-header">
                {/* <button onClick={fetchSavedRecipes}>boop</button> */}
                {results.length > 0 ? (
                    <>
                        <h1>{input} recipes</h1>
                        <h2>{Number(results.length)}</h2>
                    </>
                ) : (
                    <>
                        <h1>{category} recipes</h1>
                        <h2>{Number(recipes.length)}</h2>
                    </>
                )}
            </div>

            <div className="recipe-container">{displayRecipesList}</div>

            <Pagination pageCount={pageCount} onPageChange={changePage} />
        </>
    );
}

export default FilterRecipes;
