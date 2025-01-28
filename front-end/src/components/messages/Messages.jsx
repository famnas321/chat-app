import React, { useEffect, useRef } from 'react'
import MessageContainer from './MessageContainer'
import useGetMessages from '../../Hooks/useGetMessages'
import Skeleton from '../Skeleton'
import useMessagesListen from '../../Hooks/useMessagesListen'


function Messages() {
  const {messages,loading}=useGetMessages()
//   console.log("messages is :",messages);
    useMessagesListen()
  const lastMessage=useRef()
  useEffect(()=>{
    setTimeout(()=>{
		lastMessage.current?.scrollIntoView({bahavior:"smooth"})
	},100)
  },[messages])
  
  return (
    <>
    <div className='px-4 flex-1 overflow-auto'>
	{!loading &&
  Array.isArray(messages) &&
  messages.length > 0 &&
  messages.map((message) => (
    <div key={message._id} ref={lastMessage}>
      <MessageContainer message={message} />
    </div>
  ))}

			{loading && [...Array(3)].map((_, idx) => <Skeleton key={idx} />)}
			{!loading && messages.length < 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
    </>
  )
}

export default Messages