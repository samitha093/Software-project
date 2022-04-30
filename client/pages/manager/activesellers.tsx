import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import SellersTopBar from '../../components/manager/SellersTopBar'
import SellerActions from '../../components/manager/SellerActions'
import axios from 'axios'
import { gethost } from '../../session/Session';
import styles from './styles.module.css'
import classnames from 'classnames';

const activesellers: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/activesellers')
            .then((res) => {
                console.log(res.data);
            })
    }, [])
    return (
        <div className={styles.manager_bg}>
            <Navbar />
            <div className={styles.manager_index}>
                <Sidebar id='3' />
                <SellersTopBar id3='1' />
                <div>
                    <h1>Active Sellers</h1>
                    <div className={styles.manager_index_container}>
                        <SellerActions />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default activesellers;