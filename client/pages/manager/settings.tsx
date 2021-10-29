import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Grid from '@mui/material/Grid';
import Passwordresetmanager from '../../components/manager/Passwordresetmanager'
import Sellerapproval from '../../components/manager/Sellerapproval'
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
                        <Passwordresetmanager />
                        <Sellerapproval />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default settings;