import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Declinedevents from '../../components/manager/Declinedevents'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import Swal from 'sweetalert2'
import axios from 'axios'
import { gethost } from '../../session/Session';
import styles from './styles.module.css'
import classnames from 'classnames';

const declinedevents: NextPage = () => {

    const [items, setitem] = React.useState([])

    React.useEffect(() => {
        axios.get(gethost() + 'manager/declinedevents')
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
                <ManagerTopBar id2='3' />
                <div>
                    <h1>Declined Events</h1>
                    <div className={styles.manager_index_container}>
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default declinedevents;