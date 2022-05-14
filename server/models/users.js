const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const ticketschema = new schema({
    eventname:{type:String },
    event_venue:{type:String },
    event_date:{type:String },
    event_time:{type:String },
    ticket_level:{type:String },
    image_url:{type:String},
    amount:{type:String, default:0},
    payment_status:{type:Boolean, default:false},
    ticket_status:{type:Boolean, default:false}

},{
    timestamps:true
});


const userschema = new schema({
    username:{type:String },
    email:{type:String },
    contact:{type:String },
    password:{type:String },
    usertype:{type:String },
    status:{type:Boolean , default:false},
    otp:{type:String, default:0},
    secret:{type:String},
    token:{type:String},
    tickets: [ticketschema]
},{
    timestamps:true
});

const users = mongoose.model('users',userschema);
module.exports = users