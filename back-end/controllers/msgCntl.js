import Conversation from "../models/conversation.js"
import Message from "../models/messages.js"
import mongoose from "mongoose";

export const sendMessage= async (req,res)=>{
    try{
      const recieverId = req.params.id.replace(':', '');
const {message}=req.body
const senderId=req.user._id
console.log(message)
console.log(recieverId);
console.log(senderId);


let conversation= await Conversation.findOne({
    participants : { $all : [senderId , recieverId ] } 

})
if (!conversation) {
  conversation = await Conversation.create({
    participants: [ new mongoose.Types.ObjectId(senderId), new mongoose.Types.ObjectId(recieverId)],
   
  });
}

  const newMessage= new Message({
    senderId,
    recieverId,
    message
  })
  
if(newMessage){
    conversation.messages.push(newMessage._id)
    // await newMessage.save()
    // await conversation.save()
    Promise.all([newMessage.save(),conversation.save()])
} 
  res.status(201).send(newMessage)
    }
    catch(error){
      console.error("Error in sendMessage:", error);

      return res.status(500).json("unexpected error occured on server while creating conversation")
    }

}
export const recieveMessage= async (req,res)=>{
  try{
    console.log('dsoiflhdskhj',req.params);
    
    const {id:userToChatId}=req.params
    // if(!mongoose.Types.objectId.isValid(userToChatId)){
    //   return res.status(404).json("invalid id")
    // }
    const senderId=req.user._id
    const conversation= await Conversation.findOne({
      participants:{$all:[senderId,userToChatId]}
    }).populate("messages")
    console.log(conversation,'uiykgh')
    console.log(userToChatId)

    // if(!conversation){
    //    res.status(404).json("message not found")
    // }
    res.status(200).json(conversation.messages)
  
  }catch(error){
   console.log("Error in getMessageController",error.message)
   res.status(500).json("unexpected error occured on server")
  }
}