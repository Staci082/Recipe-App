
const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')


// HOMEPAGE
router.get('/', recipeController.homepage)

// ADD RECIPE PAGE
router.get('/add', recipeController.addRecipe)

// POST RECIPE FORM DATA
router.post('/add', recipeController.postRecipe)



// EXPORT
module.exports = router