import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Passwordresetmanager from '../../components/manager/Passwordresetmanager'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import {gethost} from '../../session/Session';
import styles from './styles.module.css'
import classnames from 'classnames';

const settings: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/sellers')
            .then((res) => {
                console.log(res.data);
            })
    }, [])
    return (
        <div className={styles.manager_bg}>
            <Navbar />
            <div className={styles.manager_index}>
                <Sidebar id = '4' />
                <div className={styles.manager_setting}>
                    <h1>Settings</h1>
                    <div className={styles.manager_settings_main_container}>
                        <Passwordresetmanager/>  
                    </div>
                </div>
            </div>
        </div>

    );
}

export default settings;