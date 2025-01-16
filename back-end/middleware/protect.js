import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protectRouts =async (req,res,next)=>{
  try{
    const token= req.cookies.jwt || req.headers.authorization?.split('')[1]
    // console.log(token)
        if(!token){
        return res.status(401).json({error:"Un-authorized,token is not found"})
    }
    const decoded= jwt.verify(token,process.env.SECRET_KEY)
    if(!decoded){
        return res.status(401).json({error:"Token is invalid"})
    }
    const user = await User.findById(decoded.userId).select("-password")
    if(!user){
        return res.status(404).json({error:"User not found"})
    }
   req.user=user
  //  console.log(req.user)
   next()

  }catch(error){
    console.log("Error while protecting Routes",error.message);
    
     res.status(500).json({error:" internal server error"})
  }
}
export default protectRouts