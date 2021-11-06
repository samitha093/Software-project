const router = require('express').Router();
const jwt = require('jsonwebtoken');
const orders = require('../models/orders');
const tickets = require('../models/tickets');
const bids = require('../models/bids');

//Authentificat tokens
function authtoken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, "hjfhsahf282714ndflsd8we0" , (err, data)=>{
        if(err) return res.sendStatus(403)
        next();
    } )
 
}

module.exports = router;