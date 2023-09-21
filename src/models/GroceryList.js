import mongoose from "mongoose"

const GroceryListSchema = new mongoose.Schema({
    item: String,
    checked:{ 
        type: Boolean,
        default: false
    }
})

const GroceryList = mongoose.model("grocerylist", GroceryListSchema)

export default GroceryList