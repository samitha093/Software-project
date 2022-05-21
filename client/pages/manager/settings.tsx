import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Passwordresetmanager from '../../components/manager/Passwordresetmanager'
import Categorylist from '../../components/manager/Categorylist'
import Navbar from '../../components/Navbar'

import axios from 'axios'
import { gethost } from '../../session/Session';
import styles from './styles.module.css'
import classnames from 'classnames';
import Swal from 'sweetalert2'

const settings: NextPage = () => {

    const [items, setitem] = React.useState([])

    React.useEffect(() => {
        axios.get(gethost() + 'manager/sellers')
            .then(async (res) => {
                await setitem(res.data)
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Database connection error!'
                })
            }
            )
    }, [])
    return (
        <div className={styles.manager_settings_bg}>
            <Navbar />
            <div className={styles.manager_settings_index}>
                <Sidebar id='4' />
                <div className={styles.manager_index_scroll_set}>
                    <h1>Settings</h1>
                    <div className={styles.manager_settings_container}>
                        <Passwordresetmanager />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default settings;