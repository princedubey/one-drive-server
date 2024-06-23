const express = require('express')
const { getFiles, getFile, getFilePermissions } = require('../controllers/fileController')

const router = express.Router()

//For further security we can sanitize the request payload and authenticate the user

router.get('/files', getFiles)
router.get('/download/:id', getFile)
router.get('/permissions/:id', getFilePermissions) 

module.exports = router
