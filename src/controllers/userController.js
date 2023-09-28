import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

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
export default VerifyToken;

export const getList = async (req, res) => {
    try {
        const { userId } = req.user;
        console.log('User ID:', userId); 
        const user = await User.findById(userId);
        console.log('User Document:', user);
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

export const GetSavedRecipes = async (req, res) => {
    const userId = req.params.id;
    User.findById(userId).then((user) => {
        console.log(user.savedRecipes);
        res.status(200).json({
            savedRecipes: user.savedRecipes,
        });
    });
};


export const saveRecipe = (req, res) => {
    const userId = req.params.id;
    try {
        console.log(userId)
    } catch (error) {
        console.log(error)
    
    };
}

 const addListItem = async (req, res) => {
    const { userId, itemName } = req.body;

    try {
        // Find the user by their ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Add the grocery item to the user's list
        user.groceryList.push({ name: itemName, checked: false });

        // Save the updated user document
        await user.save();

        res.status(201).json({ message: "Grocery item added successfully" });
    } catch (error) {
        console.log(error);
    }
}


export async function editListItem(req, res) {
    try {
        const { id } = req.params;

        const groceryItem = await User.findById(id, "groceryItems");
        console.log(groceryItem);
        if (!groceryItem) {
            return res.status(404).json({ message: "Grocery item not found" });
        }

        // Save the updated item
        await groceryItem.save();
        console.log(groceryItem.checked);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteListItem(req, res) {
    let id = req.params.id || "";
    try {
        await User.findByIdAndDelete(id, "groceryItems");
    } catch (error) {
        console.log(error);
    }
}
