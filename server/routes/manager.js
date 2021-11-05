const router = require('express').Router();
const events = require('../models/events');
const ticketLevels = require('../models/ticketLevels');
const users = require('../models/users');

/*Routing to search pending events*/
router.route('/pending').get((req,res) => {
    events.find({status: "pending"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))

});

/*Routing to search active events*/
router.route('/active').get((req,res) => {
    events.find({status: "active"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))

});

/*Routing to search declined events*/
router.route('/declined').get((req,res) => {
    events.find({status: "declined"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))

});

/*Routing to search seller data to approve*/
router.route('/sellerapprove').get((req,res) => {
    users.find({status: "false"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))

});





module.exports = router;