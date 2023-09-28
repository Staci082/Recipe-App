import { useState, useEffect, useContext } from "react"; // keep "useContext" here or else "UseSearchContext" fails
import axios from "axios";
import { useParams } from "react-router-dom";
import Pagination from "../pagination/Pagination.jsx";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts.js";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import UseSearchContext from "../../Context/SearchContext.jsx";
import { useAuth } from "../../Context/AuthContext.jsx";

function FilterRecipes() {
    const { input, results } = UseSearchContext();
    const { isLoggedIn } = useAuth();
    const [savedRecipes, setSavedRecipes] = useState([]);

    const { route, category } = useParams();
    const [saveButton, setSaveButton] = useState(false);
    const [recipes, setRecipes] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const recipesPerPage = 15;
    const pagesVisited = pageNumber * recipesPerPage;

    const isRecipeSaved = (recipeId) => {
        return savedRecipes.includes(recipeId);
      };

    const displayRecipes = (recipeList) =>
    recipeList.slice(pagesVisited, pagesVisited + recipesPerPage).map((recipe) => {
      const recipeId = recipe._id;
      const saved = isRecipeSaved(recipeId);
  
      const handleToggleSave = () => {
        if (!isLoggedIn) {
          ToastError("You need to be logged in to save a recipe.");
          return;
        }
  
        if (saved) {
          // Remove the recipe from savedRecipes
          const updatedSavedRecipes = savedRecipes.filter((id) => id !== recipeId);
          setSavedRecipes(updatedSavedRecipes);
          ToastSuccess("Recipe removed from saved recipes!");
        } else {
          // Add the recipe to savedRecipes
          const updatedSavedRecipes = [...savedRecipes, recipeId];
          setSavedRecipes(updatedSavedRecipes);
          ToastSuccess("Recipe saved!");
        }
      };
  
      return (
        <div className="recipe" key={recipe._id}>
          <a href={`/recipe/${recipe._id}`} className="recipe-title-container">
            <h3 className="recipe-title">{recipe.name}</h3>
            <p className="recipe-category">{recipe.category}</p>
          </a>
          <button className="save-icon" onClick={handleToggleSave}>
            {saved ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      );
    });

    const handleSaveRecipe = async (recipeId) => {
        if (!isLoggedIn) {
            ToastError("You need to be logged in to save a recipe.");
            return;
        }
    
        try {
            const userId = JSON.parse(localStorage.getItem("user")).userId;
    
            // Fetch the user data from the server
            const response = await axios.get(`http://localhost:5712/auth/user/${userId}`);
            const userData = response.data;
    
            // Update the savedRecipes array
            userData.savedRecipes.push(recipeId);
    
            // Send the updated user data back to the server
            await axios.put(`http://localhost:5712/auth/user/${userId}`, userData);
    
            setSavedRecipes((prevSavedRecipes) => [...prevSavedRecipes, recipeId]);
            setSaveButton(true);
            ToastSuccess("Recipe saved!");
        } catch (error) {
            console.error("Error saving recipe:", error);
            console.log("Recipe could not be saved.");
        }
    };

    const displayRecipesList = results.length > 0 ? displayRecipes(results) : displayRecipes(recipes);

    const pageCount = results.length > 0 ? Math.ceil(results.length / recipesPerPage) : Math.ceil(recipes.length / recipesPerPage);

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
