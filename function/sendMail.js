const email = require('../src/email')
const { htmlTemplate } = require('../templates/test')

const sendMails = async (mails) => {
    try{
       await email.sendMail(mails, "Ignore", htmlTemplate)
       console.log('Email sent to ' + mails)
    }

   catch(err){
       return console.log(err)
   }
}

module.exports = sendMails