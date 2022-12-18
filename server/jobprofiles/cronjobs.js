const crons = require('../models/cron');
const events = require('../models/events');
const tickets = require('../models/tickets');
const orders = require('../models/orders');
const qr = require('../models/qr');
const User = require('../models/users');
const sellerAnalitics = require('../models/sellerD');

var express = require('express');
var router = express.Router();
var request = require('request');

const publishEvent = require('./events/publishevent');
const buyer = require('./orders/buyer');
const guest = require('./orders/guest');
const eventmonitor = require('./events/monitor');
const ticketMonitor = require('./tickets/monitor')
const bidmonitor = require('./bids/monitor')
const bidvalidator = require('./bids/validator')


function  eventController (){
    // date check
    request('https://timeapi.io/api/Time/current/zone?timeZone=asia/colombo', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
            //Event Activate
            crons.find({job_type:"A", job_status:true},(err,data_crone)=>{
                if(data_crone.length>0){
                    data_crone.map(async(dataSet)=>{
                        dataSet.job_status = false;
                        dataSet.save()
                        publishEvent.publishEvent(dataSet);
                    });
                }
            })
            // Event End
            crons.find({job_type:"D", job_status:true},(err,data_crone)=>{
                if(data_crone.length>0){
                    data_crone.map(async(dataSet)=>{
                        var result = await eventmonitor.eventmonitor(dataSet, body);
                        if(result){
                            dataSet.job_status = false;
                            dataSet.save()
                        }
                    });
                }
            })
    });

    return;
};

function  orderController  (){
    //for Registed buyer - fullfill order
    crons.find({job_type:"B", job_status:true},(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone.map(async(dataSet)=>{
                dataSet.job_status = false;
                dataSet.save()
                buyer.buyerOrder(dataSet)
            });
        }
    })
    //for guest buyer - fullfill order
    crons.find({job_type:"C", job_status:true},(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone.map(async(dataSet)=>{
                dataSet.job_status = false;
                dataSet.save()
                guest.guestOrder(dataSet)
            });
        }
    })
    return;
};

function  ticketController (){
    // date check
    request('https://timeapi.io/api/Time/current/zone?timeZone=asia/colombo', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
            //control user added tickets
            crons.find({job_type:"E", job_status:true},(err,data_crone)=>{
                if(data_crone.length>0){
                    data_crone.map(async(dataSet)=>{
                        var result = await ticketMonitor.ticketMonitor(dataSet, body);
                        if(result){
                            dataSet.job_status = false;
                            dataSet.save()
                        }
                    });
                }
            })
    });

    return;
};

function  bidController (){
    // date check
    request('https://timeapi.io/api/Time/current/zone?timeZone=asia/colombo', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
            //control user added tickets
            crons.find({job_type:"F", job_status:true},(err,data_crone)=>{
                if(data_crone.length>0){
                    data_crone.map(async(dataSet)=>{
                        var result = await bidmonitor.bidmonitor(dataSet, body);
                        if(result){
                            dataSet.job_status = false;
                            dataSet.save()
                        }
                    });
                }
            })
    });

    return;
};


function  analiticBuilder1H (){
    request('https://timeapi.io/api/Time/current/zone?timeZone=asia/colombo', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        crons.find({job_type:"Z", job_status:true},(err,data_crone)=>{
            if(data_crone.length>0){
                data_crone.map(async(dataSet)=>{
                    //bid
                    console.log("found - Z")
                });
            }
        })
        crons.find({job_type:"Y", job_status:true},(err,data_crone)=>{
            if(data_crone.length>0){
                data_crone.map(async(dataSet)=>{
                    //order
                    console.log("found - Y")
                });
            }
        })
    })
    return;
};

function  analiticBuilder24H (){
    request('https://timeapi.io/api/Time/current/zone?timeZone=asia/colombo', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        User.find({usertype:'SELLER'},(err,userlist)=>{
            for (const element of userlist) {
                sellerAnalitics.find({date:body.date,sellerid:element._id},(err,data_crone)=>{
                    if(data_crone.length<1){
                        const newDataset = new sellerAnalitics({
                            sellerid : element._id,
                            date : body.date,
                        })
                        newDataset.save().then().catch(err => console.log(err))
                    }
                })
            }
        })
    });

    return;
};

module.exports={
    eventController,
    orderController,
    ticketController,
    analiticBuilder1H,
    analiticBuilder24H,
    bidController
};
