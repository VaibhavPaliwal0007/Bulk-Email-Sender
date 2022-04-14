const Gmail = require('../src/gmail')
const { htmlTemplate } = require('../templates/mlops')

const sendMails = async (mails) => {
    try{
        await Gmail.sendGmail(mails, "Reminder for the event!!!!!", htmlTemplate)
        console.log('Email sent to ' + mails)
    }

    catch(err){
        return console.log(err)
    }
}

module.exports = sendMails