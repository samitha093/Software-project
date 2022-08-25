const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const qrschema = new schema({
    qrid:{type:String},
},{
    timestamps:true
});

const bidschema = new schema({
    bidid:{type:String},
},{
    timestamps:true
});

const ticketschema = new schema({
    bid_status:{type:Boolean, default:false},
    payment_status:{type:Boolean, default:false},
    ticket_status:{type:Boolean, default:false},
    qr:[qrschema],
    bid:[bidschema],
    eventid:{type:String},
    ticketid: {type:String},
},{
    timestamps:true
});


const userschema = new schema({
    username:{type:String },
    email:{type:String },
    contact:{type:String },
    password:{type:String },
    usertype:{type:String },
    otp:{type:String, default:0},
    secret:{type:String},
    token:{type:String},
    tickets: [ticketschema],
    status:{type:Boolean , default:false},
    suspendstatus:{type:Boolean , default:false},
},{
    timestamps:true
});

const users = mongoose.model('users',userschema);
module.exports = users