const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const qrschema = new schema({
    qr: {type:String},
    validity:{type:Boolean, default:false},
    status: {type:Boolean, default:false},
    userid:{type:String},
},{
    timestamps:true
});

const qr = mongoose.model('qr',qrschema);
module.exports = tickets