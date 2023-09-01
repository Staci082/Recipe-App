console.log('Hello world!')

import cors from 'cors'
import express from 'express'
import ConnectDB from './src/Server/src/config/db.js'

import {userRouter} from './src/Server/src/controllers/usersController.js'

const app = express()
// const port = 5173
const port = process.env.PORT || 5712

ConnectDB()

app.use(express.json())
app.use(cors())

app.use("/auth", userRouter)

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({message: 'Backend API'})
})

app.listen(port, () => {
    console.log(`App is running on ${port}`)
})