import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const ConnectDB = async () => {
    try {
        const url = process.env.VITE_DB_URL; 
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
