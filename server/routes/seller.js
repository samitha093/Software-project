const router = require('express').Router();
const events = require('../models/events');
const ticketLevels = require('../models/ticketLevels');
const users = require('../models/users');
const jwt = require('jsonwebtoken');

function authtoken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, "hjfhsahf282714ndflsd8we0" , (err, data)=>{
        if(err) return res.sendStatus(403)
        next();
    } )
 
}

router.route('/events').post((req,res) => {
    const event_name = req.body.EventName;
    const event_venue = req.body.EventVenue;
    const event_date = req.body.EventDate
    const event_time = req.body.EventTime
    const ticket_level = req.body.TicketLevel
    const image_url = req.body.ImageUrl
    const user_id = req.body.UserId
    const newevents = new events({
        event_name,
        event_venue,
        event_date,
        event_time,
        ticket_level,
        image_url,
        user_id
    });
    newevents.save()
        .then(()=> res.status(200).json("event created"))
        .catch(err => res.status(400).json(err))
    
});

router.route('/ticketlevels').post((req,res) => {
    const ticket_level = req.body.TicketLevel;
    const buy_quantity = req.body.BuyQuantity;
    const buy_amount = req.body.BuyAmount
    const bid_quantity = req.body.BidQuantity
    const bid_amount = req.body.BidAmount
    const event_id = req.body.EventId
    const newticketLevels = new ticketLevels({
        ticket_level,
        buy_quantity,
        buy_amount,
        bid_quantity,
        bid_amount,
        event_id
    });
    newticketLevels.save()
        .then(()=> res.status(200).json("Tickets created"))
        .catch(err => res.status(400).json(err))
    
});

router.route('/pending/:id').get((req,res) => {
    events.find({user_id:req.params.id, status:"pending"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});

router.route('/active/:id').get((req,res) => {
    events.find({user_id:req.params.id, status:"active"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});

router.route('/end/:id').get((req,res) => {
    events.find({user_id:req.params.id, status:"end"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});

router.route('/declined/:id').get((req,res) => {
    events.find({user_id:req.params.id, status:"decclined"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});

router.route('/details/:id').get((req,res) => {
    ticketLevels.find({event_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});

router.route('/userdetails/:id').get((req,res) => {
    users.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});

router.route('/delete/:id').delete(authtoken,(req,res) => {
    testmdel.findByIdAndDelete(req.params.id)
        .then(()=> res.status(200).json("event deleted"))
        .catch(err => res.status(400).json(err))
});

module.exports = router;