const axios = require('axios')
const { getToken } = require('./authService')

async function listFiles() {
    try {
        const token = await getToken()
        const response = await axios.get('https://graph.microsoft.com/v1.0/drive/root/children', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        return response.data
    } catch (error) {
        console.error('Error:', error.response)
        throw error
    }
}

async function downloadFile(itemId) {
    try {
        const token = await getToken()
        const response = await axios.get(`https://graph.microsoft.com/v1.0/drive/items/${itemId}/content`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/octet-stream'
            },
            responseType: 'stream'
        })
        return response.data
    } catch (error) {
        console.error('Error:', error.response)
        throw error
    }
}

async function listFilePermissions(itemId) {
    try {
        const token = await getToken()
        const response = await axios.get(`https://graph.microsoft.com/v1.0/drive/items/${itemId}/permissions`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        return response.data
    } catch (error) {
        console.error('Error:', error.response)
        throw error
    }
}

module.exports = { listFiles, downloadFile, listFilePermissions }
