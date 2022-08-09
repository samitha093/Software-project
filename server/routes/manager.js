const router = require('express').Router();
const User = require('../models/users');
const events = require('../models/events');
const crons = require('../models/cron');
const util_area = require('../models/util_area');
const util_category = require('../models/util_category');
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
 *          updateaevent:
 *              type: object
 *              required:
 *                  - status
 *                  - comment
 *              properties:
 *                  status:
 *                      type: string
 *                      description: Should be in Capital
 *                  comment:
 *                      type: string
 *                      description: Validated comment
 *              example:
 *                  status: "?"
 *                  comment: "?"
 *          util:
 *              type: object
 *              required:
 *                  - name
 *              properties:
 *                  name:
 *                      type: string
 *                      description: no Validated
 *              example:
 *                  name: "?"
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
   *     summary: Get Pending Seller List (data-out*)
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
        usertype: false,
        secret: false,
        token: false,
        tickets: false
    };
    User.find({usertype:"SELLER",otp:"0", status:false},Projection,(err,data) => {
        res.status(200).json(data) 
    })
});

/**
   * @swagger
   * '/m/activesellerlist':
   *  get:
   *     tags:
   *     - User-Manager
   *     summary: Get Active Seller List (data-out*)
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
 router.route('/activesellerlist').get(verifyAccessToken,managerverification,(req,res) => {
  var Projection = { 
      status: false,
      otp: false,
      password: false,
      usertype: false,
      secret: false,
      token: false,
      tickets: false
  };
  User.find({usertype:"SELLER", status:true},Projection,(err,data) => {
      res.status(200).json(data) 
  })
});

/**
 * @swagger
 *  '/m/getevent/{type}':
 *      get:
 *          tags:
 *              - User-Manager
 *          summary: get event by type
 *          parameters:
 *              - in: path
 *                required: false
 *                name: type
 *                schema:
 *                  type: String
 *          responses:
 *              200:
 *                  description: Success
 *              404:
 *                  description: No data found
 *              500:
 *                  description: Server failure
 */
 router.route('/getevent/:type').get(verifyAccessToken,managerverification,(req,res) => {
  events.find({status:req.params.type})
      .then(data =>{
          if(data.length>0){
              res.status(200).json(data)
          }else{
              res.status(404).json("No data Found")
          }
      })
      .catch(err => res.status(500).json("Server error"))
});

/**
 * @swagger
 *  '/m/approveaevent/{eventid}':
 *      put:
 *          tags:
 *              - User-Manager
 *          summary: approve a Event
 *          parameters:
 *              - in: path
 *                required: false
 *                name: eventid
 *                schema:
 *                  type: String
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/updateaevent'
 *          responses:
 *              200:
 *                  description: Success
 *              400:
 *                  description: approval Error
 *              500:
 *                  description: Server failure
 */

 router.route('/approveaevent/:eventid').put(verifyAccessToken,managerverification,(req,res) => {
  //console.log(req.userdata.email);
   events.findById(req.params.eventid)
       .then(data =>{
          data.status = req.body.status;
          data.comments.push(req.body.comment);
          data.save()
              .then(()=> res.status(200).json("Event updated"))
              .catch(err => res.status(500).json(err))
       })
       .catch(err => res.status(400).json(err))

        const job_type = "A";
        const job_name = "CREATE_TICKETS_MANAGER";
        const job_id = req.params.eventid;
        const job_status = true;         
        const newcrons = new crons({
            job_type,
            job_name,
            job_id,
            job_status,
            });
        newcrons.save()
});

/**
 * @swagger
 *  '/m/utilcategory':
 *      post:
 *          tags:
 *              - User-Manager
 *          summary: Add Util - category
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/util'
 *          responses:
 *              200:
 *                  description: Success
 *              400:
 *                  description: approval Error
 *              500:
 *                  description: Server failure
 */

 router.route('/utilcategory').post(verifyAccessToken,managerverification,(req,res) => {
   const name = req.body.name;
    const newutil = new util_category({
        name,
    });
    newutil.save()
        .then((result)=> res.status(200).json(result._id))
        .catch(err => res.status(500).json(err)) 
});
/**
 * @swagger
 *  '/m/utilarea':
 *      post:
 *          tags:
 *              - User-Manager
 *          summary: Add Util - Area
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/util'
 *          responses:
 *              200:
 *                  description: Success
 *              400:
 *                  description: approval Error
 *              500:
 *                  description: Server failure
 */

 router.route('/utilarea').post(verifyAccessToken,managerverification,(req,res) => {
    const name = req.body.name;
    const newutil = new util_area({
        name,
    });
    newutil.save()
        .then((result)=> res.status(200).json(result._id))
        .catch(err => res.status(500).json(err)) 
});

/**
 * @swagger
 *  '/m/getcount/{type}':
 *      get:
 *          tags:
 *              - User-Manager
 *          summary: get no of event for this catogery
 *          parameters:
 *              - in: path
 *                required: false
 *                name: type
 *                schema:
 *                  type: String
 *          responses:
 *              200:
 *                  description: Success
 *              404:
 *                  description: error
 *              500:
 *                  description: Server failure
 */

 router.route('/getcount/:type').get(verifyAccessToken,managerverification,async(req,res) => {
    res.status(500).json("undefine body")
});
/**
 * @swagger
 *  '/m/updatecategory/{id}':
 *      put:
 *          tags:
 *              - User-Manager
 *          summary: update catogery
 *          parameters:
 *              - in: path
 *                required: false
 *                name: id
 *                schema:
 *                  type: String
 *          requestBody:
 *              required: false
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/util'
 *          responses:
 *              200:
 *                  description: Success
 *              404:
 *                  description: error
 *              500:
 *                  description: Server failure
 */

 router.route('/updatecategory/:id').put(verifyAccessToken,managerverification,async(req,res) => {
    res.status(500).json("undefine body")
});
/**
 * @swagger
 *  '/m/deletecategory/{id}':
 *      delete:
 *          tags:
 *              - User-Manager
 *          summary: delete category
 *          parameters:
 *              - in: path
 *                required: false
 *                name: id
 *                schema:
 *                  type: String
 *          responses:
 *              200:
 *                  description: Success
 *              404:
 *                  description: error
 *              500:
 *                  description: Server failure
 */

 router.route('/deletecategory/:id').delete(verifyAccessToken,managerverification,async(req,res) => {
    res.status(500).json("undefine body")
});
module.exports = router;