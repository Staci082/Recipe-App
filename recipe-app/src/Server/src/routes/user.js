import express from 'express'
import { Register, Login } from '../controllers/userController.js'

const router = express.Router();


router.post('/register', Register)
router.post('/login', Login)



export { router as userRouter }; // change router.name to userRouter