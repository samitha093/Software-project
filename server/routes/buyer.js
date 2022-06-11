const router = require('express').Router();
const User = require('../models/users');
const {verifyAccessToken,buyerverification} = require('../auth/jwt');

/**
 * @swagger
 *  components:
 *      schemas:
 *          addtickets:
 *              type: object
 *              required:
 *                  - id
 *                  - ticketscount
 *              properties:
 *                  id:
 *                      type: string
 *                  ticketscount:
 *                      type: string
 *              example:
 *                  id: "?"
 *                  ticketscount: "?"
 */

/**
  * @swagger
  * tags:
  *   name: User-buyer
  *   description: Private Routes
  */

/**
 * @swagger
 *  '/b/gettickets/{type}':
 *      get:
 *          tags:
 *              - User-buyer
 *          summary: get tickets by type
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


/**
 * @swagger
 * '/b/buy':
 *  post:
 *     tags:
 *     - User-buyer
 *     summary: add ticket for user (data-in*)
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
 router.route('/buy').post(verifyAccessToken,buyerverification,(req,res) => {
   const ticket ={
    "eventname": "A",
    "event_venue": "A",
    "event_date": "A",
    "event_time": "A",
    "ticket_level": "A",
    "image_url": "A",
    "amount": "A"
   }
    User.find({email:req.userdata.email, status:true})
        .then(data =>{
            data[0].tickets.push(ticket);
            data[0].save()
                .then((result)=> res.status(200).json("Ticket Added"))
              .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(400).json(err))
});

/**
 * @swagger
 * '/b/bid':
 *  post:
 *     tags:
 *     - User-buyer
 *     summary: add ticket for user with bid(data-in*)
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

/**
 * @swagger
 * '/b/rebid':
 *  put:
 *     tags:
 *     - User-buyer
 *     summary: add a new bid for older ticket(data-in*)
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
module.exports = router;