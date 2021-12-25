import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'

const payment: NextPage = () => {
        return (
            <div className="buyer-bg">
                <Navbar/>
                <div className="buyer-index">
                    <Sidebar id="2"/>
                    <div className='buyer-index-container-parent'>
                       <h1>Pending Payment</h1> 
                       <div className="buyer-index-container-d2">
                            <div className="buyer-index-container">
                                <Ticketvalid level="1" type="2"/>
                                <Ticketvalid level="2" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default payment;