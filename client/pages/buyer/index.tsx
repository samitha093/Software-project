import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'

const index: NextPage = () => {
        return (
            <div className="buyer-bg">
                <Navbar/>
                <div className="buyer-index">
                    <Sidebar/>
                    <div className="buyer-index-content">
                        <h1>Tickets</h1>
                        <div className="buyer-index-container">
                            <Ticketvalid level="1" type="1"/>
                            <Ticketvalid level="2" type="1"/>
                            <Ticketvalid level="3" type="1"/>
                            <Ticketvalid level="4" type="1"/>
                            <Ticketvalid level="5" type="1"/>
                            <Ticketvalid level="5" type="1"/>
                        </div>
                    </div>
                </div>
            </div>
            
            
        );
}

export default index;