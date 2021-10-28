import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
const declinedevents: NextPage = () => {
        return (
            <div className="manager-bg">
                <Navbar/>
                <div className="manager-index">
                    <Sidebar/>
                    <div>
                       <h1>Declined Events</h1> 
                    </div>
                </div>
            </div>
        );
}

export default declinedevents;