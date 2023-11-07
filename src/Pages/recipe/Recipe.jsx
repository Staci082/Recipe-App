import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { FaPencil, FaTrashCan, FaArrowRotateLeft } from "react-icons/fa6";
import { MdOutlineArrowBack } from "react-icons/md";
import { useAuth } from "../../Context/AuthContext";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts";
import baseAPI from "../../Context/baseAPI";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Recipe({ randomRecipe }) {
    const { isLoggedIn } = useAuth();
    const params = useParams();
    const recipeID = params.id;
    const location = useLocation();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState([]);
    const [showModal, setShowModal] = useState(false);

    window.scrollTo(0, 0);

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
            ToastSuccess("Recipe deleted!");
        } catch (error) {
            console.log(error);
            ToastError("Oops! Something went wrong!");
        }
    };

    const checkLoggedIn = () => {
        if (!isLoggedIn) {
            ToastError("You must be logged in to use this feature.");
        } else {
            navigate(`/edit/${recipeID}`);
        }
    };

    const openModal = () => {
        if (isLoggedIn) {
            setShowModal(true);
            if (typeof window != "undefined" && window.document) {
                document.body.style.overflow = "hidden";
            }
        } else {
            ToastError("You must be logged in to use this feature!");
        }
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = "unset";
    };

    return (
        <>
            <div className="global-container">
                <div className="single-recipe-container">
                <button onClick={goBack} className="back-button">
                        <MdOutlineArrowBack/>
                    </button>
                <img className="recipe-image" src={recipe.image} alt={recipe.name} />
                    <div className="single-recipe-title-container">

                        <h1 className="recipe-name">{recipe.name}</h1>
                        <div className="recipe-button-container">
                        <h2 className="recipe-category">{recipe.category}</h2>
                            <div>
                            {/* hide random shuffle button unless on random page */}
                            {location.pathname === "/recipe/random" && (
                                <a href="/recipe/random" ><button className="edit-buttons">
                                    <FaArrowRotateLeft size={26} />
                                </button></a>
                            )}

                            <button onClick={checkLoggedIn} className="edit-buttons">
                                <FaPencil size={24} />
                            </button>

                            <button onClick={openModal} className="edit-buttons">
                                <FaTrashCan size={24} />
                            </button>
                            </div>
                        </div>
                    </div>

                   
                        <Tabs className="tabs">
                            <TabList className="tablist">
                                <Tab><h5 className="tab-title">Ingredients</h5></Tab>
                                <Tab><h5 className="tab-title">Instructions</h5></Tab>
                            </TabList>
                            <div className="recipe-details-container">
                            <TabPanel>
                            <ul>
                                {/* have to get values after data is fetched */}
                                {recipe.ingredients && recipe.ingredients.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                {recipe.method && recipe.method.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                            </TabPanel>
                            </div>
                        </Tabs>

                        
                   
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
