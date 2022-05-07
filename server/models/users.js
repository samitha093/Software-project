const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const userschema = new schema({
    user_name:{type:String , require:true},
    email:{type:String ,require:true},
    contact:{type:String , require:true},
    password:{type:String , require:true},
    user_type:{type:String , require:true},
    status:{type:Boolean , default:true},
    user_id: {type:String, required:true}

},{
    timestamps:true
});

const users = mongoose.model('users',userschema);
module.exports = users