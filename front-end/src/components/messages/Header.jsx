
import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import {TiMessages} from "react-icons/ti"
import useConversation from '../../zustand/useConversation';
function Header() {
  const {selectedConversation,setSelectedConversation}=useConversation()

  useEffect(()=>{
    return ()=>setSelectedConversation(null)
  },[setSelectedConversation]) 
  // const noChatSelected=false
  return (
    <div className="min-w-[450px] flex flex-col bg-slate-500 h-full bg-slate-900 mt-5">
      {!selectedConversation ? (<NoChatSelected/>):
      (
      <>
      <div className="px-4 py-2 mb-2 bg-white">
        <span className="label-text">To:</span>{' '}
        <span className="text-slate-900  font-bold">{selectedConversation.fullName}</span>
      </div>
      
     
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>

      
      <div className="mt-2">
        <MessageInput />
        
      </div>
      </>
      )}
      
    </div>
 
  );
}

export default Header;

const NoChatSelected=()=>{
  return(
    <div className='flex items-center justify-center w-full   h-full'  >
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>wecome 🤷‍♂️ john Doe </p>
        <p>Select to  Start messaging </p>
        <TiMessages className=" text-3xl md:text-6xl text-center"/>

      </div>
       </div>
       
  )
}

































// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'

// function Header() {
//   return (
//     <div className='md-min -w-[450] flex flex-col'>
//     <div className='bg-slate-500 px-4 py-2 mb-2'>
//         <span className='label-text'>To:</span> <span className='text-gray-900 font-bold '>John doe</span>
       

//         <Messages/>
//         <MessageInput/>
        

//     </div>
//     </div>
//   )
// }

// export default Header 