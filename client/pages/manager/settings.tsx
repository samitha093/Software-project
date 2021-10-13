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
                    <div className="manager-index-container">
                        <Grid container lg={12} margin-top="20px" maxWidth="480px" justifyContent="center">
                            <div>
                                <Sellerapprovaltable />
                            </div>
                        </Grid>

                        <Grid container lg={12} margin-top="20px" maxWidth="480px" justifyContent="center">
                            <div>
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