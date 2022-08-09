const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const categoryschema = new schema({
    name:{type:String},
},{
    timestamps:true
});



const util_category = mongoose.model('util_category',categoryschema);
module.exports = util_category