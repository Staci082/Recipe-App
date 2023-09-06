import express from 'express'
import {postRecipe, 
        allRecipes, 
        singleRecipe, 
        searchRecipes, 
        editPage, 
        editRecipe, 
        deleteRecipe} from '../controllers/recipeController.js'

const router = express.Router()


// GET ALL RECIPES
router.get('/discover', allRecipes)

// POST RECIPE FORM DATA
router.post('/create', postRecipe)


// // ADD RECIPE FROM URL
// router.get('/url', urlRecipe)

// // SORT RECIPES BY CATEGORY
// router.get('/:category', sortRecipes)

//GET / 
// GET RECIPE BY ID
router.get('/:id', singleRecipe)

// SEARCH RECIPES
router.post('/search', searchRecipes)

// VIEW EDIT RECIPE FORM PAGE
router.get('/edit/:id', editPage)

// EDIT SELECTED RECIPE
router.put('/edit/:id', editRecipe)

// DELETE SELECTED RECIPE
router.delete('/edit/:id', deleteRecipe)

// GET RANDOM RECIPE
// router.get('/random', randomRecipes)


// EXPORT
export { router as recipeRouter };