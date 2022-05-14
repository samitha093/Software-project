const router = require('express').Router();
const User = require('../models/users');
const {verifyAccessToken} = require('../auth/jwt');

/**
 * @swagger
 *  components:
 *      schemas:
 *          addtickets:
 *              type: object
 *              required:
 *                  - eventname
 *                  - event_venue
 *                  - event_date
 *                  - event_time
 *                  - ticket_level
 *                  - image_url
 *                  - amount
 *              properties:
 *                  eventname:
 *                      type: string
 *                  event_venue:
 *                      type: string
 *                  event_date:
 *                      type: string
 *                  event_time:
 *                      type: string
 *                  ticket_level:
 *                      type: string
 *                  image_url:
 *                      type: string
 *                  amount:
 *                      type: string
 *              example:
 *                  eventname: "?"
 *                  event_venue: "?"
 *                  event_date: "?"
 *                  event_time: "?"
 *                  ticket_level: "?"
 *                  image_url: "?"
 *                  amount: "?"
 */

/**
  * @swagger
  * tags:
  *   name: User-buyer
  *   description: Private Routes
  */

/**
 * @swagger
 * '/b/addticket':
 *  post:
 *     tags:
 *     - User-buyer
 *     summary: add ticket for user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/addtickets'
 *     responses:
 *      200:
 *        description: Send to Global Email Server
 *      400:
 *        description: Send to Global Email Server
 *      500:
 *        description: Send to Global Email Server
 */
 router.route('/addticket').post(verifyAccessToken,(req,res) => {
    User.find({email:req.userdata.email, status:true})
        .then(data =>{
            data[0].tickets.push(req.body);
            data[0].save()
                .then((result)=> res.status(200).json("Ticket Added"))
              .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(400).json(err))
});
module.exports = router;