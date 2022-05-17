import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import SellersTopBar from '../../components/manager/SellersTopBar'
import SellerActions from '../../components/manager/SellerActions'
import Swal from 'sweetalert2'
import axios from 'axios'
import { gethost } from '../../session/Session';
import styles from './styles.module.css'
import classnames from 'classnames';

const pendingsellers: NextPage = () => {

    const [items, setitem] = React.useState([])

    React.useEffect(() => {
        axios.get(gethost() + 'manager/pendingsellers')
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
                <SellersTopBar id3='2' />
                <div>
                    <h1>Pending Sellers</h1>
                    <div className={styles.manager_settings_main_container}>
                        <SellerActions />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default pendingsellers;