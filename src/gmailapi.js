const { google } = require('googleapis')

const id = process.env.CLIENT_ID
const secret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN
const redirectUri = 'https://developers.google.com/oauthplayground.com'

const oAuth2Client = new google.auth.OAuth2(id, secret, redirectUri)

oAuth2Client.setCredentials({ refresh_token: refreshToken })

module.exports =  {
    oAuth2Client
}
