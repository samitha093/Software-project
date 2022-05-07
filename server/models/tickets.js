const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const ticketschema = new schema({
    ticket_status: {type:String, required:true},
    order_id: {type:String, required:true},
    ticket_level_id:{type:String, required:true}
},{
    timestamps:true
});

const tickets = mongoose.model('tickets',ticketschema);
module.exports = tickets