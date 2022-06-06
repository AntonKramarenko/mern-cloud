const express = require('express')
const config = require('config')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')
const app = express()
const PORT = process.env.PORT || 80
const corsMiddleware = require('./middleware/cors.middleware.js')
const filePathMiddleware = require('./middleware/filepath.middleware.js')
const path = require('path')


app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(filePathMiddleware(path.resolve(__dirname, 'files')))
app.use(express.json())
app.use(express.static('static'))
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)

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