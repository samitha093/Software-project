/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Homepage from '../../components/seller/Homepage'
import Styles from './Styles.module.css'

const index: NextPage = () => {
    
    return (
        <div className={Styles.seller_bg}>
                <Navbar/>
                <div className={Styles.seller_index}>
                    <Sidebar id="1"/>
                    <div className={Styles.seller_setting_fix}>
                    <Homepage />
                    </div>
                </div>
        </div>
    );
}

export default index;