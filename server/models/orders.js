const mongoose = require('mongoose');
mongoose.plugin(require('meanie-mongoose-to-json'));

const schema = mongoose.Schema;

const orderschema = new schema({
    order_status: {type:Boolean, required:true},
    no_of_tickets: {type:Number, required:true},
    paid_amount:{type:Number, required:true},
    user_id:{type:String, required:true}
},{
    timestamps:true
});

const orders = mongoose.model('orders',orderschema);
module.exports = orders