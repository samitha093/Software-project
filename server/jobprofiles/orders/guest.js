const crons = require('../../models/cron');
const events = require('../../models/events');
const tickets = require('../../models/tickets');
const orders = require('../../models/orders');
const qr = require('../../models/qr');
const User = require('../../models/users');

function guestOrder (dataSet){
    //guest user buy a ticket
    orders.findById(dataSet.job_id[0],async(err,data_event)=>{
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
                const ticketid = dt.itemid;
                var ticketqr = [];
                const qty = dt.qty;        
                for(var i = 0; i < qty ; i++){
                    const newqr = new qr({
                        userid,
                        ticketid,
                        "qty":1,
                    });
                    var qrid = await newqr.save().then((result)=>{return result._id})
                    ticketqr.push(qrid);
                }
                await tickets.findById(ticketid).then(async(ticketdata)=> {
                    const ticket ={
                        "orderid":dataSet.job_id[0],
                        "eventId":ticketdata.eventid,
                        "ticketid": ticketid,
                        "qridList":ticketqr,                        
                    }
                    await User.findById(userid).then(async(userdata)=> {
                        userdata.tickets.push(ticket);
                        userdata.save()
                            .then(()=> console.log("Ticket Added to user profile"))
                            .catch(err => console.log(err))
                    })
                })
            }
        )}
        data_event.userid = userid;
        data_event.save()
            .then(()=> console.log("oder updated"))
            .catch(err => console.log(err))
        const job_type = "E";
        const job_name = "QR__MONITOR";
        const job_id = ticketqr;
        const job_status = true;         
        const newcrons = new crons({
            job_type,
            job_name,
            job_id,
            job_status,
            });
        newcrons.save()
    })
    return;
};

module.exports={guestOrder};