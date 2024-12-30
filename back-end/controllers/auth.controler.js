import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateJwtToken from "../utiles/jwtToken.js"
export const signUp=async (req,res)=>{
    try{
      
        const {fullName,userName,password,confirmPassword,gender}= req.body
        
        console.log(userName)
        console.log(password)
        if(password!== confirmPassword){
            
           return  res.status(400).json({error:"password doesn't match"})
        }
        const user= await User.findOne({userName})
        if(user){
           return  res.status(400).json({error:"user name exist "})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)

        const boyProfilePic= `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic= `https://avatar.iran.liara.run/public/girl?username=${userName}`
        const newUser= new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilePic: gender === "male"? boyProfilePic:girlProfilePic
        
        })  
        
           
        
        await newUser.save()
       
        return res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
        })
    
    


    }catch(error){
        return res.status(500).json({error:"unexpected error occured on server"})
    }
}
export const login= async (req,res)=>{
    try{
   const {userName,password}=req.body
   const user=await User.findOne({userName})
   const isPasswordCorrect= await bcrypt.compare(password,user?.password || "")
   if(!user || !isPasswordCorrect){
    return res.status(400).json("invalid user name or password")
   }

   generateJwtToken(user._id,res)
//    console.log("token created successfulluy")
   res.status(200).json(
    {
        _id:user._id,
        userName:user.userName,
        password:user.password
    }
   )
    }
    catch(error){
      console.log("Error in login",error)
      res.status(500).json("Unexpected error occured on server")

      
    }

}
export const logOut=(req,res)=>{
   try{ 
    res.cookie("jwt","", {
        maxAge:0,
    })
    res.status(200).json("logged out successfully")
   }catch(error){
     console.log("Error in logout",error)
     res.status(500).json("internal server error")
   }
} 