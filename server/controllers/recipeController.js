
const Recipe = require('../models/Recipe')

const mongoose = require('mongoose')


// GET /
// HOMEPAGE
exports.homepage = async (req, res) => {

    // TAB TITLE
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
        title: "View recipes"
    }

    let perPage = 12
    let page = req.query.page || 1

    try {
        // Recipe.find({}) // empty brackets = find all (IF NO PAGINATION)

        const recipes = await Recipe.aggregate([ {$sort: { updatedAt: -1}} ]).sort({name:1})
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec()

        const count = await Recipe.count()


        res.render('recipe/view', {
            locals,
            recipes,
            current: page,
            pages: Math.ceil(count/perPage)
        })

    } catch (error) {
        console.log(error)
    }
}


// GET / 
// GET SINGLE RECIPE BY ID
exports.singleRecipe = async (req, res) => {

    try {
        single = await Recipe.findOne({ _id: req.params.id })  // finding single recipe (added const bugs it for some reason)
        
        const locals = {
            title: single.name
        }

        res.render('recipe/single', {locals, single} )
    } catch (error) {
        console.log(error) 
    }
}



// // GET / 
// // GET RECIPES BY CATEGORY
// exports.sortRecipes = async (req,res) => {

//     // let category = req.body.chosenCategory || ""
//     let category = req.params.category || ""

    
//     try {
//         const recipes = await Recipe.find({_category: category}).limit(12)

//         res.render('recipe/view', recipes)

        

//     } catch (error) {
//         console.log(error)
//     }
// }


// POST / 
// SEARCH RECIPES PAGE
exports.searchRecipes = async (req, res) => {
    
    const locals = {
        title: "Search recipes"
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

        let perPage = 12
        let page = req.query.page || 1

        const recipeList = await Recipe.aggregate([ {$sort: { updatedAt: -1}} ]).sort({name:1})
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec()

        const count = await Recipe.count()

        res.render('recipe/view', {
            locals,
            recipeList,
            recipes, 
            current: page,
            pages: Math.ceil(count / perPage)
        })
        
    } catch (error) {
        console.log(error)
    }
}


// GET / 
// GET RANDOM RECIPE PAGE
exports.randomRecipe = async (req, res) => {


    try {
        random = await Recipe.aggregate([{$sample: {size: 1}}])

        const locals = {
            title: random.name
        }
        res.render('recipe/random', {locals, random} )

    } catch (error) {
        console.log(error)
    }
}