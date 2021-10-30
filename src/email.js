const nodemailer = require('nodemailer')

const email = process.env.email
const pass = process.env.pass

const sendMail = async (reciever, subject, htmlTemplate) => {

    try{
        const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            pool: true,
            // service: 'gmail',
            auth: {
                type: "login",
                user: email,
                pass: pass
            },
            connectionTimeout: 30000,
            maxMessages: 500
        })

        let mail = {
            from: email,
            to: reciever,
            subject: subject,     
            html: htmlTemplate,
            header: {
                "x-priority": "1",
                "x-msmail-priority": "High",
                importance: "high"
            }
        }

        const result = await transport.sendMail(mail)

        return result
    }

    catch(e){
        return console.log(e)
    }
}

module.exports = {
    sendMail
}