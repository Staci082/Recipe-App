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
app.use(express.static(__dirname + '/public' ));  // let's us access this folder through http 

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

