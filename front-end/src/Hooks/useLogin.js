import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"


const userLogin=()=>{
    const [loading,setLoding]=useState(false)
    const {setAuthUser}=useAuthContext()

 const login= async (userName,password)=>{

    const success=handleInputErrors({userName,password})
       if(!success) return
    setLoding(true)
   try{

    const response= await fetch("http://localhost:5000/api/auth/login",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({userName,password})
        }
       )
      if(response.status===400){
        toast.error("invalid User Name or Password")
        return
      }
     const data=  await response.json()
   
     
     if(data.error){
        throw new error
     }
     localStorage.setItem("chat-user",JSON.stringify(data))
    setAuthUser(data)
   }
   catch(error){
    toast.error(error.message)
   } 
   finally{
    setLoding(false)
   }

   
 }
 return {login,loading}
}
export default userLogin


function  handleInputErrors({userName,password}){
    if(!userName || !password){
        toast.error("Please fill all fields")
        return false
    }
    
    
    if(password.length<6){
        toast.error("Password must be atleast 6 characters")
        return false
    }
    return true
}