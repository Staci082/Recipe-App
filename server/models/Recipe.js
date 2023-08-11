
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
const Schema = mongoose.Schema
const recipeSchema = new Schema({
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

module.exports = mongoose.model("Recipe", recipeSchema) // value + function

