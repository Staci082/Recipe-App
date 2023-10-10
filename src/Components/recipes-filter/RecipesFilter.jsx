import { useState, useEffect, useContext } from "react"; // keep "useContext" here or else "UseSearchContext" fails
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Pagination from "../pagination/Pagination.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import UseSearchContext from "../../Context/SearchContext.jsx";
import { useAuth } from "../../Context/AuthContext.jsx";
import baseAPI from "../../Context/baseAPI.js";
import SaveRecipes from "../save-recipes/SaveRecipes.jsx";

function FilterRecipes() {
    const { input, results } = UseSearchContext();
    const { route, category } = useParams();
    const location = useLocation();

    const [recipes, setRecipes] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const recipesPerPage = 12;
    const pagesVisited = pageNumber * recipesPerPage;

    const { isLoggedIn } = useAuth();
    const { savedRecipes, handleSaveRecipe, fetchSavedRecipes } = SaveRecipes({ isLoggedIn });

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                let response;
                if (location.pathname.endsWith("/saved")) {
                    const recipesObj = await fetchSavedRecipes();
                    response = { data: recipesObj };
                    const savedRecipes = response.data;
                    setRecipes(savedRecipes);
                } else {
                    response = await axios.get(baseAPI + category);
                }
                setRecipes(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchRecipes();
    }, [route, location.pathname]);
    console.log(savedRecipes)

    const displayRecipes = (recipeList) => {
        return recipeList
            .slice(pagesVisited, pagesVisited + recipesPerPage)
            .map((recipe) => {
                const isRecipeSaved = savedRecipes.includes(recipe._id);
                return (
                    <div className="recipe" key={recipe._id}>
                        <a href={`/recipe/${recipe._id}`} className="recipe-title-container">
                            <h3 className="recipe-title">{recipe.name}</h3>
                            <p className="recipe-category">{recipe.category}</p>
                        </a>
                        <button className="save-icon" aria-label="save-button" onClick={() => handleSaveRecipe(recipe._id)}>
                            {isRecipeSaved ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    </div>
                );
            });
    };

    // keep these under displayRecipes function otherwise error
    const displayRecipesList = results.length > 0 ? displayRecipes(results) : displayRecipes(recipes);
    const pageCount = results.length > 0 ? Math.ceil(results.length / recipesPerPage) : Math.ceil(recipes.length / recipesPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className="recipe-container-header">
                <h1>{results.length > 0 ? `${input} recipes` : `${category} recipes`}</h1>
                <h2>{Number(recipes.length)}</h2>
            </div>

            <div className="recipe-container">{displayRecipesList}</div>

            <Pagination pageCount={pageCount} onPageChange={changePage} />
        </>
    );
}

export default FilterRecipes;
