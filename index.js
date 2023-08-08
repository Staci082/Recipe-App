
// GETTING MODULES

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()


// PARSING JSON DATA

app.use(express.json())


// MAKING MONGO.DB CONNECTION

mongoose.connect(process.env.DB_URL)
.then(data => {
    console.log('Database connected!')
})
.catch(err => {
    console.log('Database error: ', err)
})


// CREATING SCHEMA FOR COLLECTION

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    category: {
        type: String
    },
    prepTime: {
        type: String
    },
    ingredients: {
        type: Array
    },
    directions: {
        type: Array
    }
})


// COMPILE SCHEMA TO MODEL

const Recipe = mongoose.model('Recipe', recipeSchema)


// GET DATA REQUEST

app.get('/', (req, res) => {
    res.json({
        msg:'ok'
    })
}) 


// POST DATA REQUEST

app.post('/', (req, res) => {
    const recipeData = req.body
    const newRecipe = new Recipe(recipeData)

// SAVE NEW DATA IN DATABASE
    newRecipe.save()
    .then(result => {
        res.status(200).json(recipeData)
    })
    .catch(err => {
        res.json({
            status: 'error', 
            error: err
        })
    })
})



// CONNECTING TO SERVER

app.listen(3000, () => {
    console.log('App is running, woohoo!')
})