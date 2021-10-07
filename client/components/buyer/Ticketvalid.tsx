import React from 'react'
import Image from 'next/image'

interface TicketvalidProps {

}

const Ticketvalid: React.FC<TicketvalidProps> = ({}) => {
        return (
            <div className="buyer-c-ticketvalid">
                <div>
                    <div className="buyer-c-ticketvalid-top">
                        <div className="buyer-c-ticketvalid-top-head">
                            <div className="buyer-c-ticketvalid-top-head-left">
                                13:30:00
                            </div>
                            <div className="buyer-c-ticketvalid-top-head-right">
                                <div className="buyer-c-ticketvalid-top-head-right-1">
                                    Level
                                </div>
                                <div className="buyer-c-ticketvalid-top-head-right-2">
                                    2
                                </div>
                            </div>
                        </div>
                        <div className="buyer-c-ticketvalid-top-info">
                            <div className="buyer-c-ticketvalid-top-info-left">
                                 <div className="buyer-c-ticketvalid-top-info-left-name">
                                    Event name
                                 </div>
                                 <div className="buyer-c-ticketvalid-top-info-left-date">
                                    2021-08-23
                                 </div>
                            </div>
                            <div className="buyer-c-ticketvalid-top-info-right">
                                 <div className="buyer-c-ticketvalid-top-info-right-nooftickets">460</div>
                                 <div className="buyer-c-ticketvalid-top-info-right-tickets">tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className="buyer-c-ticketvalid-cardstatus">card status</h5>
                </div>
            </div>
        );
}

export default Ticketvalid;