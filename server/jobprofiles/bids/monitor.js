const crons = require('../../models/cron');
const events = require('../../models/events');
const tickets = require('../../models/tickets');
const orders = require('../../models/orders');
const qr = require('../../models/qr');
const User = require('../../models/users');

const moment = require('moment'); // require
moment().format();

function bidmonitor (dataset1,dataset2){
    console.log(dataset1);
    // return tickets.findById(dataSet.job_id[0])
    // .then(data =>{
    //     var result = events.findById(data.eventid).then(eventData =>{
    //         var date = moment( eventData.endevent_date,"YYYY-MM-DD").diff(moment(dateset.date,"MM/DD/YYYY"))/ (1000 * 3600 * 24);
    //         if((date < 0)){
    //             eventData.status = 'END';
    //             eventData.save()
    //             data.status = false;
    //             data.save()
    //             bidmonitor.bidvalidator(dataSet.job_id[0]);
    //             return 1;
    //         }else{
    //             return 0;
    //         }
    //     })
    //     return result;
    // })
    // .catch(err => console.log(err))
};

module.exports={bidmonitor};