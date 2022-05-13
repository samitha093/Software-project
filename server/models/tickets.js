const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const bidschema = new schema({
    bid_amount: {type:Number},
    bid_tickets: {type:Number},
    total_amount: {type:Number},
    userid: {type:String},
},{
    timestamps:true
});

const ticketschema = new schema({
    ticket_level: {type:Number},
    buy_quantity: {type:Number},
    buy_amount: {type:Number},
    nosold: {type:Number,},
    bid_quantity: {type:Number,},
    min_bid_amount: {type:Number,},
    nobids: {type:Number,},
    total_tickets : {type:Number,},
    event_name: {type:String},
    event_venue: {type:String},
    event_date: {type:String},
    event_category: {type:String},
    area: {type:String},
    bids : [bidschema],
    status: {type:String},
    eventid:{type:String},
    userid:{type:String},
},{
    timestamps:true
});

const tickets = mongoose.model('tickets',ticketschema);
module.exports = tickets