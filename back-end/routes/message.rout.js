import express from "express"
import protectRout from "../middleware/protect.js"
const  router=express.Router()
import { sendMessage,recieveMessage } from "../controllers/msgCntl.js"
import protectRouts from "../middleware/protect.js"
router.post("/send/:id",protectRouts,sendMessage)
router.get("/get/:id",protectRout,recieveMessage)

export default router