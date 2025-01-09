import { useState } from "react";
import toast from "react-hot-toast";
import {useAuthContext } from "../context/AuthContext";

const useSignup=()=>{
    const [loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext()
    const signup= async ({fullName,userName,password,confirmPassword,gender})=>{
       const success=handleInputErrors({fullName,userName,password,confirmPassword,gender})
       if(!success) return
       setLoading(true)
       try{
          const response=await fetch("http://localhost:5000/api/auth/signUp",
            {
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
            }
          )
          const data = await response.json()    
          console.log(data);
          toast.success('Sign Up Successfull !')
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
        setLoading(false)
       }
      
    }
    return {loading,signup}
}
export default useSignup


function  handleInputErrors({fullName,userName,password,confirmPassword,gender}){
    if(!fullName|| !userName || !password || !confirmPassword || !gender){
        toast.error("Please fill all fields")
        return false
    }
    if(password !== confirmPassword){
        toast.error("Password didn't match")
        return false
    }
    if(password.length<6){
        toast.error("Password must be atleast 6 characters")
        return false
    }
    return true
}