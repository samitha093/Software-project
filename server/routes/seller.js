const router = require('express').Router();
const path = require('path')
const multer  = require('multer');
const events = require('../models/events');
const {verifyAccessToken,sellerverification} = require('../auth/jwt');
const {getusername, getuserid} = require('../middlewares/user');

/**
 * @swagger
 *  components:
 *      schemas:
 *          createaevent:
 *              type: object
 *              required:
 *                  - event_name
 *                  - event_venue
 *                  - event_date
 *                  - event_time
 *                  - levelcount
 *                  - image_url
 *                  - publishevent_date
 *                  - endevent_date
 *                  - event_category
 *                  - area
 *              properties:
 *                  event_name:
 *                      type: string
 *                  event_venue:
 *                      type: string
 *                  event_date:
 *                      type: string
 *                  event_time:
 *                      type: string
 *                  levelcount:
 *                      type: Number
 *                  image_url:
 *                      type: string
 *                  publishevent_date:
 *                      type: string
 *                  endevent_date:
 *                      type: string
 *                  event_category:
 *                      type: string
 *                  area:
 *                      type: string
 *              example:
 *                  event_name: "?"
 *                  event_venue: "?"
 *                  event_date: "?"
 *                  event_time: "?"
 *                  levelcount: 0
 *                  image_url: "?"
 *                  publishevent_date: "?"
 *                  endevent_date: "?"
 *                  event_category: "?"
 *                  area: "?"
 *          createaticket:
 *              type: object
 *              required:
 *                  - ticket_level
 *                  - buy_quantity
 *                  - buy_amount
 *                  - bid_quantity
 *                  - min_bid_amount
 *              properties:
 *                  ticket_level:
 *                      type: Number
 *                  buy_quantity:
 *                      type: Number
 *                  buy_amount:
 *                      type: Number
 *                  bid_quantity:
 *                      type: Number
 *                  min_bid_amount:
 *                      type: Number
 *              example:
 *                  ticket_level: 0
 *                  buy_quantity: 0
 *                  buy_amount: 0
 *                  bid_quantity: 0
 *                  min_bid_amount: 0
 */

/**
  * @swagger
  * tags:
  *   name: File-upload-proxy
  *   description: Public Routes
  */

  /**
   * @swagger
   * '/s/upload':
   *    post:
   *        tags:
   *            - File-upload-proxy
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
const  storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        const name = Date.now() + path.extname(file.originalname)
        //console.log(name);
        cb(null, name);
    },
});
const upload = multer({storage: storage});

router.route("/upload").post (upload.single('Img'),(req, res) => {
    res.status(200).json(`img/${req.file.filename}`);

});

/**
  * @swagger
  * tags:
  *   name: User-seller
  *   description: Private Routes
  */

/**
 * @swagger
 *  '/s/createaevent':
 *      post:
 *          tags:
 *              - User-seller
 *          summary: Create a Event
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/createaevent'
 *          responses:
 *              200:
 *                  description: Success(Event id)
 *              400:
 *                  description: Registration Error
 *              500:
 *                  description: Server failure
 */

 router.route('/createaevent').post(verifyAccessToken,sellerverification,getusername,getuserid,(req,res) => {
    const username = req.username;
    const event_name = req.body.event_name;
    const event_venue = req.body.event_venue;
    const event_date = req.body.event_date;
    const event_time = req.body.event_time;
    const levelcount = req.body.levelcount;
    const image_url = req.body.image_url;
    const publishevent_date = req.body.publishevent_date;
    const endevent_date = req.body.endevent_date;
    const event_category = req.body.event_category;
    const area = req.body.area;
    const userid = req.userid;
    //console.log(req.body);
    const newevent = new events({
        username,
        event_name,
        event_venue,
        event_date,
        event_time,
        levelcount,
        image_url,
        publishevent_date,
        endevent_date,
        event_category,
        area,
        userid,
        });
    newevent.save()
        .then((result)=> res.status(200).json(result._id))
        .catch(err => res.status(500).json(err)) 
});

/**
 * @swagger
 *  '/s/createaticket/{eventid}':
 *      post:
 *          tags:
 *              - User-seller
 *          summary: Create a Ticket (one by one link *)
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
 *                          $ref: '#/components/schemas/createaticket'
 *          responses:
 *              200:
 *                  description: Success
 *              400:
 *                  description: Registration Error
 *              500:
 *                  description: Server failure
 */
router.route('/createaticket/:eventid').post(verifyAccessToken,sellerverification,(req,res) => {
    events.findById(req.params.eventid)
        .then(data =>{
            data.tickets.push(req.body);
            data.save()
                .then((result)=> res.status(200).json("Ticket Added"))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(400).json(err))
});

/**
 * @swagger
 *  '/s/getevent/{type}':
 *      get:
 *          tags:
 *              - User-seller
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
 router.route('/getevent/:type').get(verifyAccessToken,sellerverification,getuserid,(req,res) => {
    events.find({userid:req.userid, status:req.params.type.toUpperCase()})
        .then(data =>{
            if(data.length>0){
                res.status(200).json(data)
            }else{
                res.status(200).json("No data Found")
            }
        })
        .catch(err => res.status(500).json("Server error"))
});

/**
 * @swagger
 *  '/s/updateaevent/{eventid}':
 *      put:
 *          tags:
 *              - User-seller
 *          summary: Update a Event
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
 *                          $ref: '#/components/schemas/createaevent'
 *          responses:
 *              200:
 *                  description: Success(Event id)
 *              400:
 *                  description: Registration Error
 *              500:
 *                  description: Server failure
 */

 router.route('/updateaevent/:eventid').put(verifyAccessToken,sellerverification,getuserid,(req,res) => {
    //console.log(req.userdata.email);
     events.findById(req.params.eventid)
         .then(data =>{
            if(data[0].userid == req.userid){
                data.event_name = req.body.event_name;
                data.event_venue = req.body.event_venue;
                data.event_date = req.body.event_date;
                data.event_time = req.body.event_time;
                data.levelcount = req.body.levelcount;
                data.image_url = req.body.image_url;
                data.publishevent_date = req.body.publishevent_date;
                data.endevent_date = req.body.endevent_date;
                data.event_category = req.body.event_category;
                data.area = req.body.area;
                data.save()
                    .then(()=> res.status(200).json("Event updated"))
                    .catch(err => res.status(500).json(err))
            }else{
                return res.sendStatus(403);
            }
         })
         .catch(err => res.status(400).json(err))
  });

/**
 * @swagger
 *  '/s/updateaticket/{eventid}/{ticketid}':
 *      put:
 *          tags:
 *              - User-seller
 *          summary: Update a Ticket (one by one link *)
 *          parameters:
 *              - in: path
 *                required: false
 *                name: eventid
 *                schema:
 *                  type: String
 *              - in: path
 *                required: false
 *                name: ticketid
 *                schema:
 *                  type: String
 *          requestBody:
 *              required: false
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/createaticket'
 *          responses:
 *              200:
 *                  description: Success
 *              400:
 *                  description: Update Error
 *              500:
 *                  description: Server failure
 */

router.route('/updateaticket/:eventid/:ticketid').put(verifyAccessToken,sellerverification,getuserid.apply,(req,res) => {
    events.findOne({_id:req.params.eventid})
    .then(data =>{
        if(data[0].userid == req.userid){
            const subdoc = data.tickets;
            if(subdoc){
                subdoc.map((dt)=>{
                    if(dt._id == req.params.ticketid){
                        dt.ticket_level = req.body.ticket_level;
                        dt.buy_quantity = req.body.buy_quantity;
                        dt.buy_amount = req.body.buy_amount;
                        dt.bid_quantity = req.body.bid_quantity;
                        dt.min_bid_amount = req.body.min_bid_amount;
                    }
                })
            }else{
                res.status(400).json("not found tickets")
            }
            data.save()
                    .then(()=> res.status(200).json("ticket updated"))
                    .catch(err => res.status(500).json(err))
        }else{
            return res.sendStatus(403);
        }
    })
    .catch(err => res.status(400).json(err))
});

/**
 * @swagger
 *  '/s/deleteaticket/{eventid}':
 *      delete:
 *          tags:
 *              - User-seller
 *          summary: delete a Event
 *          parameters:
 *              - in: path
 *                required: false
 *                name: eventid
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
 router.route('/deleteaticket/:eventid').delete(verifyAccessToken,sellerverification,getuserid,async (req,res) => {
    events.findOne({_id:req.params.eventid})
    .then(data =>{
        if(data[0].userid == req.userid){
            events.findByIdAndRemove(req.params.eventid, function(err){
                if(err){
                    res.status(500).json(err);
                } else {
                    res.status(200).json("event deleted");
                }  
            });
        }else{
            return res.sendStatus(403);
        }
    })
});

/**
 * @swagger
 *  '/s/deleteaticket/{eventid}/{ticketid}':
 *      delete:
 *          tags:
 *              - User-seller
 *          summary: delete a Ticket
 *          parameters:
 *              - in: path
 *                required: false
 *                name: eventid
 *                schema:
 *                  type: String
 *              - in: path
 *                required: false
 *                name: ticketid
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
 router.route('/deleteaticket/:eventid/:ticketid').delete(verifyAccessToken,sellerverification,getuserid,async (req,res) => {
    events.findOne({_id:req.params.eventid})
    .then(data =>{
        if(data[0].userid == req.userid){
            var subdoc = data.tickets;
            subdoc = subdoc.filter(val => !(val._id == req.params.ticketid))
            data.tickets = subdoc;
            data.save()
                    .then(()=> res.status(200).json("ticket deleted"))
                    .catch(err => res.status(500).json(err))
        }else{
            return res.sendStatus(403);
        }
    })
    .catch(err => res.status(400).json(err))

});

module.exports = router;