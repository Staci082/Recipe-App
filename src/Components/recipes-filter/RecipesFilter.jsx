import { useState, useEffect, useContext } from "react";  // keep "useContext" here or else "UseSearchContext" fails
import axios from "axios";
import { useParams } from "react-router-dom";
import Pagination from "../pagination/Pagination.jsx";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts.js";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import UseSearchContext from "../../Context/SearchContext.jsx";
import { useAuth } from "../../Context/AuthContext.jsx"


function FilterRecipes() {
    const { input, results } = UseSearchContext();
    const { isLoggedIn } = useAuth();

    const { route, category } = useParams();
    const [saveButton, setSaveButton] = useState(false);
    const [recipes, setRecipes] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const recipesPerPage = 15;
    const pagesVisited = pageNumber * recipesPerPage;

    const displayRecipes = (recipeList) =>
        recipeList.slice(pagesVisited, pagesVisited + recipesPerPage).map((recipe) => (
            <div className="recipe" key={recipe._id}>
                <a href={`/recipe/${recipe._id}`} className="recipe-title-container">
                    <h3 className="recipe-title">{recipe.name}</h3>
                    <p className="recipe-category">{recipe.category}</p>
                </a>
                <button className="save-icon" onClick={() => handleSaveRecipe(recipe._id)}>
                    {saveButton ? <FaHeart /> : <FaRegHeart />}
                    
                </button>
            </div>
        ));

    const [savedRecipes, setSavedRecipes] = useState([]);

    
    const handleSaveRecipe = async (recipeId) => {
        if (!isLoggedIn) {
            ToastError("You need to be logged in to save a recipe.");
            return; // Don't proceed if the user is not logged in
        } else {
            ToastSuccess("test")
        }

        try {
            await axios.post("http://localhost:5712/auth/savedrecipes/" + recipeId);
            setSavedRecipes([...savedRecipes, recipeId]);
            setSaveButton(true);
            ToastError("Recipe saved!");
        } catch (error) {
            console.error("Error saving recipe:", error);
            console.log("Recipe could not be saved.");
        }
    };


    const displayRecipesList = results.length > 0 
        ? displayRecipes(results) 
        : displayRecipes(recipes);

    const pageCount = results.length > 0 
        ? Math.ceil(results.length / recipesPerPage) 
        : Math.ceil(recipes.length / recipesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("http://localhost:5712/" + category);
                setRecipes(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchRecipes();
    }, [route, recipes]);

    return (
        <>
            <div className="recipe-container-header">
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
