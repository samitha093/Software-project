const router = require('express').Router();
const User = require('../models/users');
const devices = require('../models/devices')
const jwt = require('jsonwebtoken');
const {secretGenerator} = require('../auth/jwt')
const {verifyAccessToken,sellerverification} = require('../auth/jwt');
const {getusername, getuserid} = require('../middlewares/user');


/**
 * @swagger
 *  components:
 *      schemas:
 */

/**
  * @swagger
  * tags:
  *   name: Device-list
  *   description: Private Routes for sellers
  */
/**
   * @swagger
   * '/d/create':
   *  post:
   *     tags:
   *     - Device-list
   *     summary: Create Link For device
   *     requestBody:
   *      required: false
   *     responses:
   *        200:
   *            description: created
   *        400:
   *            description: User Account not found
   *        403:
   *            description: Authentication Failed
   *        401:
   *            description: NULL Header
   *        500:
   *            description: Server failure
   */

 router.route('/create').post(verifyAccessToken,sellerverification,getuserid,(req,res) => {
    console.log("create a link for a device");
    var sellerid = req.userid;
    const newevent = new devices({
        sellerid
        });
    newevent.save()
        .then((result)=> res.status(200).json(result._id))
        .catch(err => res.status(500).json(err)) 
  });
  module.exports = router;

    /**
   * @swagger
   * '/d/links':
   *  get:
   *     tags:
   *     - Device-list
   *     summary: get links
   *     requestBody:
   *      required: false
   *     responses:
   *        200:
   *            description: data
   *        400:
   *            description: device not found
   *        403:
   *            description: Authentication Failed
   *        401:
   *            description: NULL Header
   *        500:
   *            description: Server failure
   */

 router.route('/links').get(verifyAccessToken,sellerverification,getuserid,(req,res) => {
  console.log("get link list for conect device");
  devices.find({sellerid:req.userid})
    .then((result)=> res.status(200).json(result))
    .catch(err => res.status(400).json(err))
  });
  module.exports = router;


  /**
   * @swagger
   * '/d/update':
   *  put:
   *     tags:
   *     - Device-list
   *     summary: Update Device With qr code
   *     requestBody:
   *      required: false
   *     responses:
   *        200:
   *            description: updated
   *        400:
   *            description: device not found
   *        403:
   *            description: Authentication Failed
   *        401:
   *            description: NULL Header
   *        500:
   *            description: Server failure
   */

 router.route('/update/:deviceid').put((req,res) => {
  console.log("conected a device with links");
    devices.findById(req.params.deviceid)
    .then(data =>{
        if(data.deviceStatus == "CONECTED"){
          res.status(400).json("Already Conected ID")
        }else{
          data.osName = req.body.osName;
          data.osVersion = req.body.osVersion;
          data.clientName = req.body.clientName;
          data.clientType = req.body.clientType;
          data.deviceModel = req.body.deviceModel;
          data.deviceBrand = req.body.deviceBrand;
          data.deviceType = req.body.deviceType;
          data.deviceId = req.body.deviceId;
          data.deviceStatus = "CONECTED"
          data.save()
              .then((result)=> res.status(200).json(result.sellerid))
              .catch(err => res.status(500).json(err))
        }
    })
    .catch(err => res.status(400).json("Connection branch Not exist"))
  });
/**
 * @swagger
 *  '/d/deletelink/{linkid}':
 *      delete:
 *          tags:
 *              - Device-list
 *          summary: delete a link in a device
 *          parameters:
 *              - in: path
 *                required: false
 *                name: linkid
 *                schema:
 *                  type: String
 *          requestBody:
 *              required: false
 *          responses:
 *              200:
 *                  description: Success
 *              400:
 *                  description: delete Error
 *              500:
 *                  description: Server failure
 */
  router.route('/deletelink/:linkid').delete(verifyAccessToken,sellerverification,getuserid,(req,res) => {
    console.log("delete a linked device");

    devices.findById(req.params.linkid).then(data =>{
      if(data.sellerid == req.userid){
        devices.findByIdAndRemove(req.params.linkid, function(err){
          if(err){
              res.status(500).json(err);
          } else {
              res.status(200).json("link deleted");
          }  
        });
          // var subdoc = data.tickets;
          // subdoc = subdoc.filter(val => !(val._id == req.params.ticketid))
          // data.tickets = subdoc;
          // data.save()
          //         .then(()=> res.status(200).json("ticket deleted"))
          //         .catch(err => res.status(500).json(err))
      }else{
          return res.sendStatus(403);
      }
  })
  .catch(err => res.status(400).json(err))
  });

  module.exports = router;

  