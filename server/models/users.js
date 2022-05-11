const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const userschema = new schema({
    username:{type:String },
    email:{type:String },
    contact:{type:String },
    password:{type:String },
    usertype:{type:String },
    status:{type:Boolean , default:false},
    otp:{type:String, default:0},
    secret:{type:String},
    token:{type:String}

},{
    timestamps:true
});

const users = mongoose.model('users',userschema);
module.exports = users