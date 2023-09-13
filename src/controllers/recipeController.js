import { Recipe } from "../models/Recipe.js";
import { User } from "../models/User.js";


// GET /
// VIEW ALL RECIPES PAGE
export async function allRecipes(req, res) {

    // // ITEM PER PAGE LIMIT
    // let perPage = 12;

    // // START PAGE = CURRENT PAGE OR 1 TO START
    // let page = req.query.page || 1;

    try {
        const recipes = await Recipe.find({}) // empty brackets = find all (IF NO PAGINATION)
        res.json(recipes)
        console.log(recipes)
        // const recipes = await Recipe.aggregate([{ $sort: { updatedAt: -1 } }])
        //     .sort({ name: 1 })
        //     .skip(perPage * page - perPage)
        //     .limit(perPage)
        //     .exec();

        // const count = await Recipe.count();

        // res.render('recipe/view', {
        //     recipes,
        //     current: page,
        //     pages: Math.ceil(count/perPage)  //  ROUNDING
        // })
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
        res.json(error)
        console.log(error)
    }
}

// PUT
// SAVE RECIPES
export async function saveRecipe(req, res) {

    try {
        const recipe = await Recipe.findById(req.body.recipeID)
        const user = await User.findById(req.body.userID)

        // add recipe into saved recipes array
        user.savedRecipes.push(recipe)

        //save user in db
        await user.save()
        res.json({savedRecipes: user?.savedRecipes})

    } catch (error) {
        cosnole.log(error)
    }
}

// GET
// GET SAVED RECIPES IDS
export async function getSavedRecipesIds(req, res) {

    try {

        const user = await User.findById(req.body.userID)
        const savedRecipes = await Recipe.findById({
            _id: { $in: user.savedRecipes}
        })
        res.json({ savedRecipes })

    } catch (error) {
        console.log(error)
    }
}

// GET
// GET SAVED RECIPES
export async function getSavedRecipes(req, res) {

    try {

        const user = await User.findById(req.body.userID)
        res.json({ savedRecipes: user?.savedRecipes })

    } catch (error) {
        console.log(error)
    }
}

// GET /
// GET SINGLE RECIPE BY ID
export async function singleRecipe(req, res) {
    try {
         recipe = await Recipe.findOne({ _id: req.params.id }); // finding single recipe (adding const bugs it for some reason)
        res.json(recipes)
        // const locals = {
        //     title: single.name,
        // };

        // res.render('recipe/single', {locals, single} )
    } catch (error) {
        console.log(error);
    }
}

// GET /
// GET RECIPES BY CATEGORY
export async function sortRecipes(req, res){

    // let category = req.body.chosenCategory || ""
    let category = req.params.category || ""

    try {
        const recipes = await Recipe.find({category: category})    
        // .limit(12)

        res.json(recipes)

    } catch (error) {
        console.log(error)
    }
}

// POST /
// SEARCH RECIPES PAGE
export async function searchRecipes(req, res) {
    const locals = {
        title: "Search recipes",
    };

    try {
        let searchTerm = req.body.searchTerm || ""; // adding the empty string will fix the error of 'undefined replace()'
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, ""); // disallow special characters

        // SEARCH THROUGH THESE PARAMS WITHOUT SPECIAL CHARACTERS
        const recipes = await Recipe.find({
            $or: [{ name: new RegExp(searchNoSpecialChar, "i") }, { category: new RegExp(searchNoSpecialChar, "i") }, { ingredients: new RegExp(searchNoSpecialChar, "i") }],
        });

        let perPage = 12;
        let page = req.query.page || 1;

        const recipeList = await Recipe.aggregate([{ $sort: { updatedAt: -1 } }])
            .sort({ name: 1 })
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const count = await Recipe.count();

        // res.render('recipe/view', {
        //     locals,
        //     recipeList,
        //     recipes,
        //     current: page,
        //     pages: Math.ceil(count / perPage)
        // })
    } catch (error) {
        console.log(error);
    }
}

// GET /
// GET EDIT RECIPE FORM PAGE

export async function editPage(req, res) {
    const locals = {
        title: "Edit recipe",
    };

    try {
        // FIND ID OF CERTAIN CUSTOMER
        const single = await Recipe.findOne({ _id: req.params.id });

        // RENDER DATA
        // res.render('recipe/edit', {
        //     locals,
        //     single  // data grabbed earlier by finding id
        // // })
    } catch (error) {
        console.log(error);
    }
}

export async function editRecipe(req, res) {
    try {
        // USE SCHEMA TO UPDATE CUSTOMER CONSTRUCTOR
        await Recipe.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            category: req.body.category,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        });

        // REDIRECT TO VIEW PAGE
        // res.redirect(`/view/${req.params.id}`)
    } catch (error) {
        console.log(error);
    }
}

// DELETE /
// DELETE RECIPE BY ID
export async function deleteRecipe(req, res) {
    try {
        // DELETE SELECTED CUSTOMER DATA
        await Recipe.deleteOne({ _id: req.params.id });

        // REDIRECT TO HOMEPAGE
        // res.redirect("/view")
    } catch (error) {
        console.log(error);
        // FAIL MESSAGE
        // await req.flash('info', 'An error occurred while deleting the customer data. Please try again.')
    }
}

// GET /
// GET RANDOM RECIPE PAGE
export async function randomRecipes(req, res) {
    try {
        let count = await Recipe.find().countDocuments();
        let random = Math.floor(Math.random() * count);
        let recipe = await Recipe.findOne().skip(random).exec();

        const locals = {
            title: recipe.name,
        };

        // res.render('recipe/random', {locals, recipe} )
    } catch (error) {
        console.log(error);
    }
}
