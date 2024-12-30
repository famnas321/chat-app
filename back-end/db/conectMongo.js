import mongoose from "mongoose"
const conectMongo= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("mongoDB connected")
    }
    catch (error){
     console.log("error occured when connecting",error);
     
    }
}
export default conectMongo