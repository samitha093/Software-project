const mongoose = require('mongoose');
mongoose.plugin(require('meanie-mongoose-to-json'));

const schema = mongoose.Schema;

const bidschema = new schema({
    order_status: {type:Boolean, required:true},
    no_of_tickets: {type:Number, required:true},
    paid_amount:{type:Number, required:true},
    user_id:{type:String, required:true}
},{
    timestamps:true
});

const bids = mongoose.model('bids',bidschema);
module.exports = bids