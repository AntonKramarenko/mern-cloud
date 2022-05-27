const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')
const app = express()
const PORT = config.get('serverPort') || 5000

app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () => {
    try {

        await mongoose.connect(config.get('dbUrl'))


        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}

start()