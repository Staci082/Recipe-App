import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        savedRecipes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "recipes",
            },
        ],
    },
    { collection: "data" }
);

export const User = mongoose.model("users", UserSchema, "users");

export default User;
