import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../Hooks/useGetConversation';
import toast from 'react-hot-toast';
import { useState } from 'react';

function SearchInput() {
  const [search,setSearch]=useState("")
    const {setSelectedConversation}=useConversation()
    const {conversation} =useGetConversation()

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(!search) return
      if(search.length<3){
        return toast.error("Search input must be  atleast 3 characters")
      }
      const conversations= conversation.find((c)=>c.userName.toLowerCase().includes(search.toLowerCase()))
      console.log(conversations)
      if(conversations){
        setSelectedConversation(conversations)
        setSearch('')
      }
      else return toast.error('No such user found')

      

    }
  return (
    <div>
        <form action="" className='flex items-center gap-2 mt-5'
        onSubmit={handleSubmit}>

            <input type="text" placeholder='Search' className='input input-bordered rounded-full'
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}/>
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp />
            </button>
        </form>
    </div>
  )
}

export default SearchInput