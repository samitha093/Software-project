const router = require('express').Router();
const User = require('../models/users');
const tickets = require('../models/tickets');
const orders = require('../models/orders')
const crons = require('../models/cron');
const {verifyAccessToken,buyerverification} = require('../auth/jwt');
const {getusername, getuserid} = require('../middlewares/user');
const Bids = require('../models/bid');

/**
 * @swagger
 *  components:
 *      schemas:
 *          addtickets:
 *              type: object
 *              required:
 *                  - cart
 *              properties:
 *                  cart:
 *                      type: string
 *              example:
 *                  cart: "?"
 *          bids:
 *              type: object
 *              required:
 *                  - bid_amount
 *                  - ticketcount
 *                  - ticketid
 *                  - eventid
 *              properties:
 *                  bid_amount:
 *                      type: Number
 *                  ticketcount:
 *                      type: Number
 *                  ticketid:
 *                      type: string
 *                  eventid:
 *                      type: string
 * 
 *              example:
 *                  bid_amount: 0
 *                  ticketcount: 0
 *                  ticketid: "?"
 *                  eventid: "?"
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
 router.route('/gettickets/:type').get(verifyAccessToken,buyerverification,getuserid,async(req,res) => {
  const userid = req.userid;
  const type = req.params.type;
  await User.findById(userid).then(async(data) =>{
    var subdata = data.tickets;
    if(type == 'mt'){
      subdata = await subdata.filter(val => (val.ticket_status == false && val.bid_status == false))
    }else if(type == 'pp'){
      subdata = await subdata.filter(val => (val.payment_status == true && val.bid_status == true))
    }else if(type == 'pb'){
      subdata = await subdata.filter(val => (val.payment_status == false && val.bid_status == true))
    }else if(type == 'ot'){
      subdata = await subdata.filter(val => (val.ticket_status == true))
    }else{
      res.status(200).json("not found data")
      return;
    }
  res.status(200).json(subdata)
  })

 })

/**
 * @swagger
 * '/b/order':
 *  post:
 *     tags:
 *     - User-buyer
 *     summary: add ticket for user (Web-hook*)
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
 router.route('/order').post(verifyAccessToken,buyerverification,getuserid,async(req,res) => {
    const userid = req.userid;
    const usertype = req.userdata.type;

   const neworder = new orders({
    userid,
    usertype
   });
   var orderid = await neworder.save().then((result)=>{return result._id})
   //console.log(orderid);
  //console.log(req.body.cart)
  const cart = req.body.cart;
  for (let item of cart) {
    await tickets.findById(item.itemid)
      .then(async(data) =>{
        data.buy_quantity -= item.qty;
        data.save()
          .then(()=> console.log("ticket updated"))
          .catch(err => console.log(err))
        //console.log(req.userid);
        //console.log(req.userdata.type);
      })
    }
    await orders.findById(orderid)
    .then(async(ordersata)=> {
      ordersata.tickets = cart;
      ordersata.save()
          .then(()=> console.log("oder updated"))
          .catch(err => console.log(err))
    })

    const job_type = "B";
    const job_name = "CREATE_QR";
    const job_id = orderid;
    const job_status = true;         
    const newcrons = new crons({
        job_type,
        job_name,
        job_id,
        job_status,
        });
    newcrons.save()
    res.status(200).json("Sys Prop Enabled")
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
 *              $ref: '#/components/schemas/bids'
 *     responses:
 *      200:
 *        description: added to account
 *      400:
 *        description: error for adding
 *      500:
 *        description: server error
 */
 router.route('/bid').post(verifyAccessToken,buyerverification,getuserid,(req,res) => {
  var response = {};
  const bid_amount = req.body.bid_amount;
  const ticketcount = req.body.ticketcount;
  const ticketid = req.body.ticketid;
  const eventid = req.body.eventId;
  const userid = req.userid;
      const newbid = new Bids({
        bid_amount,
        ticketcount,
        ticketid,
        eventid,
        userid,
      });

      newbid.save()
          .then((result)=> {
              tickets.findById(ticketid).then(ticketdata =>{
                ticketdata.bids.push(result._id);
                ticketdata.save();
                console.log(req.body.eventId);
                User.findById(userid).then(userdata =>{
                  const ticket ={
                    "eventId":eventid,
                    "ticketid": ticketid,
                    "bidid":result._id,
                    "bid_status":true,
                  }
                  userdata.tickets.push(ticket);
                  userdata.save()
                  res.status(200).json(result._id);
                })
              })
          })
          .catch(err => res.status(500).json(err))
});

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


/**
 * @swagger
 * '/b/bidbyid/{bidid}':
 *  get:
 *     tags:
 *     - User-buyer
 *     summary: Get bid data by id(Public Link*)
 *     parameters:
 *      - in: path
 *        name: bidid
 *        schema:
 *          type: String
 *     requestBody:
 *      required: false
 *     responses:
 *      200:
 *        description: Success
 *      400:
 *        description: error
 *      500:
 *        description: Server failure
 */
 router.route('/bidbyid/:bidid').get(async(req,res) => {
  Bids.findById(req.params.bidid)
      .then(data =>{res.status(200).json(data)})
      .catch(err => res.status(400).json("Wrong db connection"))
});

module.exports = router;