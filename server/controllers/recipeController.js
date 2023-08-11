
const Recipe = require('../models/Recipe')
const mongoose = require('mongoose')


// GET /
// HOMEPAGE
exports.homepage = async (req, res) => {

    const locals = {
        title: "Home page"
    }

    try {
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