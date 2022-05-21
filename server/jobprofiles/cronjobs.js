const crons = require('../models/cron');
const events = require('../models/events');
const tickets = require('../models/tickets');

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
};

module.exports={
    createtickets,
};
