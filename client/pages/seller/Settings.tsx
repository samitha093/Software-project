import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Resetpassword from '../../components/seller/Resetpassword'
import Styles from './Styles.module.css'

const Settings: NextPage = () => {
        return (
            <div className={Styles.seller_bg}>
                <Navbar/>
                <div className={Styles.seller_setting}>
                    <Sidebar id="3"/>
                    <div className={Styles.seller_setting_fix}>
                        <div className={Styles.seller_setting_con}>
                            <h1>Settings</h1>
                            <div className={Styles.seller_setting_con_in}><Resetpassword /></div> 
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Settings;