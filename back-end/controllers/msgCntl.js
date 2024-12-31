import Conversation from "../models/conversation.js"
import Message from "../models/messages.js"

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
    participants: [senderId, recieverId],
   
  });
}

  const newMessage= new Message({
    senderId,
    recieverId,
    message
  })
  
if(newMessage){
    conversation.messages.push(newMessage._id)
    await newMessage.save()
    await conversation.save()
}
  res.status(201).json({"message sent successfully":newMessage})
    }
    catch(error){
      console.error("Error in sendMessage:", error);

      return res.status(500).json("unexpected error occured on server while creating conversation")
    }

}