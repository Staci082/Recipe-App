console.log('Hello world!')

import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import ConnectDB from './src/Server/src/config/db.js'


const app = express()
// const port = 5173
const port = process.env.PORT || 5713

ConnectDB()

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({message: 'Backend API'})
})

app.listen(port, () => {
    console.log(`App is running on ${port}`)
})