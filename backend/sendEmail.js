const nodemailer = require('nodemailer');

// Create transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail', // You can also use SMTP details like 'smtp.example.com'
  auth: {
    user: 'mittimahal8@gmail.com', // Your email address
    pass: 'hjmwnyebiewaocsq', // Your email password (or App password if using 2-factor authentication)
  },
});

// Define mail options
let mailOptions = {
  from: 'mittimahal8@gmail.com', // Sender address
  to: 'recipient-email@example.com', // List of receivers
  subject: 'Hello from Nodemailer', // Subject line
  text: 'Hello! This is a test email sent using Nodemailer.', // Plain text body
  html: '<b>Hello!</b> This is a test email sent using Nodemailer.', // HTML body
};

// Send email with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
