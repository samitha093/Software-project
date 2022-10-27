const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const qrschema = new schema({
    userid:{type:String},
    ticketid:{type:String},
    qty:{type:Number},
    validity:{type:Boolean, default:true},
    status: {type:Boolean, default:true},
},{
    timestamps:true
});

const qr = mongoose.model('qr',qrschema);
module.exports = qr