const mongoose = require('mongoose');
mongoose.plugin(require('meanie-mongoose-to-json'));

const schema = mongoose.Schema;

const ticketLevelschema = new schema({
    ticket_level: {type:Number, required:true},
    buy_quantity: {type:Number, required:true},
    buy_amount: {type:Number, required:true},
    bid_quantity: {type:Number,},
    bid_amount: {type:Number,},
    bid_count : {type:Number,},
    event_id: {type:String, required:true}
},{
    timestamps:true
});

const ticketLevels = mongoose.model('ticketLevels',ticketLevelschema);
module.exports = ticketLevels