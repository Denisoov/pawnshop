import express from 'express'
import mongoose from 'mongoose'

import authRouter from './authRouter.js' 

const  PORT = process.env.PORT || 8000
const server = express()
const urlDB = `mongodb+srv://pawnshop:pawnshop@cluster0.xlez9.mongodb.net/pawnshop?retryWrites=true&w=majority`

server.use(express.json)
server.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(urlDB)

        server.listen(PORT, () => console.log(`server started successfully on port ${PORT}`))
    } catch (error) {
        console.log('Error', error)
    }
}

start();