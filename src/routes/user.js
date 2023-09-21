import express from 'express'
import VerifyToken, { Register, Login, GetSavedRecipes } from '../controllers/userController.js'

const router = express.Router();


router.post('/register', Register)
router.post('/login', Login)
router.post("/savedrecipes/:id",)
router.get("/savedrecipes", VerifyToken, GetSavedRecipes)

// EXPORT
export { router as userRouter }; 

