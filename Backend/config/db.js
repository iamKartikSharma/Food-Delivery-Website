import mongoose from "mongoose"

const MONGO_URL = 'mongodb+srv://linkinpardume07:uLaR2P2udFEWDua2@cluster0.ktabq.mongodb.net/'
const DB_NAME = 'YummyBites'

export const connectDB = async()=>{
    await mongoose.connect(MONGO_URL+DB_NAME)
    .then(()=>{
        console.log('DB connected');
    })
}