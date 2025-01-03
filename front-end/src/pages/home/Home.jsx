import React from 'react'
import SideBar from '../../components/sidebar/SideBar'

function Home() {
  return (
    <div className=' justify-center flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  '>
        <SideBar/>
    </div>
  )
}

export default Home