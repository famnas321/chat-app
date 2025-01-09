
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoters from "./routes/auth.rout.js"
import messageRoutes from "./routes/message.rout.js"
import userRoutess from "./routes/userRoutes.js"
import conectMongo from "./db/conectMongo.js"

dotenv.config()
// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })
const app=express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoters)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutess)

const PORT=process.env.PORT||8000
app.listen(PORT ,()=> {
    conectMongo()
 console.log(`server is running on ${PORT}`);
 
})