import React from 'react'
import Messages from './Messages'

function Header() {
  return (
    <div className='md-min -w-[450] flex flex-col'>
    <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text'>To:</span> <span className='text-gray-900 font-bold '>John doe</span>
        <Messages/>
    </div>
    </div>
  )
}

export default Header 