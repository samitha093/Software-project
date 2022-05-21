const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const cronschema = new schema({
    job_type: {type:String},
    job_name: {type:String},
    job_id: [String],
    job_status: {type:Boolean},
},{
    timestamps:true
});

const crons = mongoose.model('crons',cronschema);
module.exports = crons