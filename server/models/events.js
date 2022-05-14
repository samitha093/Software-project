const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const ticketschema = new schema({
    ticket_level: {type:Number},
    buy_quantity: {type:Number},
    buy_amount: {type:Number},
    bid_quantity: {type:Number},
    min_bid_amount: {type:Number},
    ticketid: {type:String},//can be null , submit from manager
},{
    timestamps:true
});

const commentschema = new schema({
    comment: {type:String}, //get fro manager side 
},{
    timestamps:true
});

const eventschema = new schema({
    username:{type:String }, // get from middle-ware
    event_name: {type:String},
    event_venue: {type:String},
    event_date: {type:String},
    event_time: {type:String},
    levelcount: {type:Number},
    image_url : {type:String},
    total_tickets : {type:Number,default: 0 },// not in form
    publishevent_date: {type:String},
    endevent_date: {type:String},
    event_category: {type:String},
    area: {type:String},
    comments: [commentschema],//can be null in begining
    tickets: [ticketschema],
    status: {type:String, default:'PENDING'},//set from back-end
    userid:{type:String}, //get from middle-ware
},{
    timestamps:true
});

const events = mongoose.model('events',eventschema);
module.exports = events