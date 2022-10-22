const crons = require('../../models/cron');
const events = require('../../models/events');
const tickets = require('../../models/tickets');
const orders = require('../../models/orders');
const qr = require('../../models/qr');
const User = require('../../models/users');

function publishEvent (dataSet){
    events.findById(dataSet.job_id[0],(err,data_event)=>{
        const event_name = data_event.event_name;
        const event_venue = data_event.event_venue;
        const event_date = data_event.event_date;
        const event_time = data_event.event_time;
        const event_category = data_event.event_category;
        const area = data_event.area;
        const img = data_event.image_url;
        const eventid = dataSet.job_id[0];
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
                    event_time,
                    event_category,
                    area,
                    img,
                    eventid,
                    userid,
                    });
                newtickets.save()
                .then((result)=> {
                    console.log("Published Ticket :" + result._id);
                    const job_type = "D";
                    const job_name = "TICKET_MONITOR";
                    const job_id = result._id;
                    const job_status = true;         
                    const newcrons = new crons({
                        job_type,
                        job_name,
                        job_id,
                        job_status,
                        });
                    newcrons.save()
                }) 
            })
        }
    });
    return;
};


module.exports={publishEvent};
