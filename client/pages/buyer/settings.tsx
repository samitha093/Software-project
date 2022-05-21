import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'


import styles from './styles.module.scss'

const settings: NextPage = () => {
        return (
            <div className={styles.buyer_bg}>
                <Navbar/>
                <div className={styles.buyer_index}>
                    <Sidebar id="5"/>
                    <div className={'${styles.buyer_setting} ${buyer_index_container_parent}'}>
                       <h1>Settings</h1>
                       <div className={styles.buyer_setting_container}></div>
                       
                    </div>
                </div>
            </div>
        );
}

export default settings;