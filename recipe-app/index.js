console.log('Hello world!')

import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    response.json({message: 'Backend API'})
})

app.listen(port, () => {
    console.log(`App is running on ${port}`)
})