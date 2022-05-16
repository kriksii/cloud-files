const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const PORT = config.get('serverPort')
const app = express()

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