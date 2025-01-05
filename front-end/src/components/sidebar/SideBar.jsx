import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import Logout from './Logout'

function SideBar() {
  return (
    <>
    <div className=' h-full  border-r border-slate-500 p-4 flex flex-col bg-slate-950 mt-5 ' >
        <SearchInput/>
    <div className='divider px-3'></div>
    <Conversation/>
    <Logout/>
    </div>
    </>
  )
}

export default SideBar