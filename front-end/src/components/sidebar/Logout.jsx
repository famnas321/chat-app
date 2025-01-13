import React from 'react'
import {BiLogOut} from "react-icons/bi"
// import { useLogout } from '../../Hooks/useLogout'
import { useNavigate } from 'react-router-dom'
function Logout() {
  // const {logout}= useLogout()

  const navigate = useNavigate()
  const logout = ()=>{

    localStorage.removeItem("token")
    navigate('/login')

  }
  return (
    <div>
     <BiLogOut className="w-6 h-6 text-white cursor-pointer " 
     onClick={logout}/>
    </div>
  )
}

export default Logout