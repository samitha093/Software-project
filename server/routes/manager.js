const router = require('express').Router();
const User = require('../models/users');
const {verifyAccessToken,managerverification} = require('../auth/jwt');

/**
 * @swagger
 *  components:
 *      schemas:
 *          selleractivate:
 *              type: object
 *              required:
 *                  - email
 *              properties:
 *                  email:
 *                      type: string
 *                      description: Validated email Format
 *              example:
 *                  email: "?"
 */

/**
  * @swagger
  * tags:
  *   name: User-Manager
  *   description: Private Routes
  */

/**
   * @swagger
   * '/m/selleractivate':
   *  post:
   *     tags:
   *     - User-Manager
   *     summary: Activate Seller Accounts
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/selleractivate'
   *     responses:
   *        200:
   *            description: Activation Success
   *        400:
   *            description: User Account not found
   *        403:
   *            description: Authentication Failed
   *        401:
   *            description: NULL Header
   *        500:
   *            description: Server failure
   */
  
 router.route('/selleractivate').post(verifyAccessToken,managerverification,(req,res) => {
    User.find({email:req.body.email,otp:"0", status:false})
        .then(data =>{
            data[0].status = true;
            data[0].save()
                .then(()=> res.status(200).json("validated"))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(400).json(err))
});

/**
   * @swagger
   * '/m/pendingsellerlist':
   *  get:
   *     tags:
   *     - User-Manager
   *     summary: Get Pending Seller List
   *     requestBody:
   *      required: false
   *     responses:
   *        200:
   *            description: Pending Seller List
   *        400:
   *            description: No Pending Sellers
   *        403:
   *            description: Authentication Failed
   *        401:
   *            description: NULL Header
   *        500:
   *            description: Server failure
   */
 router.route('/pendingsellerlist').get(verifyAccessToken,managerverification,(req,res) => {
    var Projection = { 
        status: false,
        otp: false,
        password: false,
        usertype: false
    };
    User.find({usertype:"SELLER",otp:"0", status:false},Projection,(err,data) => {
        res.status(200).json(data) 
    })
});




module.exports = router;