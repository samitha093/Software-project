import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Passwordresetmanager from '../../components/manager/Passwordresetmanager'
import Navbar from '../../components/Navbar'
import SettingsTopBar from '../../components/manager/SettingsTopBar'
import axios from 'axios'
import {gethost} from '../../session/Session';

const settings: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/sellers')
            .then((res) => {
                console.log(res.data);
            })
    }, [])
    return (
        <div className="manager-bg">
            <Navbar />
            <div className="manager-index">
                <SettingsTopBar/>
                <Sidebar id = '4' />
                <div className="manager-setting">
                    <h1>Settings</h1>
                    <div className="manager-settings-main-container">
                        <Passwordresetmanager/>  
                    </div>
                </div>
            </div>
        </div>

    );
}

export default settings;