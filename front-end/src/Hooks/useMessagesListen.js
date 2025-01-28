import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"


const useMessagesListen = () => {
  const {socket} =useSocketContext()
  const { messages,setMessages}=useConversation()

  useEffect(()=>{
   socket?.on("newMessage",(newMessage)=>{ 
    //  setMessages([...messages,newMessage])
    setMessages((prevMessages) => [...prevMessages, newMessage]);

   })
   return ()=>socket?.off("newMessage")
  },[socket,setMessages,messages])
}

export default useMessagesListen