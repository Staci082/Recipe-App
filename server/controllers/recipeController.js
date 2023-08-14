
const Recipe = require('../models/Recipe')

const mongoose = require('mongoose')


// GET /
// HOMEPAGE
exports.homepage = async (req, res) => {

    const locals = {
        title: "Home page"
    }

    try {
        // RENDER PAGE AND LOAD VARIABLE DATA
        res.render('index', locals)
    } catch (error) {
        console.log(error)
    }
}


// GET /
// ADD NEW RECIPE FORM PAGE
exports.addRecipe = async (req, res) => {

    const locals = {
        title: "Add recipe"
    }

    try {
        res.render('recipe/add', locals)
    } catch (error) {
        console.log(error)
    }
}


// POST /
// CREATE NEW RECIPE DATA
exports.postRecipe = async (req, res) => {

    console.log(req.body)

    // USE SCHEMA TO DEFINE RECIPE CONSTRUCTOR
    const newRecipe = new Recipe({  // use schema to retrieve data
        name: req.body.name,
        category: req.body.category,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })

    try {
        // CREATE NEW DATA 
        await Recipe.create(newRecipe)
        
        // SUCCESS MESSAGE
        console.log('Recipe successfully created!')

        // REDIRECT TO HOMEPAGE
        res.redirect('/')

    }   catch (error) {
        console.log(error)
    }
}


// GET / 
// VIEW ALL RECIPES PAGE
exports.viewRecipes = async (req, res) => {

    const locals = {
        title: "All recipes"
    }

    try {
        const recipes = await Recipe.find({}).limit(12) // empty brackets = find all

        res.render('recipe/view', {locals, recipes})

    } catch (error) {
        console.log(error)
    }
}


// GET / 
// GET SINGLE RECIPE BY ID
exports.singleRecipe = async (req, res) => {

    try {
        const recipe = await Recipe.findOne({ _id: req.params.id })

        res.render('recipe/single', recipe )
    } catch (error) {
        console.log(error) 
    }
}



// // GET / 
// // GET RECIPES BY CATEGORY
// exports.sortRecipes = async (req,res) => {

//     let selectedCategory = req.params.category
    
//     try {
//             const recipes = await Recipe.find({selectedCategory}).limit(12)

//             res.render('recipe/view', {recipes})

        

//     } catch (error) {
//         console.log(error)
//     }
// }


// POST / 
// SEARCH RECIPES PAGE
exports.searchRecipes = async (req, res) => {
    
    const locals = {
        title: "Search recipes"  // check if needed after all is done pls
    }

    try {
        
        let searchTerm = req.body.searchTerm || ""  // adding the empty string will fix the error of 'undefined replace()'
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")  // disallow special characters

        // SEARCH THROUGH THESE PARAMS WITHOUT SPECIAL CHARACTERS
        const recipes = await Recipe.find({
            $or: [
                {name: new RegExp(searchNoSpecialChar, "i") },
                {category: new RegExp(searchNoSpecialChar, "i") },
                {ingredients: new RegExp(searchNoSpecialChar, "i") }
            ]
        })

        res.render('recipe/view', {locals, recipes})
        
    } catch (error) {
        console.log(error)
    }
}


// GET / 
// GET RANDOM RECIPE PAGE
exports.randomRecipe = async (req, res) => {

    const locals = {
        title: "Random recipe"
    }

    try {
        const recipes = await Recipe.find({}).limit(120) // empty brackets = find all

        res.render('recipe/random', {locals, recipes})

    } catch (error) {
        console.log(error)
    }
}