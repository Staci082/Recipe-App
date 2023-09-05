import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

export async function ConnectDB(){

    const url = "mongodb+srv://staci082:WoSDvyDWd8hiPduL@fiestaflavors.ok0fz92.mongodb.net/?retryWrites=true&w=majority"; 
    try {
        if (!url) {
            throw new Error("DB URL not defined");
        }

        await mongoose.connect(url);
        console.log(`Database connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(error);
    }
};

export default ConnectDB;
