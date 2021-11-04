const mongoose = require('mongoose');
mongoose.plugin(require('meanie-mongoose-to-json'));

const schema = mongoose.Schema;

const testschema = new schema({
    name: {type:String, required:true},
    age: {type:Number, required:false},
    status:{type:Boolean, required:true}
},{
    timestamps:true
});

const testTable = mongoose.model('testTable',testschema);
module.exports = testTable