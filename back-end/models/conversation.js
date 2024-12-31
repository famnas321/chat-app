import mongoose, { mongo } from "mongoose";
// import User from "./userModel.js";
// import Message from "./messages.js";
const conversationSchema= new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[],
    }]

},{timestamps:true})
const conversation =mongoose.model("conversation",conversationSchema)
export default conversation