const crons = require('../../models/cron');
const events = require('../../models/events');
const tickets = require('../../models/tickets');
const orders = require('../../models/orders');
const qr = require('../../models/qr');
const User = require('../../models/users');
const Bids = require('../../models/bid');

const moment = require('moment'); // require
moment().format();

function pendingqrgen (dataset){
    return User.findById(dataset.job_id[0]).then(async data =>{
        var qrid = await Bids.findById(dataset.job_id[1]).then(async biddata =>{
            const newqr = new qr({
                "userid":dataset.job_id[0],
                "ticketid":biddata.ticketid,
                "qty":1,
                "status":false
            });
            return await newqr.save().then((result)=>{return result._id})
        }).catch(err => console.log(err))
      var ticketlist = data.tickets
      for(i=0;i<ticketlist.length;i++){
        if(ticketlist[i].bidid === dataset.job_id[1]){
            console.log(ticketlist[i].qridList);
            ticketlist[i].qridList = [qrid]
        }
      }
      data.tickets = ticketlist
      data.save().then(result=>{
        return 1
      }).catch(err => console.log(err))
     }).catch(err => console.log(err))
};

module.exports={pendingqrgen};