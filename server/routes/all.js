const router = require('express').Router();
const {verifyAccessToken} = require('../auth/jwt');
const User = require('../models/users');


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
   //console.log(req.userdata.email);
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
  * tags:
  *   name: All-Users
  *   description: Private Routes
  */


/**
   * @swagger
   * '/s/upload':
   *    post:
   *        tags:
   *            - All-Users
   *        summary: Register a user
   *        consumes:
   *            - multipart/form-data
   *        parameters:
   *            - in: formData
   *              name: upfile
   *              type: file
   *              required: true
   *              description: The file to upload.
   *        responses:
   *            200:
   *                description: Success
   *            400:
   *                description: Exist user account
   *            500:
   *                description: Server failure
   */
 router.route('/').post(verifyAccessToken,(req,res) => {
  //console.log(req.userdata.email);
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

module.exports = router;