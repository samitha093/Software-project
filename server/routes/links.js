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
    console.log("gitdata");
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
              .then(()=> res.status(200).json("Link updated"))
              .catch(err => res.status(500).json(err))
        }
    })
    .catch(err => res.status(400).json("Connection branch Not exist"))
  });
  module.exports = router;

  