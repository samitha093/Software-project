const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const qrschema = new schema({
    qrcode:{type:String },
    qrid:{type:String},
},{
    timestamps:true
});

const ticketschema = new schema({
    eventname:{type:String },
    event_venue:{type:String },
    event_date:{type:String },
    event_time:{type:String },
    ticket_level:{type:String },
    image_url:{type:String},
    amount:{type:Number, default:0},
    ticketscount :{type:Number},
    bid_amount:{type:Number, default:0},
    bid_status:{type:Boolean, default:false},
    payment_status:{type:Boolean, default:false},
    ticket_status:{type:Boolean, default:false},
    qr:[qrschema],
    eventid:{type:String},
    ticketid: {type:String},
    userid:{type:String},
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
},{
    timestamps:true
});

const users = mongoose.model('users',userschema);
module.exports = users