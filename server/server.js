import express from 'express'
import mongoose from 'mongoose'

const  PORT = process.env.PORT || 5000
const server = express()

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://pawnshop:pawnshop@cluster0.xlez9.mongodb.net/pawnshop?retryWrites=true&w=majority`)

        server.listen(PORT, () => console.log(`server started successfully on port ${PORT}`))
    } catch (error) {
        console.log('Error', error)
    }
}

start();