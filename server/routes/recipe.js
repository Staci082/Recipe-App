const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')


// HOMEPAGE
router.get('/', recipeController.homepage)



// EXPORT
module.exports = router