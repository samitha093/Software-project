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


/*Taking User Details to Get the Organizer Name*/
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
    const user_id = req.body.UserId

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



module.exports = router;