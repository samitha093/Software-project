import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import SellersTopBar from '../../components/manager/SellersTopBar'
import Activesellerstable from '../../components/manager/Activesellerstable'
import styles from './styles.module.css'
import classnames from 'classnames';
import axios from 'axios'
import Swal from 'sweetalert2'
import { gethost } from '../../session/Session';

const activesellers: NextPage = () => {

    const [items, setitem] = React.useState([])

    React.useEffect(() => {
        axios.get(gethost() + 'manager/activesellers')
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
            <div className={styles.manager_index}>
                <Sidebar id='3' />
                <SellersTopBar id3='1' />
                <div>
                    <h1>Active Sellers</h1>
                    <div className={styles.manager_sellers_main_container}>
                        <Activesellerstable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default activesellers;