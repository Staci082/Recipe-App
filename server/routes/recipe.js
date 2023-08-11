
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

// SEARCH PAGE
router.get('/search', recipeController.searchRecipes)

// SEARCH RECIPES
router.post('/search', recipeController.postSearchRecipes)


// EXPORT
module.exports = router