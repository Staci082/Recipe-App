const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
        console.log("Database connected!");
    })
    .catch((err) => {
        console.log("Database error: ", err);
    });

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
    },
    ingredients: {
        type: Array,
    },
    instructions: {
        type: String,
    },
});

// COMPILE SCHEMA TO MODEL

const Recipe = mongoose.model("Recipe", recipeSchema);

app.use(express.json());

app.get("/find", (req, res) => {
    const { q } = req.query;
    Recipe.find({"name":{ "$regex": q, "$options": "i" }})
    .then(result=>{
        res.json({
            recipes:result
        })
    })
    .catch(err=>{
        res.json({
            error:err
        })
    })
});

app.listen(3000, () => {
    console.log("app is running...");
});
