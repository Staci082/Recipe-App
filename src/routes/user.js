import express from 'express'
import VerifyToken, { Register, Login, getList, editListItem, deleteListItem, updateUser, getUser, displaySavedRecipes } from '../controllers/userController.js'

const router = express.Router();


router.post('/register', Register)
router.post('/login', Login)

router.get("/user/:userId", getUser)
router.put("/user/:userId", updateUser)

router.post("/savedrecipes", displaySavedRecipes)

router.get("/list", VerifyToken, getList)
router.post("/list")
router.put("/list/:id", editListItem)
router.delete("/list/:id", deleteListItem)

// EXPORT
export { router as userRouter }; 

