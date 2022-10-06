const crons = require('../models/cron');
const events = require('../models/events');
const tickets = require('../models/tickets');
const orders = require('../models/orders');
const qr = require('../models/qr');
const User = require('../models/users');

var express = require('express');
var router = express.Router();
var request = require('request');

const publishEvent = require('./events/publishevent');
const buyer = require('./orders/buyer');
const guest = require('./orders/guest');
const monitor = require('./tickets/monitor');

    // console.log("time and date checker start")
    // request('https://timeapi.io/api/Time/current/zone?timeZone=asia/colombo', { json: true }, (err, res, body) => {
    //     if (err) { return console.log(err); }
    //     // console.log(body.url);
    //     console.log(body.dateTime);
    //   });
    // return;

function  eventController (){
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
                monitor.monitor(dataSet);
            });
        }
    })
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
    //control user added tickets
    crons.find({job_type:"Z", job_status:true},(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone.map(async(dataSet)=>{  
                
            });
        }
    })
    return;
};

function  bidController (){
    //control user added bids
    crons.find({job_type:"Z", job_status:true},(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone.map(async(dataSet)=>{  
                
            });
        }
    })

};

function  analiticBuilder1H (){
    crons.find({job_type:"Z", job_status:true},(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone.map(async(dataSet)=>{  
                
            });
        }
    })
    return;
};

function  analiticBuilder24H (){
    crons.find({job_type:"Z", job_status:true},(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone.map(async(dataSet)=>{  
                
            });
        }
    })
    return;
};

module.exports={
    eventController,
    orderController,
    ticketController,
    bidController,
    analiticBuilder1H,
    analiticBuilder24H
};
