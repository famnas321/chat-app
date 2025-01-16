import React from 'react'
import Conversation2 from './Conversation2'
import useGetConversation from '../../Hooks/useGetConversation'
import { getRandomEmoji } from '../../utiles/emogi'
function Conversation() {
    const {loading,conversation}=useGetConversation()
   console.log("conver",conversation)
  return (
    <>
    <div className='py-2 flex flex-col overflow-auto h-50'>

    {conversation.map((conversation,Idx)=>(
      <Conversation2  
      key={conversation._id}
      conversation ={conversation}
      emogi={getRandomEmoji}
      lastIdx={Idx === conversation.length-1 }/>
    ))}

    {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    
        {/* <Conversation2/>
        <Conversation2/>
        <Conversation2/>
        <Conversation2/> */}
    </div>
    </>
  )
}

export default Conversation