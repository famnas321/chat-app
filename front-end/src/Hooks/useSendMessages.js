import { useState } from "react";
import useConversation from "../zustand/useConversation";
import conversation from "../../../back-end/models/conversation";

const useSendMessages =()=>{
const [loading,setLoading]=useState("")
const {messages,setMessages,selectedConversation} = useConversation()
 const sendMessages = async (message)=>{
    setLoading(true)
    try{
        const res= await fetch (`/api/messages/send:${conversation._id}`,{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({message})
        })
        const data=res.json()
        if (data.error) throw new Error(data.error)
       
            setMessages([...messages,data])

    }catch(error){
        toast.error(error.message)
    console.log(error.message);
    
    }
   
   
 }
 return {sendMessages,loading}
}
 export default useSendMessages