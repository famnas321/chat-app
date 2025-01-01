import express from "express"
import protectRout from "../middleware/protect.js"
const  router=express.Router()
import { sendMessage } from "../controllers/msgCntl.js"
import protectRouts from "../middleware/protect.js"
router.post("/send/:id",protectRout,sendMessage)
router.get("/get/:id",protectRout,recieveMessage)

export default router