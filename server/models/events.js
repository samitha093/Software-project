const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const ticketschema = new schema({
    ticket_level: {type:Number},
    buy_quantity: {type:Number},
    buy_amount: {type:Number},
    bid_quantity: {type:Number},
    min_bid_amount: {type:Number},
    ticketid: {type:String},
},{
    timestamps:true
});

const commentschema = new schema({
    comment: {type:String},
},{
    timestamps:true
});

const eventschema = new schema({
    username:{type:String },
    event_name: {type:String},
    event_venue: {type:String},
    event_date: {type:String},
    event_time: {type:String},
    image_url : {type:String},
    publishevent_date: {type:String},
    endevent_date: {type:String},
    event_category: {type:String},
    total_tickets : {type:Number},
    area: {type:String},
    comments: [commentschema],
    tickets: [ticketschema],
    status: {type:String, default:'pending'},
    userid:{type:String},
},{
    timestamps:true
});

const events = mongoose.model('events',eventschema);
module.exports = events