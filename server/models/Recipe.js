
//          🌸＞　　 フ
// 　　　　　| 　-  - |
// 　 　　　／` ミ＿xノ
// 　　 　 /　　　  |
// 　　 　/　ヽ　　 ﾉ
// 　 　 │　 |　|　|
// 　／￣|　  |　|　|
// 　| (￣ヽ＿_ヽ_)__)
// 　＼二つ


const mongoose = require('mongoose')


// CREATE DATA SCHEMA

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

const Recipe = mongoose.model("Recipe", recipeSchema) // value + function

