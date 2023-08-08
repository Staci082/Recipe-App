
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
        type: Number
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



// CONNECTING TO SERVER

app.listen(3000, () => {
    console.log('App is running, woohoo!')
})