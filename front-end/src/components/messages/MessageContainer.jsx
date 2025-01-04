import React from 'react'

function MessageContainer() {
  return (
    <div className='chat chat-end  '>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi what's up</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center '>12:42</div>
    </div>
  )
}

export default MessageContainer