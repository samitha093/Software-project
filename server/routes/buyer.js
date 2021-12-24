const router = require('express').Router();
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const orders = require('../models/orders');
const tickets = require('../models/tickets');
const bids = require('../models/bids');

//Authentificat tokens
function authtoken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, "hjfhsahf282714ndflsd8we0" , (err, data)=>{
        if(err) return res.sendStatus(403)
        next();
    } )
}
//email notifications
function notification(to, subject, body){
    const host_ = "in-v3.mailjet.com";
    const port_ = 465;
    const user_ = "1b7e8743391668430fc079c96f2c12ed";
    const passs_ = "39d279b737fb3515a4c19c4a37e2845b";
    const security_ = "SSL"; 
    const from_email = "Tickbid Team<no-reply@tickbid.ml>";
    const to_email = to;
    const sublect_email = subject;
    const body_email = body;
    const transporter = nodemailer.createTransport({
        host: host_,
        port: port_,
        secure: security_,
        auth: {
            user: user_,
            pass: passs_,
        },
    });
    let mainOptions = {
        from: from_email,
        to: to_email, 
        subject: sublect_email,
        html: body_email,
    }
    transporter.sendMail(mainOptions, (err, info) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`mail sent ${info.response}`);
            return;
        }
    })
}
//routes
router.route('/').post(async(req, res) => {
    
    const to = "slakshan@ieee.org";
    const subject = "test Subject2";
    const body = "test body2";
    await notification(to, subject, body);
    res.status(200).json("ok");
});

module.exports = router;