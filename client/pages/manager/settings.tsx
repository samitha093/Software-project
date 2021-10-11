import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Managerpwdreset from '../../components/manager/Managerpwdreset'
import Navbar from '../../components/Navbar'
const settings: NextPage = () => {
    return (
        <div className="manager-bg">
            <Navbar />
            <div className="manager-index">
                <Sidebar />
                <div>
                    <h1>Settings</h1>
                    <div className="manager-index-container">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default settings;