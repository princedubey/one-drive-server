const msal = require('@azure/msal-node')
const config = require('../config/azureConfig')

const cca = new msal.ConfidentialClientApplication(config)

async function getToken() {
  try {
    const authResult = await cca.acquireTokenByClientCredential({
      scopes: config.scopes
    })
    return authResult.accessToken
  } catch (error) {
    console.error('Error acquiring token:', error)
    throw error
  }
}

module.exports = { getToken }
