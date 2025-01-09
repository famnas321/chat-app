import { useState } from 'react'
import Login from './pages/login/Login'
import SignUp from "./pages/SignUp/SignUP"
import "./index.css"
import Home from './pages/home/Home'
import {Navigate, Route,Routes} from "react-router-dom"
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {authUser}=useAuthContext()

  return (
    <><div>
     <Routes>

     <Route path ="/" element={<Home/>}/> 
     <Route path ="/signUp" element={authUser ? <Navigate to="/"/> : <SignUp/>} />
     <Route path ="/login" element={<Login/>}/> 
     
     </Routes>
     <Toaster/>
   
      </div>
      
    </>
  )
}

export default App
