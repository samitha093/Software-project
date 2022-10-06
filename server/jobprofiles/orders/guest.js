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
    return;
};

module.exports={guestOrder};