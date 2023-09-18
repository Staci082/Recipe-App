import express from 'express'
// import VerifyToken from '../controllers/userController.js'
import {postRecipe, 
        allRecipes,
        getSavedRecipesIds,
        getSavedRecipes,
        singleRecipe, 
        sortRecipes,
        searchRecipes, 
        editPage, 
        editRecipe, 
        deleteRecipe} from '../controllers/recipeController.js'

const router = express.Router()


// GET ALL RECIPES
router.get('/all', allRecipes)

// POST RECIPE FORM DATA
router.post('/create', postRecipe)

// GET SAVED RECIPES IDS 
router.get('/savedRecipes/ids/:userID', getSavedRecipesIds)

// GET SAVED RECIPES 
router.get('/savedRecipes', getSavedRecipes)

// // ADD RECIPE FROM URL
// router.get('/url', urlRecipe)

// SORT RECIPES BY CATEGORY
router.get('/:category', sortRecipes)

// GET RECIPE BY ID
router.get('/recipe/:id', singleRecipe)

// SEARCH RECIPES
router.post('/search/:', searchRecipes)

// VIEW EDIT RECIPE FORM PAGE
router.get('/edit/:id', editPage)

// EDIT SELECTED RECIPE
router.put('/edit/:id', editRecipe)

// DELETE SELECTED RECIPE
router.delete('/edit/:id', deleteRecipe)


// EXPORT
export { router as recipeRouter };