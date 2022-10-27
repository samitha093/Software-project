const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
const nextemail = process.env.GMAIL;
const nextley = process.env.KEY;

function emailnotifications (email, subject, html){
    length = 34;
    var result           = '';
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: nextemail,
          pass: nextley
        }
    });
    
    var mailOptions = {
        from: 'Tickbid Team<'+nextemail+'>',
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