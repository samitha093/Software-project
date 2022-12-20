const crons = require('../../models/cron');
const events = require('../../models/events');
const tickets = require('../../models/tickets');
const orders = require('../../models/orders');
const qr = require('../../models/qr');
const User = require('../../models/users');
const Bids = require('../../models/bid');

const moment = require('moment'); // require
moment().format();

function bidmonitor (dataset1,dataset2){
    return Bids.findById(dataset1.job_id[0]).then(data =>{
        return tickets.findById(data.ticketid).then(ticketData =>{
            for(i=0;i<ticketData.bids.length;i++){
                if((dataset1.job_id[0] === ticketData.bids[i])&&(ticketData.status == false)){
                //if((dataset1.job_id[0] === ticketData.bids[i])){
                    User.findById(data.userid).then(async userData =>{
                        var tempticketlist = userData.tickets
                            for(j=0;j<tempticketlist.length;j++){
                                if(tempticketlist[j].bidid === dataset1.job_id[0] ){
                                    var tempticket =  tempticketlist[j]
                                    tempticket.payment_status = true;
                                    tempticketlist[j] = tempticket
                                    const job_type = "G";
                                    const job_name = "CREATE_PENDING_QR";
                                    const job_id = [data.userid,tempticketlist[j].bidid];
                                    const job_status = true;
                                    const newcrons = new crons({
                                        job_type,
                                        job_name,
                                        job_id,
                                        job_status,
                                    });
                                    newcrons.save().then(console.log("cron created")).catch(err => console.log(err))
                                }
                            }
                            userData.tickets = tempticketlist
                            userData.save().then().catch(err => console.log(err))
                    })
                }
            }
            if(ticketData.status == false){return 1}else{return 0}
        }).catch(err => console.log(err))
     }).catch(err => console.log(err))
};

module.exports={bidmonitor};