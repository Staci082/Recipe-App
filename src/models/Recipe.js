
import mongoose from "mongoose";

// CREATE DATA SCHEMA
// const Schema = mongoose.Schema
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    method: {
        type: Array,
        required: true,
    },
    userOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
});

export const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;







//          🌸＞　　 フ
// 　　　　　| 　-  - |
// 　 　　　／` ミ＿xノ
// 　　 　 /　　　  |
// 　　 　/　ヽ　　 ﾉ
// 　 　 │　 |　|　|
// 　／￣|　  |　|　|
// 　| (￣ヽ＿_ヽ_)__)
// 　＼二つ