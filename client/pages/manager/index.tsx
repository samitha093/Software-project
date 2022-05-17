/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { NextPage } from 'next'

import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Homepage from '../../components/manager/Homepage'
import Swal from 'sweetalert2'
import styles from './styles.module.css'
import classnames from 'classnames';
import axios from 'axios'

const index: NextPage = () => {

    return (
        <div className={styles.manager_bg}>
            <Navbar />
            <div className={styles.manager_index}>
                <Sidebar id="1" />
                <div className={styles.manager_index_scroll_set}>
                    <h1>Insigths</h1>
                    <div className={styles.manager_setting_fix}>
                        <Homepage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;