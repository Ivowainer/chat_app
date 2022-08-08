import { authUser, handlerUploadImg, registerUser } from "../controllers/userController.js";

import express from "express";
const router = express.Router()

router.post('/', registerUser)

router.post('/login', authUser)

/* router.post('/uploadimg/:id', handlerUploadImg) */

export default router