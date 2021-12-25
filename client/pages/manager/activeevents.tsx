import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Activeevents from '../../components/manager/Activeevents'
import ManagerTopBar from '../../components/manager/ManagerTopBar'

const activeevents: NextPage = () => {
        return (
            <div className="manager-bg">
                <Navbar/>
                <div className="manager-index">
                    <Sidebar/>
                    <ManagerTopBar/>
                    <div>
                       <h1>Active Events</h1>
                       <div className="manager-index-container">
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                        </div> 
                    </div>
                </div>
            </div>
        );
}

export default activeevents;