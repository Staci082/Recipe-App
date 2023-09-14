import express from 'express'
import VerifyToken, { Register, Login,GetLikes } from '../controllers/userController.js'

const router = express.Router();


router.post('/register', Register)
router.post('/login', Login)
router.get("/getlikes/:id",VerifyToken, GetLikes)

// EXPORT
export { router as userRouter }; 

