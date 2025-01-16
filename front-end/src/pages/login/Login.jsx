import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;




























// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {


//   // const navigate = useNavigate()
  
//     // localStorage.getItem('token')
  
//     // useEffect(()=>{
//     //   if(!token){
//     //     navigate('/login')
//     //   }
      
//     // },[])

//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//     //   const response = await axios.post(
//     //     'http://localhost:5000/api/auth/login',
//     //     { userName, password },
//     //     { withCredentials: true } // Ensure cookie is sent with the request
//     //   );

//     //   const { token } = response.data;
//     //   if (token) {
//     //     localStorage.setItem('token', token);
//     //     navigate('/'); // Redirect to the home page or the dashboard
//     //   }
//      } catch (err) {
//       console.error('Something went wrong', err);
//     }
//   };

//   return (
//     <>
//       <div className='w-full p-6 rounded-lg shadow-md bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-center font-semibold text-3xl'>Chat App</h1>
//       </div>
//       <section className='bg-gray-50 dark:bg-gray-900'>
//         <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
//           <a
//             href='#'
//             className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
//             Login
//           </a>
//           <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
//             <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
//               <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
//                 Sign in to your account
//               </h1>
//               <form className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
//                 <div>
//                   <label
//                     htmlFor='email'
//                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
//                     Your email
//                   </label>
//                   <input
//                     type='text'
//                     className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//                     placeholder='name@company.com'
//                     value={userName}
//                     onChange={(e) => setUserName(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor='password'
//                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
//                     Password
//                   </label>
//                   <input
//                     type='password'
//                     id='password'
//                     className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//                     placeholder='••••••••'
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <button
//                   type='submit'
//                   className='w-full text-white bg-slate-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
//                   Sign in
//                 </button>
//                 <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
//                   Don’t have an account yet?{' '}
//                   <Link
//                     to='/signUp'
//                     className='font-medium text-primary-600 hover:text-blue-400 hover:underline dark:text-primary-500 dark:hover:text-primary-400'>
//                     Sign up
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Login;
