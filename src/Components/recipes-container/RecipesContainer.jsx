import { useState, useEffect, useContext } from "react"; // keep "useContext" here or else "UseSearchContext" fails
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination.jsx";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import UseSearchContext from "../../Context/SearchContext.jsx";
import { useAuth } from "../../Context/AuthContext.jsx";
import baseAPI from "../../Context/baseAPI.js";
import SaveRecipes from "../save-recipes/SaveRecipes.jsx";
import loadingtaco from "/loadingtaco.gif";

function RecipesContainer() {
    const { input, results } = UseSearchContext();
    const { route, category } = useParams();
    const location = useLocation();
    const navigate = useNavigate()

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
                // fetch saved recipes from db
                if (location.pathname.endsWith("/saved")) {
                    const recipesObj = await fetchSavedRecipes();
                    response = { data: recipesObj };
                    const savedRecipes = response.data;
                    setRecipes(savedRecipes);
                } else {
                    // all other categories
                    response = await axios.get(baseAPI + category);
                }
                setRecipes(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchRecipes();
    }, [route, location.pathname]);

    const openRecipe = (recipe) => {
        navigate(`/recipe/${recipe}`);
    }

    const displayRecipes = (recipeList) => {
        if (!recipeList) {
            return (
                <div className="empty-recipes">
                    <img src={loadingtaco} alt="happy taco" className="loadingtaco"/>
                    <p className="empty-text">You don't have any saved recipes yet..</p>
                </div>
            );
        } else {
            return recipeList.slice(pagesVisited, pagesVisited + recipesPerPage).map((recipe) => {
                const isRecipeSaved = savedRecipes.includes(recipe._id);
                return (
                    <div className="recipe" key={recipe._id}>
                            
                        <img  onClick={() => openRecipe(recipe._id)} src={recipe.image} alt={recipe.name} className="recipe-image" loading="lazy"/>
                        <div className="recipe-title-container">
                            <h3  onClick={() => openRecipe(recipe._id)} className="recipe-title">{recipe.name}</h3>
                            <p  onClick={() => openRecipe(recipe._id)} className="recipe-category">{recipe.category}</p>
                            <button className="save-icon" aria-label="save-button" onClick={() => handleSaveRecipe(recipe._id)}>
                                {isRecipeSaved ? <GoBookmarkFill size={30} /> : <GoBookmark size={30} />}
                            </button>
                        </div>


                        
                    </div>
                );
            });
        }
    };

    // keep these under displayRecipes function otherwise error
    const displayRecipesList = results.length > 0 ? displayRecipes(results) : displayRecipes(recipes);

    const pageCount = results.length > 0 ? Math.ceil(results.length / recipesPerPage) : Math.ceil(recipes && recipes.length / recipesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className="recipe-container-header">
                <h1>{results.length > 0 ? `${input} recipes` : `${category} recipes`}</h1>
                <h2 className="recipes-amount">{recipes && recipes.length}</h2>
            </div>
            <div className="recipe-wrapper">
            <div className="recipe-container">{displayRecipesList}</div></div>

            {
                displayRecipesList === null ? null : <Pagination pageCount={pageCount} onPageChange={changePage} /> // hide pagination arrows on empty page
            }
        </>
    );
}
export default RecipesContainer;
