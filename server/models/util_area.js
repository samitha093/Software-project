const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;


const areaschema = new schema({
    name:{type:String},
},{
    timestamps:true
});

const util_area = mongoose.model('util_area',areaschema);
module.exports = util_area