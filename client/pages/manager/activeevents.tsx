import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
const activeevents: NextPage = () => {
        return (
            <div className="manager-bg">
                <Navbar/>
                <div className="manager-index">
                    <Sidebar/>
                    <div>
                       <h1>Active Events</h1> 
                    </div>
                </div>
            </div>
        );
}

export default activeevents;