const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const ticketschema = new schema({
    ticket_level: {type:Number},
    level_name: {type:String, default:""},
    buy_quantity: {type:Number, default:0},
    buy_amount: {type:Number, default:0},
    bid_quantity: {type:Number, default:0},
    min_bid_amount: {type:Number, default:0},
    views:{type:Number, default:0},
},{
    timestamps:true
});

const eventschema = new schema({
    views: {type:Number,default:0},
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
    comments: [String],//can be null in begining
    status: {type:String, default:'PENDING'},//set from back-end
    userid:{type:String}, //get from middle-ware
    tickets: [ticketschema],
},{
    timestamps:true
});

const events = mongoose.model('events',eventschema);
module.exports = events