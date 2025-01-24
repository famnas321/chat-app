import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
function MessageContainer({message}) {
 console.log(message)
 console.log(message.message)
   const{authUser} =useAuthContext() 
   const {selectedConversation}= useConversation()

   const fromMe = message.senderId === authUser._id;
  //  console.log(message.senderId)
   console.log(authUser._id)
  const chatClassName = fromMe ? 'chat-start' : 'chat-end';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColour = fromMe ? 'bg-blue-500' : 'bg-gray-300'; // For different colors

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColour}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{message.time}</div>
    </div>
  );
};

export default MessageContainer