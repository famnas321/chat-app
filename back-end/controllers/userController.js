// import express from 
import User from "../models/userModel.js"
export const getUsers= async (req,res)=>{
  try{
      const loggedUser=req.user._id
     

     const users= await User.find({_id:{$ne:loggedUser}}).select("-password")
     res.status(200).json(users)
  }catch(error){
    console.log("Error in getUsers",error.message)
    res.status(500).json(" yes here unexpected error occured on server")
  }
}