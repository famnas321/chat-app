
import { useEffect, useState } from "react"
import toast from "react-hot-toast"



const useGetConversation=()=>{
    const [loading,setLoading]=useState(false)
    const [conversation,setConversation]=useState([])

   useEffect(()=>{
    const getConversation= async ()=>{
        setLoading(true)
         
      
     try{

         const response =  await fetch("http://localhost:5000/api/users/", {
            method: "GET",
            
              credentials: 'include'
        });
            if(!response.ok){
              throw new Error(`HTTP error! staus:${response.status}`)
               
            }
           
        
        const data= await  response.json()
        // console.log(data)

        
        if(data.error){
            throw new Error(data.error)
        }
        setConversation(data)
     }catch(error){
     toast.error(error.message)
     }finally{
        setLoading(false )
     }
    }
    getConversation()
   },[])
   return {loading,conversation}
}
export default useGetConversation