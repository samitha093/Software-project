const crons = require('../../models/cron');
const events = require('../../models/events');
const tickets = require('../../models/tickets');
const orders = require('../../models/orders');
const qr = require('../../models/qr');
const User = require('../../models/users');

const moment = require('moment'); // require
moment().format(); 

function ticketMonitor (dataSet, dateset){
    return qr.findById(dataSet.job_id[0]).then(qrdata =>{
        return tickets.findById(qrdata.ticketid).then(ticketdata =>{
            return events.findById(ticketdata.eventid).then(eventData =>{
                var date = moment( eventData.endevent_date,"YYYY-MM-DD").diff(moment(dateset.date,"MM/DD/YYYY"))/ (1000 * 3600 * 24);
                if((date < 0)){
                    User.findById(qrdata.userid).then(userdata =>{
                        for (var i in userdata.tickets) {
                            if(userdata.tickets[i].ticketid == qrdata.ticketid){
                                userdata.tickets[i].ticket_status = true;
                                userdata.save();
                            }
                        }
                    })
                    for (var i in dataSet.job_id) {
                        qr.findById(dataSet.job_id[i]).then(newqrdata =>{
                            newqrdata.status = false;
                            newqrdata.save();
                        })
                    }
                    return 1;
                }else{
                    return 0;
                }
            })
        })
    })
    .catch(err => res.status(400).json("Wrong db connection"))
 
};

module.exports={ticketMonitor};