import { authUser, registerUser } from "../controllers/userController.js";

import express from "express";
const router = express.Router()

router.post('/', registerUser)

router.post('/login', authUser)

export default router