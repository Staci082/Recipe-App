import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

const UserModel = mongoose.model("users", UserSchema, "users")

export default UserModel