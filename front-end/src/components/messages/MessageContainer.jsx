import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
function MessageContainer({message}) {
 console.log(message)
 console.log(message.message)
   const{authUser} =useAuthContext() 
   const {selectedConversation}= useConversation()

   const fromMe= message.senderId === authUser._id
   const  chatClassName= fromMe? 'chat-start': 'chat-end'
   const profilePic= fromMe? authUser.profilePic :selectedConversation?.profilePic
   const bubbleBgColour=fromMe? 'bg-blue-500' :""
  //  console.log(message.message);
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="" />
            </div>
        </div>
        
        
        <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColour}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center '>12:42</div>
    </div>
  )
}

export default MessageContainer