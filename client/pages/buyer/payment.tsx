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
                    <Sidebar/>
                    <div>
                       <h1>Pending Payment</h1> 
                       <div className="buyer-index-container">
                            <Ticketvalid/>
                            <Ticketvalid/>
                            <Ticketvalid/>
                            <Ticketvalid/>
                            <Ticketvalid/>
                            <Ticketvalid/>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default payment;