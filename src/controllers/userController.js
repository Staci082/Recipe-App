import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import GroceryList from "../models/GroceryList.js";

// POST
// REGISTER USER
export async function Register(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user) {
        return res.json({ message: "🐌 User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
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

export const GetSavedRecipes = (req, res) => {
    const userId = req.params.id;
    User.findById(userId).then((user) => {
        console.log(user.savedRecipes);
        res.status(200).json({
            likes: user.savedRecipes,
        });
    });
};


export async function addGroceryList(req, res) {
    const item = new GroceryList(req.body)
    
    try {
        const response = await item.save()
        res.json(response);
    } catch (error) {
        console.log(error)
    }
    

}

export async function getGroceryList(req, res) {

        const response = await GroceryList.find()
        res.json(response);
        console.log(response)
    try {

    } catch (error) {   
        console.log(error)
    }
}

export async function editGroceryList(req, res) {
    
    // try {
        const {id} = req.params
        console.log(id)
    // } catch (error) {
    //     console.log(error)
    // }
}

export default VerifyToken;
