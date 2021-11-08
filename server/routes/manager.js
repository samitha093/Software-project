const router = require('express').Router();
const events = require('../models/events');
const ticketLevels = require('../models/ticketLevels');
const users = require('../models/users');

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
    const user_name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const user_type = req.body.userType;
    const status = req.body.userStatus;
    const user_id = req.body.UserId;

    users.findById(req.params.id)
        .then(data =>{
            data.name = user_name;
            data.email = email;
            data.contact = contact;
            data.password = password;
            data.userType = user_type;
            data.userStatus = status;
            data.UserId = user_id;

            data.save()
                .then(()=> res.status(200).json("data updated"))
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
});


/*Update Ticket Status to "Active"*/
router.route('/activeticket/:id').put((req,res) => {
    const Status = req.body.status;
    const EventName = req.body.event_name;
    const EventVenue = req.body.event_venue;
    const EventDate = req.body.event_date;
    const EventTime = req.body.event_time;
    const TicketLevel = req.body.ticket_level;
    const ImageUrl = req.body.image_url;
    const UserId = req.body.user_id;
    /*const EventId = req.body.event_id;*/

    users.findById(req.params.id)
        .then(data =>{
            data.event_name = EventName;
            data.event_venue = EventVenue;
            data.event_date = EventDate;
            data.event_time = EventTime;
            data.ticket_level = TicketLevel;
            data.image_url = ImageUrl;
            data.status = Status;
            data.user_id = req.body.UserId;
            /*data.event_id = EventId;*/
            
            data.save()
                .then(()=> res.status(200).json("data updated"))
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
});



module.exports = router;