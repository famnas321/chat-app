
import { useEffect, useState } from "react"
import toast from "react-hot-toast"



const useGetConversation=()=>{
    const [loading,setLoading]=useState(false)
    const [conversation,setConversation]=useState([])

   useEffect(()=>{
    const getConversation= async ()=>{
        setLoading(true)
         
        // const token=localStorage.getItem("token")
    //    const credentials=localStorage.getItem("chat-user")
     try{

         const response = fetch("http://localhost:5000/api/users/", {
            method: "GET",
            // headers: {
            //     "Content-Type": "application/json",
            //   },
              credentials: 'include'
        });
            if(!response.ok){
              throw new Error(`HTTP error! staus:${response.status}`)
               
            }
           
        
        const data= await  response.json()
        console.log(response.data)

        
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