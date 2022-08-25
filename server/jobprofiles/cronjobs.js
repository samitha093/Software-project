const crons = require('../models/cron');
const events = require('../models/events');
const tickets = require('../models/tickets');
const orders = require('../models/orders');
const qr = require('../models/qr');
const User = require('../models/users');

function createtickets (){
    crons.find({job_type:"A", job_status:true},(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone[0].job_status = false;
            data_crone[0].save()
            events.findById(data_crone[0].job_id[0],(err,data_event)=>{
                const event_name = data_event.event_name;
                const event_venue = data_event.event_venue;
                const event_date = data_event.event_date;
                const event_category = data_event.event_category;
                const area = data_event.area;
                const img = data_event.image_url;
                const eventid = data_crone[0].job_id[0];
                const userid = data_event.userid;
                const subdata = data_event.tickets;
                if(subdata){
                    subdata.map((dt)=>{
                        const ticket_level = dt.ticket_level;
                        const buy_quantity = dt.buy_quantity;
                        const buy_amount = dt.buy_amount;
                        const bid_quantity = dt.bid_quantity;
                        const min_bid_amount = dt.min_bid_amount;
                        const total_tickets = dt.buy_quantity + dt.bid_quantity;
                        const newtickets = new tickets({
                            ticket_level,
                            buy_quantity,
                            buy_amount,
                            bid_quantity,
                            min_bid_amount,
                            total_tickets,
                            event_name,
                            event_venue,
                            event_date,
                            event_category,
                            area,
                            img,
                            eventid,
                            userid,
                            });
                        newtickets.save()
                        .then((result)=> {
                            console.log("Published Ticket :" + result._id);
                        }) 
                    })
                }
            });
        }
    })
    return;
};

function createQR (){
    //buyer buy a ticket
    crons.find({job_type:"B", job_status:true},(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone[0].job_status = false;
            data_crone[0].save()
            //job
            orders.findById(data_crone[0].job_id[0],(err,data_event)=>{
                const subdata = data_event.tickets;
                if(subdata){
                    subdata.map(async(dt)=>{
                        //console.log(dt.itemid)
                        //console.log(dt.qty)
                        const userid = data_event.userid;
                        const ticketid = dt.itemid;
                        const qty = dt.qty;        
                        const newqr = new qr({
                            userid,
                            ticketid,
                            qty,
                        });
                        var qrid = await newqr.save().then((result)=>{return result._id})
                        const ticketqr ={
                            "qrid":qrid,
                        }
                        const ticket ={
                            "qr":ticketqr,
                            "ticketid": ticketid,
                        }
                        await User.findById(data_event.userid).then(async(userdata)=> {
                        userdata.tickets.push(ticket);
                        userdata.save()
                            .then(()=> console.log("Ticket Added to user profile"))
                            .catch(err => console.log(err))
                        })
                    }
                )}
                
            })
        }
    })
    return;
};



function createQRguest (){
    //guest user buy a ticket
    crons.find({job_type:"C", job_status:true},async(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone[0].job_status = false;
            data_crone[0].save()
            //job
            orders.findById(data_crone[0].job_id[0],async(err,data_event)=>{
                const subdata = data_event.tickets;
                const username = data_event.userid;
                const usertype = data_event.usertype;
                const newuser = new User({
                    username,
                    usertype,
                    });
                var userid = await newuser.save().then((result)=>{return result._id})
                if(subdata){
                    subdata.map(async(dt)=>{
                        //console.log(dt.itemid)
                        //console.log(dt.qty)
                        const ticketid = dt.itemid;
                        const qty = dt.qty;        
                        const newqr = new qr({
                            userid,
                            ticketid,
                            qty,
                        });
                        var qrid = await newqr.save().then((result)=>{return result._id})
                        const ticketqr ={
                            "qrid":qrid,
                        }
                        const ticket ={
                            "qr":ticketqr,
                            "ticketid": ticketid,
                        }
                        console.log(qrid)
                        await User.findById(userid).then(async(userdata)=> {
                        userdata.tickets.push(ticket);
                        userdata.save()
                            .then(()=> console.log("Ticket Added to user profile"))
                            .catch(err => console.log(err))
                        })
                    }
                )}
                data_event.userid = userid;
                data_event.save()
                    .then(()=> console.log("oder updated"))
                    .catch(err => console.log(err))

            })

        }
    })
    return;
};

function  testjob (){
    crons.find({job_type:"D", job_status:true},(err,data_crone)=>{
        if(data_crone.length>0){
            data_crone[0].job_status = false;
            data_crone[0].save()
            //job

        }
    })
    return;
};

module.exports={
    createtickets,
    createQR,
    createQRguest,
};
