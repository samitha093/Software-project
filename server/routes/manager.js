const router = require('express').Router();
const events = require('../models/events');
const ticketLevels = require('../models/ticketLevels');
const User = require('../models/users');
const {verifyAccessToken} = require('./jwt');

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
   *      200:
   *        description: Activation Success
   *      400:
   *        description: User Account not found
   *      500:
   *        description: Server failure
   */
  
 router.route('/selleractivate').post(verifyAccessToken,(req,res) => {
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
   *      200:
   *        description: Pending Seller List
   *      400:
   *        description: No Pending Sellers
   *      500:
   *        description: Server failure
   */
 router.route('/pendingsellerlist').get(verifyAccessToken,(req,res) => {
    User.find({usertype:"SELLER",otp:"0", status:false},(err,data) => {
        res.status(200).json(data) 
    })
});

/*Routing to Search Pending Events*/
router.route('/pending').get((req,res) => {
    events.find({status: "pending"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))

});

/*Routing to Search Active Events*/
router.route('/active').get((req,res) => {
    events.find({status: "active"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))

});

/*Routing to Search Declined Events*/
router.route('/declined').get((req,res) => {
    events.find({status: "declined"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))

});

/*Taking Ticket Info Table Details in Pending/Active/Declined Events Tabs*/
router.route('/ticketdetails/:id').get((req,res) => {
    ticketLevels.find({event_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});


/*Taking User Details to Get the Organizer Name in Pending/Active/Declined Events Tabs*/
router.route('/organizer/:id').get((req,res) => {
    users.find({user_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});


/*Routing to Search Seller Data to Approve*/
router.route('/sellerapprove').get((req,res) => {
    users.find({status: "false"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))

});

/*Update Seller Status to "True"*/
router.route('/sellerapproveupdate/:id').put((req,res) => {
    users.findById(req.params.id)
        .then(data =>{
            data.status = true;

            data.save()
                .then(()=> res.status(200).json("data updated"))
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
});


/*Update Ticket Status to "Active"*/
router.route('/activeticket/:id').put((req,res) => {
    events.findById(req.params.id)
        .then(data =>{
            data.status = 'active';
            data.save()
                .then(()=> res.status(200).json("data updated"))
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
});


/*Update Ticket Status to "Declined"*/
router.route('/declinedticket/:id').put((req,res) => {
    events.findById(req.params.id)
        .then(data =>{
            data.status = 'declined';
            data.comment = 'Your event has been declined'; /*this is a tempory message, it may taken from message box later*/
            data.save()
                .then(()=> res.status(200).json("data updated"))
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
});



module.exports = router;