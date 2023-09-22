import express from 'express'
import VerifyToken, { Register, Login, GetSavedRecipes, addListItem, getList, editListItem, deleteListItem } from '../controllers/userController.js'

const router = express.Router();


router.post('/register', Register)
router.post('/login', Login)
router.post("/savedrecipes/:id",)
router.get("/savedrecipes", VerifyToken, GetSavedRecipes)

router.get("/list", VerifyToken, getList)
router.post("/list", addListItem)
router.put("/list/:id", editListItem)
router.delete("/list/:id", deleteListItem)

// EXPORT
export { router as userRouter }; 

