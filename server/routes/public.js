const router = require('express').Router();
const ticketLevels = require('../models/ticketLevels');

router.route('/').get((req,res) => {
    ticketLevels.find({status: "active"})
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))

});

module.exports = router;