import React, { useEffect } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import Header from '../../components/messages/Header'
import { useNavigate } from 'react-router-dom'

function Home() {

  

  return (
    <div className=' bg-red-500 justify-center flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  '>
      
        <SideBar/>
        <Header/>
    </div>
  )
}

export default Home