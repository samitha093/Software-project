const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const categoryschema = new schema({
    name:{type:String},
},{
    timestamps:true
});

const areaschema = new schema({
    name:{type:String},
},{
    timestamps:true
});

const utilschema = new schema({
    area: [areaschema],
    category:[categoryschema],
},{
    timestamps:true
});

const util = mongoose.model('util',utilschema);
module.exports = tickets