const nodemailer = require('nodemailer');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const sendEmail = require('sendmail')

//transport
const sendEmail = nodemailer.sendEmail(
    SendmailTransport({
        auth:
    })
)

const sendEmailController = (req,res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Your Message Send Successfully",
          });
    } catch (error){
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Send Email API Error",
            error,
        });
      }
};


module.exports = { sendEmailController };