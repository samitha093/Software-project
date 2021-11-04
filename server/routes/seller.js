const router = require('express').Router();
const events = require('../models/events');
const ticketLevels = require('../models/ticketLevels');


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


module.exports = router;