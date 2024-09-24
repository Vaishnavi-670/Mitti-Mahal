const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail', // You can also use SMTP details like 'smtp.example.com'
    auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password (or App password if using 2-factor authentication)
    },
});

function generateOTP() {
    // Generate a random number between 100000 and 999999
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString(); // Convert to string if needed
}

// Example usage
const otp = generateOTP();
console.log('Generated OTP:', otp);

// Define mail options
let mailOptions = {
    from: process.env.EMAIL, // Sender address
    to: 'chauhanvaishnavi357@gmail.com', // List of receivers
    subject: 'Hello from Nodemailer', // Subject line
    html:`<b>Your OTP code is: ${otp}</b>`, // HTML body
};

// Send email with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});