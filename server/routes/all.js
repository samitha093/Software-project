const router = require('express').Router();
const {verifyAccessToken} = require('./jwt');
const User = require('../models/users');

/**
 * @swagger
 *  components:
 *      schemas:
 *          logout:
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
  *   name: All-logout
  *   description: Private Routes
  */

/**
   * @swagger
   * '/a/logout':
   *  post:
   *     tags:
   *     - All-logout
   *     summary: All type of Users logout
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/logout'
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
    User.find({email:req.body.email, status:true})
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