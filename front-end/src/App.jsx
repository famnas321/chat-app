import { useState } from 'react'
import Login from './pages/login/Login'
import SignUp from "./pages/SignUp/SignUP"
import "./index.css"
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
     
    {/* <Login/> */}
    {/* <SignUp/> */}
   <Home/>
      </div>
      
    </>
  )
}

export default App
