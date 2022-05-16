const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const PORT = config.get('serverPort')
const app = express()

const authRouter = require('./routes/auth.routes')

app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () => {
    try {
        mongoose.connect(config.get('mongoAtlas'))

        app.listen(PORT, () => {
            console.log('Server started on Port', PORT)
        })
    } catch (error) {
        
    }
}

start()