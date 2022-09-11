const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const ticketschema = new schema({
    ticket_level: {type:Number},// in ticket
    buy_quantity: {type:Number}, //in ticket
    buy_amount: {type:Number},//in ticket
    nosold: {type:Number,default: 0},
    bid_quantity: {type:Number,},//in ticket
    min_bid_amount: {type:Number,},//in ticket
    nobids: {type:Number,default: 0},
    total_tickets : {type:Number,}, //calcutaed
    event_name: {type:String},
    event_venue: {type:String},
    event_date: {type:String},
    event_time: {type:String},
    event_category: {type:String},
    area: {type:String},
    img: {type:String},
    status: {type:Boolean, default:true},
    eventid:{type:String},
    userid:{type:String},
    bids : [String], // null in the begin
    qrs : [String], // null in the begin
    orders : [String], // null in the begin
},{
    timestamps:true
});

const tickets = mongoose.model('tickets',ticketschema);
module.exports = tickets