import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
    <div>
        <form action="" className='flex items-center gap-2 mt-5  '>

            <input type="text" placeholder='Search' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp />
            </button>
        </form>
    </div>
  )
}

export default SearchInput