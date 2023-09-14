import { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Pagination from "../../Components/pagination/Pagination";
// import { FaHeart, FaRegHeart } from "react-icons/fa6";

function FilterRecipes() {
    const { route,category } = useParams();
    const [recipes, setRecipes] = useState([]);
    // const [saveButton, setSaveButton] = useState(false)

    // const [currentPage, setCurrentPage] = useState(1);
    // const [recipesPerPage, setRecipesPerPage] = useState(8);

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
    }, [route,recipes]);

    // const lastRecipeIndex = currentPage * recipesPerPage;
    // const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    // const currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);

    return (
    <>
    {recipes.map((recipe) => (
                <div className="recipe" key={recipe._id}>
                    <a href={`/recipe/${recipe._id}`} className="recipe-title-container">
                        <h3 className="recipe-title">{recipe.name}</h3>
                        <i className="recipe-category">{recipe.category}</i>
                    </a>
                    <button className="save-icon" > 
                    {/* onClick={() => setSaveButton(!saveButton)} */}
                        {/* {saveButton ? <FaRegHeart /> : <FaHeart/>} */}
                    </button>
                </div>
            ))}
        {/* <Pagination 
                totalRecipes={recipes.length}
                recipesPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            /> */}
    </>
    )
}


export default FilterRecipes