const excel = require('read-excel-file/node')
const Gmail = require('./src/gmail')
const email = require('./src/email')

const { htmlTemplate } = require('./templates/tokyoevent.js')

if(!process.env.REFRESH_LINK && !process.env.CLIENT_SECRET && !process.env.CLIENT_ID)
{
    const sendMails = async (mails) => {
        const mail = await email.sendMail(mails, "Subject", htmlTemplate)
                                        .then(() => console.log('Email sent to ' + mails))
                                        .catch((e) => console.log(e))
    }
    
    excel('./Excel/content.xlsx',)
                .then((rows) => {
                    for (i in rows){
                        for (j in rows[i]){
                            sendMails(rows[i][0])}
                    }
                })
}

else{
    const sendMails = async (email) => {
        const mail = await Gmail.sendGmail(email, "Subject", htmlTemplate)
                                            .then(() => console.log('Email sent to ' + email))
                                            .catch((e) => console.log(e))
    }
    
    excel('./Excel/content.xlsx',)
                .then((rows) => {
                    for (i in rows){
                        for (j in rows[i]){
                            sendMails(rows[i][0])}
                    }
                })
             
}


// const sendMails = async(mails) => {
//         await email.sendMail(mails, 'Hello sir jdsifds', htmlTemplate)
//                                                         .then(() => console.log('Email sent to ' + mails))
//                                                         .catch((e) => console.log(e))
        
//         }
//         excel('./Excel/content.xlsx',)
//                         .then((rows) => {
//                             for (i in rows){
//                                 for (j in rows[i]){
//                                     let hello = rows[i][0].toString()
//                                     sendMails(hello) }
//                             }
//                         })
                        // .catch((e) => console.log(e))
                                    