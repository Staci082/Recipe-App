
const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')


// HOMEPAGE
router.get('/', recipeController.homepage)

// ADD RECIPE PAGE
router.get('/add', recipeController.addRecipe)

// POST RECIPE FORM DATA
router.post('/add', recipeController.postRecipe)

// VIEW ALL RECIPES PAGE
router.get('/view', recipeController.viewRecipes)

// // SORT RECIPES BY CATEGORY
// router.post('/view', recipeController.sortRecipes)

// SEARCH PAGE
// router.get('/view', recipeController.searchRecipes)

// SEARCH RECIPES
router.post('/search', recipeController.searchRecipes)

// GET RANDOM RECIPE
router.get('/random', recipeController.randomRecipe)


// EXPORT
module.exports = router