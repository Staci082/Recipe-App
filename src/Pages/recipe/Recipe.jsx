import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { FaPencil, FaTrashCan, FaArrowRotateLeft } from "react-icons/fa6";
import { useAuth } from "../../Context/AuthContext";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts";
import baseAPI from "../../Context/baseAPI";

function Recipe({ randomRecipe }) {
    const { isLoggedIn } = useAuth();
    const params = useParams();
    const recipeID = params.id;
    const location = useLocation();
    const navigate = useNavigate();


    const [recipe, setRecipe] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                if (randomRecipe) {
                    const response = await axios.get(baseAPI + "recipe/random");
                    setRecipe(response.data);
                } else {
                    const response = await axios.get(baseAPI + "recipe/" + recipeID);
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
            axios.delete(baseAPI + "recipe/" + recipeID);
            setShowModal(false);
            navigate("/all");
            ToastSuccess("Recipe deleted!")
        } catch (error) {
            console.log(error);
            ToastError("Oops! Something went wrong!")
        }
    };

    const checkLoggedIn = () => {
        if (!isLoggedIn) {
            ToastError("You must be logged in to use this feature.")
        } else {
            navigate(`/edit/${recipeID}`);
        }
    }

    const openModal = () => {
        if (isLoggedIn) {
            setShowModal(true)
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
            }
        } else {
            ToastError("You must be logged in to use this feature!")
        }
    }

    const closeModal = () => {
        setShowModal(false)
            document.body.style.overflow = 'unset';
    }


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


                            <button onClick={checkLoggedIn} className="edit-buttons">
                                <FaPencil size={26} />
                            </button>

                            <button onClick={openModal} className="edit-buttons">
                                <FaTrashCan size={26} />
                            </button>
                        </div>
                    </div>
                </div>

                {showModal && (
                    <div className="delete-modal">
                        <p className="modal-title">Are you sure you want to delete this recipe?</p>

                        <div className="modal-button-container">
                            <button onClick={handleDelete} className="modal-button">
                                YES
                            </button>
                            <button onClick={closeModal} className="modal-button">
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
