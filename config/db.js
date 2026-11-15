import mongoose from 'mongoose';


async function connectDB(){
    try{
        const res = await mongoose.connect(process.env.MONGO_LOCAL_URL);
        console.log("DB conneected...");
    }
    catch(err){
        console.log("error", err.message);
    }
}

export default connectDB;