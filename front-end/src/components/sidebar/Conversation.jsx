import React from 'react'
import Conversation2 from './Conversation2'
import useGetConversation from '../../Hooks/useGetConversation'
function Conversation() {
    const {loading,conversation}=useGetConversation()
   console.log("conver",conversation)
  return (
    <>
    <div className='py-2 flex flex-col over-flow-auto'>
        <Conversation2/>
        <Conversation2/>
        <Conversation2/>
        <Conversation2/>
    </div>
    </>
  )
}

export default Conversation