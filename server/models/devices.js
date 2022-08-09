const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const deviceschema = new schema({
    sellerid: {type:String},
    osName: {type:String},
    osVersion: {type:String},
    clientName: {type:String},
    clientType: {type:String},
    deviceModel: {type:String},
    deviceBrand: {type:String},
    deviceType: {type:String},
    deviceId: {type:String},
    deviceStatus: {type:String, default:"ACTIVE"},
},{
    timestamps:true
});

const devices = mongoose.model('devices',deviceschema);
module.exports = devices