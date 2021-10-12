import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Grid from '@mui/material/Grid';
import Managerpwdreset from '../../components/manager/Managerpwdreset'
import Sellerapprovaltable from '../../components/manager/Sellerapprovaltable'
import Navbar from '../../components/Navbar'
const settings: NextPage = () => {
    return (
        <div className="manager-bg">
            <Navbar />
            <div className="manager-index">
                <Sidebar />
                <div>
                    <h1>Settings</h1>
                    <div className = "manager-index-container">
                    <Grid margin-top = "20px">
                    <div className="manager-password-container" >
                        <Sellerapprovaltable />
                    </div>
                    </Grid>

                    <Grid margin-top = "20px">
                        <div className="manager-settings-container">
                            <Managerpwdreset />
                        </div >
                    </Grid>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default settings;