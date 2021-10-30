import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Resetpassword from '../../components/seller/Resetpassword'
const Settings: NextPage = () => {
        return (
            <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar/>
                    <div className='buyer-setting'>
                       <h1>Settings</h1>
                       <div className='buyer-setting-container'><Resetpassword /></div> 
                       
                    </div>
                </div>
            </div>
        );
}

export default Settings;