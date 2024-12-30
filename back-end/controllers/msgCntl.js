import conversation from "../models/conversation.js"


export const sendMessage= async (req,res)=>{
    try{
const {id:recieverId}=req.params
const {message}=rq.body
const senderId=req.user._id
let conversation= await conversation.findOne({
    participants : { $all : [senderId , recieverId ] } 

})
  if(!conversation){
   conversation=  await conversation.create({
    participants:[senderId,recieverId],
    
   })
   
  }
  const newMessage={
    senderId,
    recieverId,
    message
  }
if(newMessage){
    conversation.message.push(newMessage._id)
}
  res.status(201).json("message sent successfully",newMessage)
    }
    catch(error){
      return res.status(500).json("unexpected error occured on server")
    }

}