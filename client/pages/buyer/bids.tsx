import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'
import Ticketunvalid from '../../components/buyer/Ticketunvalid'
const bids: NextPage = () => {
        return (
            <div className="buyer-bg">
                <Navbar/>
                <div className="buyer-index">
                    <Sidebar/>
                    <div>
                       <h1>Pending Bids</h1> 
                       <div className="buyer-index-container">
                            <Ticketvalid/>
                            <Ticketvalid/>
                            <Ticketvalid/>
                            <Ticketvalid/>
                            <Ticketunvalid/>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default bids;