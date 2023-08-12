
const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')


// HOMEPAGE
router.get('/', recipeController.homepage)

// ADD RECIPE PAGE
router.get('/add', recipeController.addRecipe)

// // GET INGRDIENTS
// router.get('/add', recipeController.getIngredients)

// // POST NEW INGREDIENT
// router.post('/add', recipeController.postIngredients)

// POST RECIPE FORM DATA
router.post('/add', recipeController.postRecipe)

// VIEW ALL RECIPES PAGE
router.get('/view', recipeController.viewRecipes)

// // SORT RECIPES BY CATEGORY
// router.post('/view', recipeController.sortRecipes)

//GET / 
// GET RECIPE BY ID
router.get('/recipe', recipeController.singleRecipe)

// SEARCH RECIPES
router.post('/search', recipeController.searchRecipes)

// GET RANDOM RECIPE
router.get('/random', recipeController.randomRecipe)


// EXPORT
module.exports = router