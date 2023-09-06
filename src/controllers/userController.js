import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

// POST
// REGISTER USER
export async function Register(req, res) {
    const { username, password } = req.body;

    // CHECK IF USERNAME ALREADY EXISTS
    const user = await User.findOne({ username });
    if (user) {
        return res.json({ message: "🐌 User already exists!" });
    }

    // ENCRYPT PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // SAVE USER IN DB
    const newUser = new User({ username, password: hashedPassword });

    try {
        await newUser.save();
        console.log(newUser);
        res.json({ message: "🦄 User registered successfully! " });
    } catch (error) {
        console.log("An error happened", error);
    }
}

// POST
// LOG USER IN
export async function Login(req, res) {
    const { username, password } = req.body;

    // CHECK USERNAME
    const user = await User.findOne({ username });
    if (!user) {
        return res.json({ message: "Username or password is incorrect!" });
    }

    // CHECK PASSWORD
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.json({ message: "Username or password is incorrect!" });
    }

    // GIVE TOKEN WHEN BOTH ARE VALID
    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
}
