const nodemailer = require('nodemailer')
const { oAuth2Client } = require('./gmailapi')
require('dotenv').config();

const sendGmail = async (reciever, subject, htmlTemplate) => {
    
    try{
       const accessToken = await oAuth2Client.getAccessToken()

       const transport = nodemailer.createTransport({
           service: 'Gmail',

           auth:{
               type: 'OAuth2',
               user: process.env.email,
               clientId: process.env.CLIENT_ID,
               clientSecret: process.env.CLIENT_SECRET,
               refreshToken: process.env.REFRESH_TOKEN,
               accessToken : accessToken
           },

           connectionTimeout: 30000,
           maxMessages: 500,
           secure: true,
           pool: true,
       })

        let mailOptions = {
           from : '"VP👀" <vaibhavpaliwal24@gmail.com>',
           to : reciever,
           subject: subject,
           text: "hello from another side",
           html: htmlTemplate,
        //    text: "Hello world?",
           header: {
            "x-priority": "1",
            "x-msmail-priority": "High",
            importance: "high"
          } 
       }
       
       const result = await transport.sendMail(mailOptions)

       return result
    }

    catch(e){
        return console.log(e)
    }
} 

// sendMail(reciever, "Hello sir", htmlTemplate)
//           .then(() => console.log('Email sent to ' + reciever))
//           .catch((e) => console.log(e))

module.exports = {
    sendGmail
}
