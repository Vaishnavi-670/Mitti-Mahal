const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const generatedOTPs = {};

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



router.post('/sendotpmail', (req, res) => {

    const {recipient} = req.body;

    const otp = generateOTP();

    generatedOTPs[recipient] = otp;
    console.log(generatedOTPs);
    

    let mailOptions = {
        from: process.env.EMAIL, // Sender address
        to: recipient, // List of receivers
        subject: 'OTP for resetting password', // Subject line
        html:`<b>Your OTP code is: ${otp}</b>`, // HTML body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        return res.status(200).json({otp : otp});
    });
})

router.post('/verifyotp', (req, res) => {
    const {recipient, otp} = req.body;

    if (generatedOTPs[recipient] === otp) {
        return res.status(200).json({message: 'OTP verified successfully'});
    } else {
        return res.status(400).json({message: 'Invalid OTP'});
    }
    
})

module.exports = router;