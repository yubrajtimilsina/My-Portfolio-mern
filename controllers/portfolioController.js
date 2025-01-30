const sendEmail = require('sendmail')();

// controller
const sendEmailController = (req, res) => {
  try {
    sendEmail({
      from: 'yubrajtimilsina32@gmail.com',
      to: 'yubrajtimilsina32@gmail.com',
      subject: 'Hello ✔',
      html: 'Hello world?',
    }, function (error, response) {
      if (error) {
        return res.status(500).send({
          success: false,
          message: 'Send Email API Error',
          error,
        });
      }

      return res.status(200).send({
        success: true,
        message: 'Your Message Sent Successfully',
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Send Email API Error',
      error,
    });
  }
};

module.exports = { sendEmailController };
