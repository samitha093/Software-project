const router = require('express').Router();
const path = require('path')
const multer  = require('multer');
const events = require('../models/events');
const tickets = require('../models/tickets');
const User = require('../models/users');
const Bids = require('../models/bid');
const Qr = require('../models/qr');
const devices = require('../models/devices');
const sellerAnalitics = require('../models/sellerD')
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
 *          ticketvalidate:
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
                res.status(400).json("No data Found")
            }
        })
        .catch(err => res.status(500).json("Server error"))
});

/**
 * @swagger
 *  '/s/event/bid/{eventid}':
 *      get:
 *          tags:
 *              - User-seller
 *          summary: get event data
 *          parameters:
 *              - in: path
 *                required: false
 *                name: eventid
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
 router.route('/event/bid/:eventid').get(verifyAccessToken,(req,res) => {
    Bids.find({eventid:req.params.eventid}).then(async (Bdata) =>{
        var jsondata = [];
        for (i in Bdata) {
            var response = await User.findById(Bdata[i].userid).then(async Udata =>{
                return await events.findById(Bdata[i].eventid).then(async Edata =>{
                    return await tickets.findById(Bdata[i].ticketid).then(async Tdata =>{
                        var response = {
                            bidid:Bdata[i].id,
                            tickets:Bdata[i].ticketcount,
                            amount:Bdata[i].bid_amount,
                            username:Udata.username,
                            email:Udata.email,
                            ticketLevel:Tdata.ticket_level,
                        }
                        return response;
                    })
                })
            })
            jsondata.push(response);
        };

        await res.status(200).json(jsondata);
    }).catch(err => res.status(200).json("Server error"))
});

/**
 * @swagger
 *  '/s/event/buy/{eventid}':
 *      get:
 *          tags:
 *              - User-seller
 *          summary: get event data
 *          parameters:
 *              - in: path
 *                required: false
 *                name: eventid
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
//  router.route('/event/buy/:eventid').get(verifyAccessToken,sellerverification,getuserid,(req,res) => {
 router.route('/event/buy/:eventid').get(verifyAccessToken,(req,res) => {
    var jsondata = [];
     tickets.find({eventid:req.params.eventid}).then(async Edata =>{
        for (i in Edata) {
            await Qr.find({ticketid:Edata[i].id}).then(async (Qrdata) =>{
                for (j in Qrdata) {

                    var json_j = await User.findById(Qrdata[j].userid).then(async Udata =>{

                        var response = {
                            qrid:Qrdata[j].id,
                            validity:Qrdata[j].validity,
                            status:Qrdata[j].status,
                            ticketLevel:Edata[i].ticket_level,
                            username:Udata.username,
                            email:Udata.email,
                            type:Udata.usertype,
                        }
                        return(response);
                    })
                    jsondata.push(json_j);
                }
            })
        }
        res.status(200).json(jsondata);
    }).catch(err => res.status(500).json("Server error"))
});

/**
 * @swagger
 *  '/s/event/ticket/{eventid}':
 *      get:
 *          tags:
 *              - User-seller
 *          summary: get event summary data
 *          parameters:
 *              - in: path
 *                required: false
 *                name: eventid
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
 router.route('/event/ticket/:eventid').get((req,res) => {
    var jsondata = [];
    events.findById(req.params.eventid).then(async Edata => {
        tickets.find({eventid:req.params.eventid}).then(async Tdata =>{
            for (i in Tdata) {
                var p3_cal = Math.round((Tdata[i].nosold/Tdata[i].buy_quantity)*100);
                var b3_cal = Math.round((Tdata[i].nobids/Tdata[i].bid_quantity)*100);
                var b3_any = Math.round(b3_cal<100?b3_cal<50?b3_cal<30?1:2:3:4);
                var response = {
                    Abids:Tdata[i].nobids,
                    Abuy:Tdata[i].nosold,
                    bid:Tdata[i].bid_quantity,
                    buy:Tdata[i].buy_quantity,
                    level:Tdata[i].ticket_level,
                    b3:b3_any,
                    p3:p3_cal,
                }
                jsondata.push(response);
            }
            res.status(200).json(jsondata);
         })
    }).catch(err => res.status(500).json("Server error"))
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


/**
 * @swagger
 *  '/s/getdashboard/':
 *      get:
 *          tags:
 *              - User-seller
 *          summary: get seller dashboard data
 *          responses:
 *              200:
 *                  description: Success
 *              404:
 *                  description: No data found
 *              500:
 *                  description: Server failure
 */
router.route('/getdashboard').get(verifyAccessToken,sellerverification,getuserid,async (req,res) => {
    const userid = req.userid;
    var result = await sellerAnalitics.find({sellerid:userid}).then(result=>{return result}).catch(err => console.log(err))
    //console.log(result)
    const historydata = [
        {id: 1,userGain: 80000,},
        {id: 2,userGain: 45677,},
        {id: 3,userGain: 78888,},
        {id: 4,userGain: 90000,},
        {id: 5,userGain: 4300,},
        {id: 6,userGain: 80000,},
        {id: 7,userGain: 45677,},
        {id: 8,userGain: 78888,},
        {id: 9,userGain: 90000,},
        {id: 10,userGain: 4300,},
        {id: 11,userGain: 80000,},
        {id: 12,userGain: 45677,},
        {id: 13,userGain: 78888,},
        {id: 14,userGain: 90000,},
        {id: 15,userGain: 4300,},
        {id: 16,userGain: 80000,},
        {id: 17,userGain: 45677,},
        {id: 18,userGain: 78888,},
        {id: 19,userGain: 90000,},
        {id: 20,userGain: 4300,},
        {id: 21,userGain: 80000,},
        {id: 22,userGain: 45677,},
        {id: 23,userGain: 78888,},
        {id: 24,userGain: 90000,},
        {id: 24,userGain: 90000,},
        {id: 25,userGain: 90000,},
        {id: 26,userGain: 60000,},
        {id: 27,userGain: 30600,},
        {id: 28,userGain: 90000,},
        {id: 29,userGain: 40000,},
        {id: 30,userGain: 90000,},
    ];
    const historydata2 = [
        {id: 1,year: 'By Bid',userLost: 829,},
        {id: 2,year: 'Direct Buy',userLost: 329,}
    ];
    var result = await tickets.find({userid:userid}).then(result=>{return result}).catch(err => console.log(err))
    console.log(result)
    const activeEventsdata = []
    for(i=0;i<result.length;i++){
        activeEventsdata[i]= {"id" : result[i]._id, "name":result[i].event_name, "level":result[i].ticket_level, "revenue":result[i].views,"p1":result[i].nosold,"p2":result[i].buy_quantity,"p3":"1%","b1":result[i].nobids,"b2":result[i].bid_quantity,'b3':1,"status":"DEACTIVE",}
    }
    console.log(activeEventsdata)
    // const activeEvents = [
    //     {"id" : "14gsd54a3sfdc", "name":"Test Event 1", "level":"level 1", "revenue":"12,454","p1":1,"p2":120,"p3":"1%","b1":0,"b2":150,'b3':1,"status":"DEACTIVE",},
    //     {"id" : "14gsd54e3sfdc", "name":"Test Event 2", "level":"level 2", "revenue":"14,156","p1":190,"p2":1500,"p3":"11%","b1":190,"b2":200,'b3':3, "status":"ACTIVE",},
    //     {"id" : "14gsd54a3shdc", "name":"Test Event 3", "level":"level 3", "revenue":"2,456","p1":1,"p2":25000,"p3":"1%","b1":10,"b2":130,'b3':1, "status":"DEACTIVE",},
    //     {"id" : "14gsd54a6sfdc","name":"Test Event 4", "level":"level 4", "revenue":"12,476" ,"p1":12000,"p2":45000,"p3":"42%","b1":11,"b2":20,'b3':2, "status":"ACTIVE",},
    //     {"id" : "14gsd54a6sfdc","name":"Test Event 5", "level":"level 5", "revenue":"12,156","p1":72,"p2":12000,"p3":"1%","b1":30,"b2":12000,'b3':1, "status":"DEACTIVE",},
    //     {"id" : "14gsd54a6sfdc","name":"Test Event 6", "level":"level 6", "revenue":"22,756","p1":990,"p2":1000,"p3":"99%","b1":50000,"b2":34000,'b3':4, "status":"PENDING",}
    // ];
    var response = {
        "dataset1":[42000,13670,55670,45],
        "dataset2":[65,24000,12900,54],
        "dataset3":[13,12,15,32],
        "dataset4":historydata,
        "dataset5":historydata2,
        "dataset6":activeEventsdata
    }
    res.status(200).json(response)
});

/**
 * @swagger
 *  '/s/ticketvalidate':
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
 *                          $ref: '#/components/schemas/ticketvalidate'
 *          responses:
 *              200:
 *                  description: Success
 *              400:
 *                  description: update error
 *              500:
 *                  description: Server failure
 */
router.route('/ticketvalidate').post((req,res) => {
    devices.findById(req.body.device).then(data =>{
        //console.log(data.sellerid,req.body.scan)
        Qr.findById(req.body.scan).then(QRdata =>{
            if(QRdata.validity ==true && QRdata.status ==true){
                QRdata.validity =false
                QRdata.save()
                console.log(QRdata)
                res.status(200).json("ok")
            }else{
                res.status(400).json("wrong QR code")
            }
        }).catch(err => res.status(400).json("wrong QR code"))
    }).catch(err => res.status(400).json("not compatible device"))
});

/**
 * @swagger
 *  '/s/ticketvalidatelogout/{deviceid}':
 *      get:
 *          tags:
 *              - User-seller
 *          summary: get event data
 *          parameters:
 *              - in: path
 *                required: false
 *                name: deviceid
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
router.route('/ticketvalidatelogout/:deviceid').get((req,res) => {
    devices.findById(req.params.deviceid).then(async (data) =>{
        data.deviceStatus="LOGOUT"
        data.save()
        res.status(200).json("logout")
    }).catch(err => res.status(200).json("Server error"))
});

module.exports = router;