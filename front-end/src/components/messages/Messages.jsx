import React from 'react'
import MessageContainer from './MessageContainer'
import useGetMessages from '../../Hooks/useGetMessages'
import Skeleton from '../Skeleton'
function Messages() {
  const {messages,loading}=useGetMessages()
  console.log("messages is :",messages);
  
  return (
    <>
    <div className='px-4 flex-1 h-[500px] '>
      {loading && [...Array(3)].map((_, idx) => <Skeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center text-gray-400'>Send a message to start the conversation</p>)}




    </div>
    </>
  )
}

export default Messages