import React, { useState } from 'react'
import CheckBox from './CheckBox'
import { Link } from 'react-router-dom'
function SignUP() {
  const [inputs,setInputs] =useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""

  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log( inputs )
  }
  return (
    <div>

<div className="w-full p-6 rounded-lg shadow-md bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
  <h1 className="text-center font-semibold text-3xl">Chat App</h1>
</div>
<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a
      href="#"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      Sign Up
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
          
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the Full Name"
              value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
              required
            />
          </div>
         
          <div>
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              User Name
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john_doe123"
              value={inputs.userName}
              onChange={(e)=>setInputs({...inputs,userName:e.target.value})}
              required
            />
          </div>
         
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs , password:e.target.value})}
              required
            />
          </div>
         
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
              required
            />
          </div>
          <CheckBox/>
          
          <button
            type="submit"
            className="w-full text-white bg-slate-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Sign Up
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:text-blue-400 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default SignUP