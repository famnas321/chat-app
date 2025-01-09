import { useState } from 'react'
import Login from './pages/login/Login'
import SignUp from "./pages/SignUp/SignUP"
import "./index.css"
import Home from './pages/home/Home'
import {Route,Routes} from "react-router-dom"
import {Toaster} from 'react-hot-toast'

function App() {
  

  return (
    <><div>
     <Routes>

     <Route path ="/" element={<Home/>}/> 
     <Route path ="signUp" element={<SignUp/>}/> 
     <Route path ="/login" element={<Login/>}/> 
     
     </Routes>
     <Toaster/>
   
      </div>
      
    </>
  )
}

export default App
