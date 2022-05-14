const router = require('express').Router();
const {verifyAccessToken} = require('../auth/jwt');
const User = require('../models/users');

/**
 * @swagger
 *  components:
 *      schemas:
 *          allpasswordreset:
 *              type: object
 *              required:
 *                  - password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: Validated Passwordformat And same conform-passwords
 *              example:
 *                  password: "?"
 */

/**
  * @swagger
  * tags:
  *   name: All-User
  *   description: Private Routes
  */

/**
   * @swagger
   * '/a/logout':
   *  post:
   *     tags:
   *     - All-User
   *     summary: All type of Users logout
   *     requestBody:
   *      required: false
   *     responses:
   *        200:
   *            description: logout Success
   *        400:
   *            description: User Account not found
   *        403:
   *            description: Authentication Failed
   *        401:
   *            description: NULL Header
   *        500:
   *            description: Server failure
   */

router.route('/logout').post(verifyAccessToken,(req,res) => {
  User.find({email:req.userdata.email, status:true})
      .then(data =>{
        data[0].secret = "";
        data[0].token = "";
          data[0].save()
              .then(()=> res.status(200).json("logout"))
              .catch(err => res.status(500).json(err))
      })
      .catch(err => res.status(400).json(err))
});

/**
   * @swagger
   * '/a/resetpassword':
   *  post:
   *     tags:
   *     - All-User
   *     summary: User Password reset
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/allpasswordreset'
   *     responses:
   *      200:
   *        description: Success
   *      400:
   *        description: Wrong OTP
   *      500:
   *        description: Server failure
   */
 router.route('/resetpassword').post(verifyAccessToken,(req,res) => {
  //console.log(req.userdata.email);
   User.find({email:req.userdata.email, status:true})
       .then(data =>{
          data[0].password = req.body.password;
          data[0].save()
              .then(()=> res.status(200).json("Password updated"))
              .catch(err => res.status(500).json(err))
       })
       .catch(err => res.status(400).json(err))
});

/**
 * @swagger
 * '/a/mydata':
 *  get:
 *     tags:
 *     - All-User
 *     summary: Get Logged User data 
 *     responses:
 *      200:
 *        description: Success(data-out*)
 *      400:
 *        description: Wrong auth level
 *      500:
 *        description: Server failure
 */
 router.route('/mydata').get(verifyAccessToken,(req,res) => {
  var Projection = { 
    status: false,
    otp: false,
    password: false,
    usertype: false,
    secret: false,
    token: false,
    tickets: false
  };
  User.find({email:req.userdata.email},Projection,(err,data) => {
    res.status(200).json(data) 
  })
});
module.exports = router;