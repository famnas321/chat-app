import { useState, useEffect, createContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000");
            setSocket(socket);
            
            // Cleanup: close socket when component unmounts
            return () => socket.close();
        } else {
            // Close the socket if authUser is null
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]); // Include authUser as a dependency to handle changes

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};





















// import { useState,useEffect } from "react";
// import { createContext } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client"

// export const SocketContext =createContext()

// export const SocketContextProvider =({children})=>{
//     const [socket,setSocket]=useState(null)
//     const [onlineUsers,setOnlineUsers]=useState([])
//     const {authUser}=useAuthContext()

//     useEffect(()=>{
//        if(authUser){
//         const socket= io("http://localhost:5000")
//         setSocket(socket)
//         return ()=>socket.close()
//        }
//        else{
//         if(socket){
//             socket.close()
//             setSocket(null)
//         }
//        }
//     },[])

//     return
//         <SocketContext.Provider value={{socket,onlineUsers}}>
//             {children}
//         </SocketContext.Provider>
    

// }