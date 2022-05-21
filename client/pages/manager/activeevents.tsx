import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Activeevents from '../../components/manager/Activeevents'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import { gethost } from '../../session/Session';
import Swal from 'sweetalert2'
import styles from './styles.module.css'
import classnames from 'classnames';
import axios from 'axios'

const activeevents: NextPage = () => {

    const [items, setitem] = React.useState([])

    React.useEffect(() => {
        axios.get(gethost() + 'manager/activeevents')
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
        <div className={styles.manager_bg}>
            <Navbar />
            <div className={styles.manager_index}>
                <Sidebar id='2' />
                <ManagerTopBar id2='2' />
                <div>
                    <h1>Active Events</h1>
                    <div className={styles.manager_index_container}>
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default activeevents;