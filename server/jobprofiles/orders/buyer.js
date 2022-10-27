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
                const userid = data_event.userid;
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
                    await User.findById(data_event.userid).then(async(userdata)=> {
                        userdata.tickets.push(ticket);
                        userdata.save()
                            .then(()=> console.log("Ticket Added to user profile"))
                            .catch(err => console.log(err))
                    })
                })
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
            }
        )}
        
    })
    return;
};

module.exports={buyerOrder};
