console.log("Hello world!");

import express from "express";
import cors from "cors";

import ConnectDB from "./config/db.js";
import { userRouter } from "./routes/user.js";
import { recipeRouter } from "./routes/recipe.js";

const app = express();
const port = 5712;

ConnectDB();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/", recipeRouter);


app.listen(port, () => {
    console.log(`App is running on ${port}`);
});