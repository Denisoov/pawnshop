import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import authRouter from './authRouter.js' 

const  PORT = process.env.PORT || 5000
const server = express()
const urlDB = `mongodb://pawnshop:pawnshop@cluster0-shard-00-00.xlez9.mongodb.net:27017,cluster0-shard-00-01.xlez9.mongodb.net:27017,cluster0-shard-00-02.xlez9.mongodb.net:27017/pawnshop?ssl=true&replicaSet=atlas-ftiur5-shard-0&authSource=admin&retryWrites=true&w=majority`

server.use(cors())
server.use(express.json())
server.use('/api', authRouter)


const start = async () => {
    try {
        await mongoose.connect(urlDB)

        server.listen(PORT, () => console.log(`server started successfully on port ${PORT}`))
    } catch (error) {
        console.log('Error', error)
    }
}

start();