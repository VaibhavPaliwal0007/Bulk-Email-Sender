const Gmail = require('../src/gmail')
const { htmlTemplate } = require('../templates/test')

const sendMails = async (mails) => {
    try{
        await Gmail.sendGmail(mails, "Ignore!", htmlTemplate)
        return console.log('Email sent to ' + mails)
    }

    catch(err){
        return console.log(err)
    }
}

module.exports = sendMails