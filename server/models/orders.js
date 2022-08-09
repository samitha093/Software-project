const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const ticketschema = new schema({
    itemid:{type:String },
    qty:{type:String},
},{
    timestamps:true
});

const orderschema = new schema({
    usertype: {type:String},//Guest or buyer
    userid:{type:String},//if guest auto generate id and assign it 
    tickets:[ticketschema],
},{
    timestamps:true
});

const orders = mongoose.model('orders',orderschema);
module.exports = orders