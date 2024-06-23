require('dotenv').config()

module.exports = {
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
    clientSecret: process.env.CLIENT_SECRET
  },
  scopes: ['https://graph.microsoft.com/.default']
}
