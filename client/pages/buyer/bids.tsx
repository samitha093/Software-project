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
                            <Ticketvalid level="1" type="3"/>
                            <Ticketvalid level="2" type="3"/>
                            <Ticketvalid level="3" type="3"/>
                            <Ticketvalid level="4" type="3"/>
                            <Ticketunvalid level="4" />
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default bids;