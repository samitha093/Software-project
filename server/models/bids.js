const mongoose = require('mongoose');
mongoose.plugin(require('meanie-mongoose-to-json'));

const schema = mongoose.Schema;

const bidschema = new schema({
    no_of_tickets: {type:Number, required:true},
    bid_amount: {type:Number, required:true},
    ticket_level_id:{type:String, required:true},
    user_id:{type:String, required:true},
    order_id:{type:String, required:false}
},{
    timestamps:true
});

const bids = mongoose.model('bids',bidschema);
module.exports = bids