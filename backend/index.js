import chatRoute from './routes/chatRoutes.js'

import dotenv from 'dotenv';

import express from "express";
const app = express()


// midl 
dotenv.config()

app.use('/api/chat', chatRoute)


const PORT = process.env.PORT || 5000 
app.listen(PORT, console.log(`Server is running in ${PORT}`))