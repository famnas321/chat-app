import jwt from "jsonwebtoken"
const generateJwtToken = (userId,res)=>{
    try{
    const token =jwt.sign({userId},process.env.SECRET_KEY,{expiresIn:"30d"})
//     console.log(token)
//    console.log(process.env.NODE_ENV);
   

res.cookie("jwt",token,{
    maxAge:30*24*60*60*1000,
    httpOnly:true,
    sameSite:"Strict",
    secure:process.env.NODE_ENV !== "development"
})
 return token
}

catch(error){
  console.log(" error while generating token");
  
}
}
export default generateJwtToken