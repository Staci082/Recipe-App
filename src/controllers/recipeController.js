import { Recipe } from "../models/Recipe.js";
import { User } from "../models/User.js";

// GET /
// VIEW ALL RECIPES PAGE
export async function allRecipes(req, res) {
    try {
        const recipes = await Recipe.find({});
        res.json(recipes);
    } catch (error) {
        console.log(error);
    }
}

// POST /
// CREATE NEW RECIPE DATA
export async function postRecipe(req, res) {
    console.log(req.body);
    const newRecipe = new Recipe(req.body);

    try {
        const response = await newRecipe.save();
        console.log("Recipe successfully created!");
        res.json(response);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
}

// GET
// GET SAVED RECIPES IDS
export async function getSavedRecipesIds(req, res) {
    try {
        const user = await User.findById(req.params.userID);
        res.json({ savedRecipes: user?.savedRecipes });
    } catch (error) {
        console.log(error);
    }
}

// GET
// GET SAVED RECIPES
export async function getSavedRecipes(req, res) {
    try {
        const user = await User.findById(req.body.userID);
        res.json({ savedRecipes: user?.savedRecipes });
    } catch (error) {
        console.log(error);
    }
}

// GET /
// GET RECIPES BY CATEGORY
export async function sortRecipes(req, res) {
    let category = req.params.category || "";

    try {
        const recipes = await Recipe.find({ category: category });
        res.json(recipes);
    } catch (error) {
        console.log(error);
    }
}

// GET /
// GET SINGLE RECIPE BY ID
export async function singleRecipe(req, res) {
    let id = req.params.id || "";
    try {
        const recipe = await Recipe.findById(id);
        res.json(recipe);
        console.log(recipe);
    } catch (error) {
        console.log(error);
    }
}

// POST /
// SEARCH RECIPES PAGE
export async function searchRecipes(req, res) {
    try {
        let searchTerm = req.body.searchTerm || ""; // adding the empty string will fix the error of 'undefined replace()'
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, ""); // disallow special characters

        // SEARCH THROUGH THESE PARAMS WITHOUT SPECIAL CHARACTERS
        const recipes = await Recipe.find({
            $or: [{ name: new RegExp(searchNoSpecialChar, "i") }, { category: new RegExp(searchNoSpecialChar, "i") }, { ingredients: new RegExp(searchNoSpecialChar, "i") }],
        });
        res.json(recipes);
    } catch (error) {
        console.log(error);
    }
}


// GET /
// GET EDIT RECIPE FORM PAGE
export async function editPage(req, res) {
        let id = req.params.id || "";
        try {
            const recipe = await Recipe.findById(id);
            res.json(recipe);
            console.log(recipe);
    } catch (error) {
        console.log(error);
    }
}

// PUT /
// EDIT RECIPE
export async function editRecipe(req, res) {
    let id = req.params.id || "";
    try {
        // USE SCHEMA TO UPDATE CUSTOMER CONSTRUCTOR
        await Recipe.findByIdAndUpdate(id, {
            name: req.body.name,
            category: req.body.category,
            ingredients: req.body.ingredients,
            method: req.body.method,
        });

        // REDIRECT TO VIEW PAGE
        // res.redirect(`/recipe/${id}`)
    } catch (error) {
        console.log(error);
    }
}

// DELETE /
// DELETE RECIPE BY ID
export async function deleteRecipe(req, res) {
    let id = req.params.id || "";
    try {
        // DELETE SELECTED CUSTOMER DATA
        await Recipe.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}

// GET /
// GET RANDOM RECIPE PAGE
export async function randomRecipes(req, res) {
    try {
        let count = await Recipe.find().countDocuments();
        let random = Math.floor(Math.random() * count);
        let recipe = await Recipe.findOne().skip(random).exec();
        res.json(recipe);
        console.log(recipe);

    } catch (error) {
        console.log(error);
    }
}
