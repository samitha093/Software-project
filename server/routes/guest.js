const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const {a, b, c} = require('../views/otp')
const {secretGenerator} = require('../auth/jwt')
/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateUsers:
 *              type: object
 *              required:
 *                  - name
 *                  - email
 *                  - password
 *                  - usertype
 *              properties:
 *                  name:
 *                      type: string
 *                      description: validated number of charactors
 *                  email:
 *                      type: string
 *                      description: Validated email Format
 *                  contactnumber:
 *                      type: string
 *                      description: Validated Phone number Format With 10 Digits
 *                  password:
 *                      type: string
 *                      description: Validated Password & Same Password 
 *                  usertype:
 *                      type: string
 *                      description: Should validated if admin 
 *              example:
 *                  name: "?"
 *                  email: "?"
 *                  contactnumber: "?"
 *                  password: "?"
 *                  usertype: "?"
 *          email:
 *              type: object
 *              required:
 *                  - name
 *                  - email
 *                  - usertype
 *              properties:
 *                  name:
 *                      type: string
 *                      description: validated number of charactors
 *                  email:
 *                      type: string
 *                      description: Validated email Format
 *                  usertype:
 *                      type: string
 *                      description: Should validated if admin 
 *              example:
 *                  name: "?"
 *                  email: "?"
 *                  usertype: "?"
 *          otpactivate:
 *              type: object
 *              required:
 *                  - email
 *                  - otp
 *              properties:
 *                  email:
 *                      type: string
 *                      description: Validated email Format
 *                  otp:
 *                      type: string
 *                      description: Should validated With Number Count = 10
 *              example:
 *                  email: "?"
 *                  otp: "?"
 *          passwordreset:
 *              type: object
 *              required:
 *                  - otp
 *                  - email
 *                  - password
 *              properties:
 *                  otp:
 *                      type: string
 *                      description: validated number of charactors
 *                  email:
 *                      type: string
 *                      description: Validated email Format
 *                  password:
 *                      type: string
 *                      description: Should validated format
 *              example:
 *                  otp: "?"
 *                  email: "?"
 *                  password: "?"
 *          login:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: Validated email Format
 *                  password:
 *                      type: string
 *                      description: Should validated format
 *              example:
 *                  email: "?"
 *                  password: "?"
 * 
 * 
 */

/**
  * @swagger
  * tags:
  *   name: User-guest
  *   description: Public Routes
  */

  /**
   * @swagger
   * '/g/register':
   *  post:
   *     tags:
   *     - User-guest
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUsers'
   *     responses:
   *      200:
   *        description: Success
   *      400:
   *        description: Exist user account
   *      500:
   *        description: Server failure
   */

router.route('/register').post((req,res) => {
    const username = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const usertype = req.body.usertype;
    User.find({email:email},(err,data) => {
        if(data.length>0){
            res.status(400).json("User alreadyt exist");
            return 0;
        } 
        const newuser = new User({
            username,
            email,
            contact,
            password,
            usertype,
            });
        newuser.save()
            .then(()=> res.status(200).json("Registration success"))
            .catch(err => res.status(400).json(err + "Registration failed"))   
    })
 
});

/**
   * @swagger
   * '/g/activate':
   *  post:
   *     tags:
   *     - User-guest
   *     summary: Activate User Account With OTP
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/otpactivate'
   *     responses:
   *      200:
   *        description: Success
   *      400:
   *        description: Wrong OTP
   *      500:
   *        description: Server failure
   */

 router.route('/activate').post((req,res) => {
    User.find({email:req.body.email,otp:req.body.otp, status:false})
        .then(data =>{
            if(data[0].usertype === "BUYER"){
                data[0].status = true;
            }else if(data[0].usertype === "MANAGER"){
                data[0].status = true;
            }else{
                data[0].status = false;
            }
            
            data[0].otp = "0";
            data[0].save()
                .then(()=> res.status(200).json("validated"))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(400).json("Wrong OTP"))
});

/**
   * @swagger
   * '/g/managercount':
   *  get:
   *     tags:
   *     - User-guest
   *     summary: Get Count Of Manager Account
   *     requestBody:
   *      required: false
   *     responses:
   *      200:
   *        description: Success
   *      400:
   *        description: Wrong User Format
   *      500:
   *        description: Server failure
   */

 router.route('/managercount').get((req,res) => {
    User.find({usertype:"MANAGER"},(err,data) => {
        res.status(200).json(data.length) 
    })
});

/**
   * @swagger
   * '/g/passwordreset':
   *  post:
   *     tags:
   *     - User-guest
   *     summary: Password Reset
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/passwordreset'
   *     responses:
   *      200:
   *        description: Success
   *      400:
   *        description: Wrong OTP
   *      500:
   *        description: Server failure
   */

 router.route('/passwordreset').post((req,res) => {
    User.find({email:req.body.email,otp:req.body.otp})
        .then(data =>{
            data[0].password = req.body.password;
            data[0].otp = "0";
            data[0].save()
                .then(()=> res.status(200).json("validated"))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(400).json("Wrong OTP"))
});

/**
   * @swagger
   * '/g/login':
   *  post:
   *     tags:
   *     - User-guest
   *     summary: User Login
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/login'
   *     responses:
   *      200:
   *        description: Success
   *      400:
   *        description: Wrong OTP
   *      500:
   *        description: Server failure
   */


router.route('/login').post((req,res) => {
    
    const email = req.body.email;
    const password = req.body.password;

    User.find({email:email, password:password, status:true},async(err,data)=>{
    if(data.length>0){
        const payload = {"emai" : email, "type":data[0].usertype}
        const secret = await secretGenerator(250)
        const token = await jwt.sign(payload,secret)
        let datapack = {
            tokenkey: token,
            type: data[0].usertype, 
        }
        User.find({email:email})
        .then(datas =>{
            datas[0].secret = secret;
            datas[0].token = token;
            datas[0].save()
                .then(()=> res.status(200).json(datapack))
                .catch(err => res.status(500).json(err))
                return 0;
        })
        .catch(err => res.status(400).json("Wrong OTP"))
        return 0;
    }else{
        res.status(400).json("User does not exist");
    }
  })
    
});

/**
  * @swagger
  * tags:
  *   name: Email-Sender
  *   description: Public Routes
  */

  /**
   * @swagger
   * '/g/verify':
   *  post:
   *     tags:
   *     - Email-Sender
   *     summary: Send OTP For useraccount Verification
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/email'
   *     responses:
   *      200:
   *        description: Success
   *      400:
   *        description: Notregisted user
   *      500:
   *        description: Server failure
   */
  
  
    router.route('/verify').post((req,res) => {
        const username = req.body.name;
        User.find({email:req.body.email,usertype:req.body.usertype})
            .then(data =>{
                var otpid = makeid(10)
                data[0].otp = otpid;
                data[0].save()
                    .then(async()=>{
                        const to = req.body.email;
                        await notification(to, username, otpid);
                        res.status(200).json("ok");
                    })
                    .catch(err => res.status(500).json(err))
            })
            .catch(err => res.status(400).json("Not Found User Accout For this email"))
    });

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    //email notifications
function notification(email, username, otp){
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
        subject: 'TickBid Team',
        html: a + username +b + otp + c
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
}

module.exports = router;