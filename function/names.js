const excel = require('read-excel-file/node')
const sendMails = require('./sendMail');
const sendGmail = require('./sendGmail');

const namesMail = async() => {
    try{
        const rows = await excel('./Excel/content.xlsx',)
        for (i in rows){
            await sendMails(rows[i][0], rows[i][1]);
        }
    }

    catch(e){
        console.log(e)
    }
};

const namesGmail = async() => {
    try{
        const rows = await excel('./Excel/content.xlsx',)
        for (i in rows){
            await sendGmail(rows[i][0])
        }
    }
    catch(e){
        console.log(e)
    }
}

module.exports = { mail: namesMail, gmail: namesGmail };