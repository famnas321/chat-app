import { useState } from 'react'
import Login from './pages/login/Login'
import SignUp from "./pages/SignUp/SignUP"
import "./index.css"
import Home from './pages/home/Home'
import {Route,Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
     <Routes>

     <Route path ="/" element={<Home/>}/> 
     <Route path ="signUp" element={<SignUp/>}/> 
     <Route path ="/login" element={<Login/>}/> 

     </Routes>
   
      </div>
      
    </>
  )
}

export default App
