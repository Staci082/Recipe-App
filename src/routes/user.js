import express from 'express'
import VerifyToken, { Register, Login, GetSavedRecipes, addGroceryList, getGroceryList, editGroceryList } from '../controllers/userController.js'

const router = express.Router();


router.post('/register', Register)
router.post('/login', Login)
router.post("/savedrecipes/:id",)
router.get("/savedrecipes", VerifyToken, GetSavedRecipes)

router.post("/list", addGroceryList)
router.get("/list", getGroceryList)
router.put("/list/:id", editGroceryList)

// EXPORT
export { router as userRouter }; 

