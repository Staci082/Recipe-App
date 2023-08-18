
const Recipe = require('../models/Recipe')

const mongoose = require('mongoose')


// GET /
// HOMEPAGE
exports.homepage = async (req, res) => {

    // TAB TITLE
    const locals = {
        title: "Fiesta Flavors"
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

    // ITEM PER PAGE LIMIT
    let perPage = 12

    // START PAGE = CURRENT PAGE OR 1 TO START
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
            pages: Math.ceil(count/perPage)  //  ROUNDING
        })

    } catch (error) {
        console.log(error)
    }
}


// GET / 
// GET SINGLE RECIPE BY ID
exports.singleRecipe = async (req, res) => {

    try {
        single = await Recipe.findOne({ _id: req.params.id })  // finding single recipe (adding const bugs it for some reason)
        
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
// GET EDIT RECIPE FORM PAGE

exports.editPage = async (req, res) => {

    const locals = {
        title: "Edit recipe",
    } 

    try {  // FIND ID OF CERTAIN CUSTOMER 
        const single = await Recipe.findOne({ _id: req.params.id })

        // RENDER DATA
        res.render('recipe/edit', {
            locals,
            single  // data grabbed earlier by finding id
        })
    } catch (error) {
        console.log(error)
    }
}

exports.editRecipe = async (req, res) => {


    try {  // USE SCHEMA TO UPDATE CUSTOMER CONSTRUCTOR
        await Recipe.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        category: req.body.category,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
        })

        // REDIRECT TO VIEW PAGE
        res.redirect(`/view/${req.params.id}`)

    } catch (error) {
        console.log(error)
    }
}

// DELETE / 
// DELETE RECIPE BY ID
exports.deleteRecipe = async (req, res) => {

    try {  

        // DELETE SELECTED CUSTOMER DATA
        await Recipe.deleteOne({_id: req.params.id})

        // REDIRECT TO HOMEPAGE
        res.redirect("/view")

    } catch (error) {
        console.log(error)
        // FAIL MESSAGE
        // await req.flash('info', 'An error occurred while deleting the customer data. Please try again.')
    }
}

// GET / 
// GET RANDOM RECIPE PAGE
exports.randomRecipe = async (req, res) => {


    try {

        let count = await Recipe.find().countDocuments()
        let random = Math.floor(Math.random() * count)
        let recipe = await Recipe.findOne().skip(random).exec()

        const locals = {
            title: recipe.name
        }

        res.render('recipe/random', {locals, recipe} )

    } catch (error) {
        console.log(error)
    }
}