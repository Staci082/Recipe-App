const mongoose = require('mongoose')
mongoose.set('strictQuery', false)   // all the fields will be saved in the database, even if some of them are not strictly specified in the schema model.


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL)
        console.log(`Database connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

// EXPORT 

module.exports = connectDB