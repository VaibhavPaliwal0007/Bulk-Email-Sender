const email = require('../src/email');
const { htmlTemplate } = require('../templates/devopscertificate.js');

const sendMails = async (mails, name) => {
    try{
       const certificate = __dirname + `/../Certificates/${name}.png`;
       await email.sendMail(mails, "Here is your certificate from Microsoft!!", htmlTemplate, certificate);
       console.log('Email sent to ' + mails);
    }

   catch(err){
       throw err;
   }
}

module.exports = sendMails