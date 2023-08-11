// GETTING MODULES

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

// PARSING JSON DATA

app.use(express.json());

// MAKING MONGO.DB CONNECTION

mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
        console.log("Database connected!");
    })
    .catch((err) => {
        console.log("Database error: ", err);
    });

// CREATING SCHEMA FOR COLLECTION

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

// GET ALL DATA REQUEST

app.get("/", (req, res) => {
    Recipe.find({})
        .then((allRecipes) => {
            res.json({
                msg: "success",
                todos: allRecipes,
            });
        })
        .catch((err) => {
            res.json({
                msg: "failure",
                error: err,
            });
        });
});

// POST DATA REQUEST

app.post("/", (req, res) => {
    const recipeData = req.body;
    const newRecipe = new Recipe(recipeData);

    // SAVE NEW DATA IN DATABASE
    newRecipe
        .save()
        .then(() => {
            res.status(200).json(recipeData);
        })
        .catch((err) => {
            res.json({
                status: "error",
                error: err,
            });
        });
});

// FIND DATA BY ID

// app.get("/:id", (req, res) => {
//     const { id } = req.params;
//     Recipe.findById(id).then((result) => {
//         res.json({
//             msg: "recipe found successfully",
//             recipe: result,
//         });
//     });
// });

// DELETE DATA BY ID

app.delete("/:id", (req, res) => {
    const { id } = req.params;
    Recipe.findByIdAndDelete(id)
        .then(() => {
            res.json({
                msg: `${id} is deleted successfully`,
            });
        })
        .catch((err) => {
            res.json({
                msg: "failure to delete",
                error: err,
            });
        });
});

// FINDING DATA IN QUERY

// http://localhost:3000/find?q=Banana

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

// CONNECTING TO SERVER

app.listen(3000, () => {
    console.log("App is running, woohoo!");
});

