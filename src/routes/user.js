import express from 'express'
import { Register, Login, updateUser, getUser, displaySavedRecipes } from '../controllers/userController.js'

const router = express.Router();


router.post('/register', Register)
router.post('/login', Login)

router.get("/user/:userId", getUser)
router.put("/user/:userId", updateUser)

router.post("/savedrecipes", displaySavedRecipes)


// EXPORT
export { router as userRouter }; 

