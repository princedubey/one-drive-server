const { listFiles, downloadFile, listFilePermissions } = require('../services/oneDriveService')

async function getFiles(req, res) {
    try {
        const files = await listFiles()
        res.status(200).json({
            message: 'Files fetched successfully!',
            data: files
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

async function getFile(req, res) {
    try {
        const fileStream = await downloadFile(req.params.id)
        
        res.status(200).json({
            message: 'File fetched successfully!',
            data: fileStream.pipe(res)
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

async function getFilePermissions(req, res) {
    try {
        const permissions = await listFilePermissions(req.params.id)

        res.status(200).json({
            message: 'Permissions fetched successfully!',
            data: permissions
        })    
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { getFiles, getFile, getFilePermissions }
