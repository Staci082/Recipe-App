import express from 'express'
import {addRecipe,
        postRecipe, 
        viewRecipes, 
        singleRecipe, 
        searchRecipes, 
        editPage, 
        editRecipe, 
        deleteRecipe} from '../controllers/recipeController.js'

const router = express.Router()


// ADD RECIPE PAGE
router.get('/add', addRecipe)

// POST RECIPE FORM DATA
router.post('/add', postRecipe)

// VIEW ALL RECIPES PAGE
router.get('/view', viewRecipes)

// // ADD RECIPE FROM URL
// router.get('/url', urlRecipe)

// // SORT RECIPES BY CATEGORY
// router.get('/view/:category', sortRecipes)

//GET / 
// GET RECIPE BY ID
router.get('/view/:id', singleRecipe)

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