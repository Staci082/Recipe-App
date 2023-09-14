import { useState, useEffect } from "react";
import axios from "axios";
import Categories from "../categories/Categories";
import UseGetUserId from "../../Hooks/useGetUserId";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useParams, Routes, Route } from "react-router-dom";
import DiscoverRecipes from "../discover-recipes/DiscoverRecipes";
import Dessert from "../dessert/Dessert";

function RecipesContainer() {
    // const { route } = useParams();

    // // FILTER RECIPES
    // const [recipes, setRecipes] = useState([]);

    // // SAVE RECIPES
    // const [savedRecipes, setSavedRecipes] = useState([]);
    // const [saveRecipeButton, setSaveRecipeButton] = useState([]);

    // const userID = UseGetUserId();

    // useEffect(() => {
    //     const fetchRecipes = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:5712/");
    //             setRecipes(response.data);
    //         } catch (error) {
    //             console.log("Error fetching data:", error);
    //         }
    //     };
    //     // const fetchSavedRecipes = async () => {
    //     //     try {
    //     //         const response = await axios.get(`http://localhost:5712/savedrecipes/ids/${userID}`);
    //     //         setSavedRecipes(response.data);
    //     //     } catch (error) {
    //     //         console.log("Error fetching data:", error);
    //     //     }
    //     // };

    //     // const fetchLikes = async () => {
    //     //     try {
    //     //         const response = await axios.get(`http://localhost:5712/auth/getlikes/${userID}`, {
    //     //             headers: { Authorization: `Bearer ${document.cookie.split("=")[1]}` },
    //     //         });

    //     //         setSaveRecipeButton(response.data.likes);
    //     //     } catch (error) {
    //     //         console.log("Error fetching data:", error);
    //     //     }
    //     // };

    //     // fetchSavedRecipes();
    //     // fetchLikes();
    //     fetchRecipes();
    // }, [route]);

    // const saveRecipe = async (recipeID) => {
    //     try {
    //         const response = await axios.put("http://localhost:5712/", { recipeID, userID });
    //         console.log(response);
    //         // setSaveRecipeButton(!saveRecipeButton);
    //         setSaveRecipeButton([...saveRecipeButton,recipeID])
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div className="recipe-container">
            <Categories />

            <Routes>
                <Route path="dessert" element={<Dessert />} />
                <Route path="/" element={<DiscoverRecipes />} />
            </Routes>

            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
            <a className="recipe" href="/recipe"></a>
        </div>
    );
}

export default RecipesContainer;
