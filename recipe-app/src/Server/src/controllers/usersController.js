import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    // CHECK IF USERNAME ALREADY EXISTS
    const user = await UserModel.findOne({ username });
    if (user) {
        return res.json({ message: "🐌 User already exists!" });
    }

    // ENCRYPT PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // ADD NEW USER
    const newUser = new UserModel({ username, password: hashedPassword });

    try {
        await newUser.save();
        console.log(newUser);
        res.json({ message: "🦄 User registered successfully! " });
    } catch (error) {
        console.log("An error happened", error);
    }

});

router.post("/login");

export { router as userRouter }; // change router.name to userRouter
