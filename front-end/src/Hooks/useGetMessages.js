import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import { toast } from 'react-toastify'
import conversation from '../../../back-end/models/conversation'
import { get } from 'mongoose'

function useGetMessages() {
    const [loading,setLoading]=useState()
 const {messages,setMessages,selectedConversation}=useConversation()
//  console.log(selectedConversation)

  useEffect(()=>{
    const getMessages= async ()=>{
        setLoading(true)
        try{
           const res= await fetch(`/api/messages/get/:${selectedConversation._id}`)
           const data = await res.json()
           console.log(res)
           if(data.error) throw new Error(data.error)
            setMessages(data)
        }catch(error){
         toast.error(error.message)
         console.log(error.message);
         
         
        }
        finally{
            setLoading(false)
        }
    }
    if(!selectedConversation ?. _id) getMessages()
  },[selectedConversation?._id,setMessages])
  return {messages,loading}
}

export default useGetMessages