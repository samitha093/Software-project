import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'
import { textAlign } from '@mui/system'
const tickets: NextPage = () => {
        return (
            <div className="buyer-bg">
                <Navbar/>
                <div className="buyer-index">
                    <Sidebar id="4"/>
                    <div className='buyer-index-container-parent'>
                       <h1>Validated Tickets</h1> 
                       <div className="buyer-index-container-d2">
                        <div className="buyer-index-container">
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                            </div>  
                       </div>
                       
                    </div>
                </div>
            </div>
        );
}

export default tickets;