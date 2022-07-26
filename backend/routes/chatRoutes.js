import express from 'express'
import { getChat, getChats } from '../controllers/chatController.js'
const router = express.Router()

router.get('/', getChats)

router.get('/:id', getChat)

export default router