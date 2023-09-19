import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { FaPencil, FaTrashCan, FaArrowRotateLeft } from "react-icons/fa6";

function Recipe({ randomRecipe }) {
    // prop from random recipe
    const params = useParams();
    const recipeID = params.id;
    const [recipe, setRecipe] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                if (randomRecipe) {
                    // Fetch a random recipe
                    const response = await axios.get("http://localhost:5712/recipe/random");
                    setRecipe(response.data);
                    console.log(response.data);
                } else {
                    // Fetch the recipe based on the provided ID
                    const response = await axios.get("http://localhost:5712/recipe/" + recipeID);
                    setRecipe(response.data);
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchRecipe();
    }, [recipeID, randomRecipe]);

    const goBack = () => {
        navigate(-1);
    };

    const handleDelete = () => {
        try {
            axios.delete("http://localhost:5712/recipe/" + recipeID);
            setShowModal(false);
            navigate("/category/all");
            alert("recipe deleted!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="global-container">
                <div className="single-recipe-container">
                    <div className="single-recipe-title-container">
                        <h1 className="recipe-name">{recipe.name}</h1>
                        <h2 className="recipe-category-title">{recipe.category}</h2>
                    </div>
                    <button onClick={goBack} className="recipe-back-button">
                        &times;
                    </button>
                    <div className="recipe-details-container">
                        <div className="ingredients-container">
                            <ul>
                                <h5 className="recipe-details-title">Ingredients</h5>
                                {/* have to get values after data is fetched */}
                                {recipe.ingredients && recipe.ingredients.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </div>

                        <div className="method-container">
                        <ul>
                            <h5 className="recipe-details-title">Instructions</h5>
                            {recipe.method && recipe.method.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="recipe-button-container">
                            {/* hide random shuffle button unless on random page */}
                            {location.pathname === "/recipe/random" && (
                                <a href="/recipe/random" className="random-button">
                                    <FaArrowRotateLeft size={28} />
                                </a>
                            )}
                            <a href={`/edit/${recipeID}`} className="edit-buttons">
                                <FaPencil size={26} />
                            </a>
                            <button onClick={() => setShowModal(true)} className="edit-buttons">
                                <FaTrashCan size={26} />
                            </button>
                        </div>
                    </div>
                </div>

                {showModal && (
                    <div className="modal">
                        <p className="modal-title">Are you sure you want to delete this recipe?</p>

                        <div className="modal-button-container">
                            <button onClick={handleDelete} className="modal-button">
                                YES
                            </button>
                            <button onClick={() => setShowModal(false)} className="modal-button">
                                CANCEL
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Recipe;
