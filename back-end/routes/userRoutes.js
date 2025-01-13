import express from "express"
import protectRouts from "../middleware/protect.js"
import { getUsers } from "../controllers/userController.js"


const router= express.Router()

router.get("/",protectRouts,getUsers)
export default router