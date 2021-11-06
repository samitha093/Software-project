const mongoose = require('mongoose');
mongoose.plugin(require('meanie-mongoose-to-json'));

const schema = mongoose.Schema;

const eventschema = new schema({
    event_name: {type:String, required:true},
    event_venue: {type:String, required:true},
    event_date: {type:String, required:true},
    event_time: {type:String, required:true},
    ticket_level: {type:Number, required:true},
    image_url : {type:String, required:true},
    status: {type:String, default:'pending'},
    comment: {type:String,},
    user_id: {type:String, required:true}
},{
    timestamps:true
});

const events = mongoose.model('events',eventschema);
module.exports = events