/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { NextPage } from 'next'
import axios from 'axios'

import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Homepage from '../../components/manager/Homepage'

import styles from './styles.module.css'
import classnames from 'classnames';

const index: NextPage = () => {
    
    return (
        <div className={styles.manager_bg}>
                <Navbar/>
                <div className={styles.manager_index}>
                    <Sidebar id="1"/>
                    <h1>Insights</h1>
                    <div className={styles.manager_setting_fix}>
                    <Homepage />
                    </div>
                </div>
        </div>
    );
}

export default index;