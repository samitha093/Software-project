import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Declinedevents from '../../components/manager/Declinedevents'
import ManagerTopBar from '../../components/manager/ManagerTopBar'

const declinedevents: NextPage = () => {
        return (
            <div className="manager-bg">
                <Navbar/>
                <div className="manager-index">
                    <Sidebar/>
                    <ManagerTopBar/>
                    <div>
                       <h1>Declined Events</h1> 
                       <div className="manager-index-container">
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                        </div> 
                    </div>
                </div>
            </div>
        );
}

export default declinedevents;