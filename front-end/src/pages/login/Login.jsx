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
		<div className='flex items-center justify-center min-h-screen bg-gray-50'>
			<div className='w-full max-w-md p-10 bg-white rounded-lg shadow-xl border border-gray-100'>
				<div className='text-center'>
					<h1 className='text-3xl font-bold text-gray-900 mb-2'>
						Welcome Back
					</h1>
					<p className='text-sm text-gray-500 mb-8'>
						Login to your account to continue
					</p>
				</div>

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Username
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Password
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className='text-sm text-right'>
						<Link
							to='/signup'
							className='text-blue-600 hover:text-blue-700 hover:underline'
						>
							{"Don't"} have an account? Sign up
						</Link>
					</div>

					<div>
						<button
							className='w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
							disabled={loading}
						>
							{loading ? (
								<span className='flex items-center justify-center'>
									<svg
										className='w-5 h-5 mr-3 -ml-1 text-white animate-spin'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										></path>
									</svg>
									Logging in...
								</span>
							) : (
								"Login"
							)}
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
