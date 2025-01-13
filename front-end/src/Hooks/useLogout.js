

import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const { setAuthUser } = useAuthContext();

  const logout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("authToken");
    
    setAuthUser(null);
  };

  return { logout };    
};












// import { useAuthContext } from "../context/AuthContext"

// const {setAuthUser}=useAuthContext()
// export const useLogout=()=>{
//     localStorage.removeItem("chat-user")
//     setAuthUser(null)

// }
