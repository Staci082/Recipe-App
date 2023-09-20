import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Pagination from "../pagination/Pagination.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
// import useSearch from "../../Hooks/useSearch.js"
import SearchContext from "../../Context/SearchContext.jsx"

function FilterRecipes() {
    const { results  } = useContext(SearchContext);
    // const { results } = useSearch()
    // console.log("frontend: ", results)

    const { route, category } = useParams();
    const [saveButton, setSaveButton] = useState(false);
    const [recipes, setRecipes] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const recipesPerPage = 15;
    const pagesVisited = pageNumber * recipesPerPage;

    const displayRecipes =
        results.length > 0
            ? results.slice(pagesVisited, pagesVisited + recipesPerPage).map((recipe) => {
                return (
                    <div className="recipe" key={recipe._id}>
                        <a href={`/recipe/${recipe._id}`} className="recipe-title-container">
                            <h3 className="recipe-title">{recipe.name}</h3>
                            <p className="recipe-category">{recipe.category}</p>
                        </a>
                        <button className="save-icon" onClick={() => setSaveButton(!saveButton)}>
                            {saveButton ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    </div>
                );
            })
            : recipes.slice(pagesVisited, pagesVisited + recipesPerPage).map((recipe) => {
                return (
                    <div className="recipe" key={recipe._id}>
                        <a href={`/recipe/${recipe._id}`} className="recipe-title-container">
                            <h3 className="recipe-title">{recipe.name}</h3>
                            <p className="recipe-category">{recipe.category}</p>
                        </a>
                        <button className="save-icon" onClick={() => setSaveButton(!saveButton)}>
                            {saveButton ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    </div>
                );
            });

    const pageCount = Math.ceil(recipes.length / recipesPerPage);
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
                <h1>{category} recipes </h1>
                <h2>{Number(recipes.length)}</h2>
            </div>

            <div className="recipe-container">{displayRecipes}</div>

            <Pagination pageCount={pageCount} onPageChange={changePage} />
        </>
    );
}

export default FilterRecipes;
