const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const bidschema = new schema({
    bid_amount: {type:Number},
    ticketcount: {type:Number},
    ticketid: {type:String},
    userid: {type:String},
},{
    timestamps:true
});

const bids = mongoose.model('bids',bidschema);
module.exports = bids