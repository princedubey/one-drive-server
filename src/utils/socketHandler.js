const { listFilePermissions } = require('../services/oneDriveService')

function socketHandler(io) {
    io.on('connection', (socket) => {
        console.log('A user connected!')
        
        socket.on('subscribeToFile', async (fileId) => {
            console.log(`User subscribed to file: ${fileId}`)

            setInterval(async () => {
                const permissions = await listFilePermissions(fileId)
                socket.emit('filePermissionsUpdate', permissions)
            }, 5000)
        })

        socket.on('disconnect', () => {
            console.log('User disconnected!')
        })
    })
}

module.exports = socketHandler
