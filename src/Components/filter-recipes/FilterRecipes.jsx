import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { FaHeart, FaRegHeart, FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function FilterRecipes() {
    const { route, category } = useParams();
    const [recipes, setRecipes] = useState([]);

    // PAGINATION
    const [pageNumber, setPageNumber] = useState(0);
    const recipesPerPage = 6;
    const pagesVisited = pageNumber * recipesPerPage;
    const displayRecipes = recipes.slice(pagesVisited, pagesVisited + recipesPerPage).map((recipe) => {
        return (
            <div className="recipe" key={recipe._id}>
                <img className="recipe-img"/>
                <a href={`/recipe/${recipe._id}`} className="recipe-title-container">
                    <h3 className="recipe-title">{recipe.name}</h3>
                    <p className="recipe-category">{recipe.category}</p>
                </a>
                <button className="save-icon">
                    <FaRegHeart />
                    {/* onClick={() => setSaveButton(!saveButton)} */}
                    {/* {saveButton ? <FaRegHeart /> : <FaHeart/>} */}
                </button>
            </div>
        );
    });

    const pageCount = Math.ceil(recipes.length / recipesPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    // FETCH RECIPES
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
        <div className="recipe-container-titles">
            <h1>Recipes</h1>
            <h2>12 recipes</h2>
            </div>

            <div className="recipe-container">
                {displayRecipes}</div>

                <ReactPaginate
                breakLabel="..."
                    previousLabel={<FaAnglesLeft/>}
                    nextLabel={<FaAnglesRight/>}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"previous-button"}
                    nextLinkClassName={"next-button"}
                    disabledClassName={"pagination-disabled"}
                    activeClassName={"pagination-active"}/>

        </>
    );
}

export default FilterRecipes;
