const http = require('http')
const express = require('express')
const socketIo = require('socket.io')
const morgan = require('morgan')
require('dotenv').config()

const socketHandler = require('./src/utils/socketHandler')
const fileRoutes = require('./src/routes/fileRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('dev'))

app.use('/one-drive', fileRoutes)

const server = http.createServer(app)
const io = socketIo(server)

socketHandler(io)

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
