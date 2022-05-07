import React from 'react'
import type { NextPage } from 'next'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import Navbar from '../../components/Navbar'
import Cartcardfull from '../../components/buyer/Cartcardfull'
import Cartcard from '../../components/buyer/Cartcard'

import styles from './styles.module.css'
import classnames from 'classnames';

const cart: NextPage = () => {
        return (
            <div className={classnames(styles.buyer_bg, styles.cart)}>
                <Navbar/>
                <div className={styles.cart_container}>
                    <div className={styles.cart_container_left}><div className={styles.cart_container_left_drower}>
                    <Cartcardfull/>
                    <Cartcardfull/>
                    <Cartcardfull/>
                    </div></div>
                    <div className={styles.cart_container_right}><div className={styles.cart_container_right_drower}>
                        <div className={styles.cart_container_right_drower_1}>
                        <Cartcard/>
                        <Cartcard/>
                        <Cartcard/>
                        <Cartcard/>
                        <Cartcard/>
                        <Cartcard/>
                        </div><hr />
                        <div className={styles.cart_container_right_drower_2}>
                            <div className={styles.cart_container_right_drower_2_price}>
                                <div className={styles.cart_container_right_drower_2_price_left}><h1>Total</h1></div>
                                <div className={styles.cart_container_right_drower_2_price_right}><h3>LKR 467323</h3></div>
                            </div>
                            <div className={styles.modern_paybutton}><div className={styles.modern_paybutton_t}><CreditCardOutlinedIcon/> Pay Now</div></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default cart;