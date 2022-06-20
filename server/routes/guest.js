const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const tickets = require('../models/tickets');
const util_area = require('../models/util_area');
const util_category = require('../models/util_category');
const orders = require('../models/orders')
const crons = require('../models/cron');
const {a, b, c} = require('../views/otp')
const {secretGenerator, otpgenerator} = require('../auth/jwt')
const {emailnotifications} = require('../smtp/mail')
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
 *          emailnotification:
 *              type: object
 *              required:
 *                  - email
 *                  - subject
 *                  - html
 *              properties:
 *                  email:
 *                      type: string
 *                      description: validated email format
 *                  subject:
 *                      type: string
 *                      description: subject char > 0
 *                  html:
 *                      type: string
 *                      description: use only HTML & CSS
 *              example:
 *                  email: "?"
 *                  subject: "?"
 *                  html: "?" 
 * 
 *          cartamount:
 *              type: object
 *              required:
 *                  - cart
 *              properties:
 *                  cart:
 *                      type: string
 *                      description: validated cart data
 *              example:
 *                  cart: "?"
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
   * '/g/tickets':
   *  get:
   *     tags:
   *     - User-guest
   *     summary: Get Tickets
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

  router.route('/tickets').get((req,res) => {
    tickets.find({},(err,data) => {
        res.status(200).json(data) 
    })
});

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
    var response = {};
    const username = req.body.name;
    const email = req.body.email;
    const contact = req.body.contactnumber;
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
            .then((result)=> {
                res.status(200).json(result._id)
            })
            .catch(err => res.status(500).json(err)) 
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
        const payload = {"email" : email, "type":data[0].usertype}
        const secret = await secretGenerator(250)
        const token = await jwt.sign(payload,secret)
        let datapack = {
            type: data[0].usertype, 
        }
        User.find({email:email})
        .then(datas =>{
            datas[0].secret = secret;
            datas[0].token = token;
            datas[0].save()
                .then(()=> {
                    res.status(200).cookie(
                        "TickBid",
                        token,
                        {
                           //sameSite : 'strict',
                           httpOnly:true,
                           //secure:true
                        }
                    ).json(datapack)
                    //res.status(200).json(datapack)
                })
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
                var otpid = otpgenerator(10)
                data[0].otp = otpid;
                data[0].save()
                    .then(async()=>{
                        const email = req.body.email;
                        const subject = "OTP for Activate your TickBid Account";
                        const html = a + username +b + otpid + c
                        await emailnotifications(email, subject, html);
                        res.status(200).json("Email Sended");
                    })
                    .catch(err => res.status(500).json(err))
            })
            .catch(err => res.status(400).json("Not Found User Accout For this email"))
    });

/**
 * @swagger
 * '/g/notification':
 *  post:
 *     tags:
 *     - Email-Sender
 *     summary: Send Email Notifications
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/emailnotification'
 *     responses:
 *      200:
 *        description: Send to Global Email Server
 */
  
router.route('/notification').post(async(req,res) => {
    const email = req.body.email;
    const subject = req.body.subject;
    const html = req.body.html;
    const emails = await  emailnotifications(email, subject, html)
    res.status(200).json("Sended email");
});

/**
  * @swagger
  * tags:
  *   name: Util
  *   description: Public Routes
  */
/**
 * @swagger
 * '/g/areas':
 *  get:
 *     tags:
 *     - Util
 *     summary: Get System areas
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Success
 *      400:
 *        description: error
 *      500:
 *        description: Server failure
 */
router.route('/areas').get(async(req,res) => {
    util_area.find({})
        .then(data =>{res.status(200).json(data)})
        .catch(err => res.status(400).json("Wrong db connection"))
});
/**
 * @swagger
 * '/g/categories':
 *  get:
 *     tags:
 *     - Util
 *     summary: Get System categories
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Success
 *      400:
 *        description: error
 *      500:
 *        description: Server failure
 */
router.route('/categories').get(async(req,res) => {
    util_category.find({})
        .then(data =>{res.status(200).json(data)})
        .catch(err => res.status(400).json("Wrong db connection"))
});
/**
 * @swagger
 * '/g/ticketbyid/{ticketid}':
 *  get:
 *     tags:
 *     - User-buyer
 *     summary: Get ticket data by id(Public Link*)
 *     parameters:
 *      - in: path
 *        name: ticketid
 *        schema:
 *          type: String
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Success
 *      400:
 *        description: error
 *      500:
 *        description: Server failure
 */
 router.route('/ticketbyid/:ticketid').get(async(req,res) => {
    tickets.findById(req.params.ticketid)
        .then(data =>{res.status(200).json(data)})
        .catch(err => res.status(400).json("Wrong db connection"))
});

/**
 * @swagger
 * '/g/cartamount':
 *  post:
 *     tags:
 *     - User-buyer
 *     summary: Calculate cart amount (public link*)
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/cartamount'
 *     responses:
 *      200:
 *        description: calculated
 */
  
 router.route('/cartamount').post(async(req,res) => {
    if(!req.body.cart){
       return res.status(200).json(0);
    }
    const cart = req.body.cart;
    console.log(cart);
    var Amount = 0;
    for (let item of cart) {
    var data = await tickets.findById(item.itemid)
        .then(data =>{
            return Amount += data.buy_amount*item.qty;
        })
    }
    console.log(data);
    if(data){
        res.status(200).json(data);
    }else{
        res.status(200).json(0);
    }
    
});

/**
 * @swagger
 * '/g/order':
 *  post:
 *     tags:
 *     - User-buyer
 *     summary: add ticket for guest user (Web-hook*)-public carefull
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/addtickets'
 *     responses:
 *      200:
 *        description: added to account
 *      400:
 *        description: error for adding
 *      500:
 *        description: server error
 */
 router.route('/order').post(async(req,res) => {
    const userid = usernamegenerator(20);
    const usertype = "GUEST";
   const neworder = new orders({
    userid,
    usertype
   });
    var orderid = await neworder.save().then((result)=>{return result._id})
    //console.log(neworder);
    const cart = req.body.cart;
    for (let item of cart) {
      await tickets.findById(item.itemid)
        .then(async(data) =>{
          data.buy_quantity -= item.qty;
          data.save()
            .then(()=> console.log("ticket updated"))
            .catch(err => console.log(err))
          //console.log(req.userid);
          //console.log(req.userdata.type);
        })
      }
    await orders.findById(orderid).then(async(ordersata)=> {
    ordersata.tickets = cart;
    ordersata.save()
        .then(()=> console.log("oder updated"))
        .catch(err => console.log(err))
    })
    const job_type = "C";
    const job_name = "CREATE_QR";
    const job_id = orderid;
    const job_status = true;         
    const newcrons = new crons({
        job_type,
        job_name,
        job_id,
        job_status,
        });
    newcrons.save()
    res.status(200).json("Sys Prop Enabled")

});

function usernamegenerator(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


module.exports = router;