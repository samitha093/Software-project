import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Resetpassword from '../../components/seller/Resetpassword'
const Settings: NextPage = () => {
        return (
            <div className="seller-bg">
                <Navbar/>
                <div className="seller-setting">
                    <Sidebar id="3"/>
                    <div className="seller-setting-fix">
                        <div className="seller-setting-con">
                            <h1>Settings</h1>
                            <div className="seller-setting-con-in"><Resetpassword /></div> 
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Settings;