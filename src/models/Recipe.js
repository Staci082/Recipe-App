
import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    method: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: false
    },
    servingSize: {
        type: String,
        required: false
    },
    prepTime: {
        type: String,
        required: false
    },
    cookTime: {
        type: String,
        required: false
    },
    userOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
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
