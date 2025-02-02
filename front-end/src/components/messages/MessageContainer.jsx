import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
function MessageContainer({message}) {

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

 console.log(message)
 console.log(message.message)
   const{authUser} =useAuthContext() 
   const {selectedConversation}= useConversation()
   
  const parsedUser= typeof authUser === "string" ? JSON.parse(authUser) : authUser;

   const fromMe = message.senderId === parsedUser._id;
    // console.log(authUser, "this is authUser")
  console.log(parsedUser);
  
  console.log(parsedUser._id)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? parsedUser.profilePic : selectedConversation?.profilePic;
  console.log(" the profile pic is ",parsedUser.profilePic)
  const bubbleBgColour = fromMe ? 'bg-blue-500' : 'bg-gray-300'; // For different colors

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColour} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatTime(message.createdAt)}</div>
    </div>
  );
};

export default MessageContainer