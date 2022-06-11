const router = require('express').Router();
const nodemailer = require('nodemailer');

function emailnotifications (email, subject, html){
    length = 34;
    var result           = '';
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'tickbid.mail@gmail.com',
          pass: 'mutumsqbqhngurnw'
        }
    });
    
    var mailOptions = {
        from: 'Tickbid Team<tickbid.mail@gmail.com>',
        to: email,
        subject: subject,
        html: html,
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Email sent: ' + info.response);
            return;
        }
    }); 
    return result;
};
module.exports = {emailnotifications};    