import { useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios';
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (userName, password) => {
		const success = handleInputErrors(userName, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await axios.post('/api/auth/login', {
				userName,
				password,
			  });

			// const data = await res.json();
			
			
			if (res.error) {
				 throw new Error(res.error);
				
			}
else{
	 const data=res.data
	console.log(res.data)
			localStorage.setItem("chat-user", JSON.stringify(res.data));
			setAuthUser(res.data);
}
		} catch (error) {
			// console.log(error);
			
			toast.error(error.response.data.error);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}



































// import { useState } from "react"
// import toast from "react-hot-toast"
// import { useAuthContext } from "../context/AuthContext"
// import axios from "axios"


// const userLogin = () => {
//     const [loading, setLoading] = useState(false);
//     const { setAuthUser } = useAuthContext();

//     const login = async (userName, password) => {
//         const success = handleInputErrors({ userName, password });
//         if (!success) return;

//         setLoading(true);
//         try {
//             const  data  = await axios.post(
//                 "http://localhost:5000/api/auth/login",
//                 { userName, password }
//             );

//             if (data.error) {d
//                 throw new Error(data.error);
//             }

//             // Store user and token in localStorage
//             localStorage.setItem("chat-user", (data));
//             localStorage.setItem("token",(data.token));

//             // Update auth context
//             setAuthUser(data);
//         } catch (error) {
//             // Handle error message
//             const errorMessage =
//                 error.response?.data?.message || "An error occurred during login";
//             toast.error(errorMessage);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return { login, loading };
// };

// export default userLogin


// function  handleInputErrors({userName,password}){
//     if(!userName || !password){
//         toast.error("Please fill all fields")
//         return false
//     }
    
    
//     if(password.length<6){
//         toast.error("Password must be atleast 6 characters")
//         return false
//     }
//     return true
// }