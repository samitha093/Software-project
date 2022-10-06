const crons = require('../../models/cron');
const events = require('../../models/events');
const tickets = require('../../models/tickets');
const orders = require('../../models/orders');
const qr = require('../../models/qr');
const User = require('../../models/users');

function buyerOrder (dataSet){
    //buyer buy a ticket
    orders.findById(dataSet.job_id[0],(err,data_event)=>{
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
    return;
};

module.exports={buyerOrder};
