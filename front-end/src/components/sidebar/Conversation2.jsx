import React from 'react'

function Conversation2() {
  return (
    <>
    <div className='flex gap-2 item-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
        <div className='w-12 rounded-full'>
       <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="user avatar" />
       </div>
       </div>
       <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between' >
            <p className='font-bold text-gray-200'>john doe</p>
            <span className='text-xl'>😎</span>

        </div>
       </div>
       <div className='divider my-0 py-0 h1-1'/>
    </div>
    </>
  )
}

export default Conversation2