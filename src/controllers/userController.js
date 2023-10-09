import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Recipe from "../models/Recipe.js";

// POST
// REGISTER USER
export async function Register(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user) {
        return res.json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    try {
        await newUser.save();
        console.log(newUser);
        const token = jwt.sign({ id: newUser._id }, "secret");
        res.json({ message: "User registered successfully! ", token, userID: newUser._id });
    } catch (error) {
        console.log("An error happened", error);
    }
}

// POST
// LOG USER IN
export async function Login(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.json({ message: "Username or password is incorrect!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.json({ message: "Username or password is incorrect!" });
    }

    // GIVE TOKEN WHEN BOTH ARE VALID
    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
}

const VerifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (token) {
        token = token.split(" ")[1];
        let decoded = jwt.verify(token, "secret");
        if (decoded) {
            next();
        } else {
            res.status(401).json({
                message: "Invalid",
            });
        }
    }
};
export default VerifyToken;

export const getList = async (req, res) => {
    try {
        const { userId } = req.user;
        console.log("User ID:", userId);
        const user = await User.findById(userId);
        console.log("User Document:", user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const groceryList = user.groceryItems;
        res.json({ groceryList });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function getUser(req, res) {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function updateUser(req, res) {
    const { userId } = req.params; 
    const updatedUserData = req.body; 

    try {

        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
            new: true,
        });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error("Error updating user data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function displaySavedRecipes(req, res) {
    const { recipeIds } = req.body;
    console.log(recipeIds)

    try {
        // Find recipes by their IDs in the database
        const fetchedRecipes = await Recipe.find({ _id: { $in: recipeIds } });

        res.json(fetchedRecipes);
    } catch (error) {
        console.error("Error fetching saved recipes:", error);
        res.status(500).json({ error: "Error fetching saved recipes" });
    }
};