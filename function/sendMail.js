const email = require('../src/email')
const { htmlTemplate } = require('../templates/githubmlsa.js')

const sendMails = async (mails) => {
    try{
       await email.sendMail(mails, "Reminder, for the event @6pm!!", htmlTemplate)
       console.log('Email sent to ' + mails)
    }

   catch(err){
       return console.log(err)
   }
}

module.exports = sendMails