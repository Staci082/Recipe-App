// GETTING MODULES
require("dotenv").config()

const express = require("express")
const expressLayout = require("express-ejs-layouts")
const methodOverride = require("method-override")
const connectDB = require('./server/config/db')

const app = express()
const port = process.env.PORT || 3000


// CONNET TO DATABASE
connectDB()


// PARSING DATA
app.use(express.urlencoded({ extended: true }))  // 'true' allows rich objects and arrays to be encoded as well
app.use(express.json())
app.use(methodOverride('_method'))  // allows use of http methods where client usually wouldn't let you


// STATIC FILES
app.use(express.static('public'))  // let's us access this folder through http 


// TEMPLATE ENGINE 
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')


// ROUTES
app.use('/', require('./server/routes/recipe'))


// HANDLE 404 ERROR
app.get('/', (req, res) => {
    res.status(404).render('404')
})


// CONNECTING TO SERVER
app.listen(port, () => {
    console.log("App is running, woohoo!");
});













// // GET ALL DATA REQUEST

// app.get("/", (req, res) => {
//     Recipe.find({})
//         .then((allRecipes) => {
//             res.json({
//                 msg: "success",
//                 todos: allRecipes,
//             });
//         })
//         .catch((err) => {
//             res.json({
//                 msg: "failure",
//                 error: err,
//             });
//         });
// });

// // POST DATA REQUEST

// app.post("/", (req, res) => {
//     const recipeData = req.body;
//     const newRecipe = new Recipe(recipeData);

//     // SAVE NEW DATA IN DATABASE
//     newRecipe
//         .save()
//         .then(() => {
//             res.status(200).json(recipeData);
//         })
//         .catch((err) => {
//             res.json({
//                 status: "error",
//                 error: err,
//             });
//         });
// });


// // DELETE DATA BY ID

// app.delete("/:id", (req, res) => {
//     const { id } = req.params;
//     Recipe.findByIdAndDelete(id)
//         .then(() => {
//             res.json({
//                 msg: `${id} is deleted successfully`,
//             });
//         })
//         .catch((err) => {
//             res.json({
//                 msg: "failure to delete",
//                 error: err,
//             });
//         });
// });

// // FINDING DATA IN QUERY

// // http://localhost:3000/find?q=Banana

// app.get("/find", (req, res) => {
//     const { q } = req.query;
//     Recipe.find({"name":{ "$regex": q, "$options": "i" }})
//     .then(result=>{
//         res.json({
//             recipes:result
//         })
//     })
//     .catch(err=>{
//         res.json({
//             error:err
//         })
//     })
// });



