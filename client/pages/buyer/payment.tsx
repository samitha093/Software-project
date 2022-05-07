import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'

import styles from './styles.module.css'

const payment: NextPage = () => {
        return (
            <div className={styles.buyer_bg}>
                <Navbar/>
                <div className={styles.buyer_index}>
                    <Sidebar id="2"/>
                    <div className={styles.buyer_index_container_parent}>
                       <h1 className={styles.buyer_index_container_title}>Pending Payment</h1> 
                       <div className={styles.buyer_index_container_d2}>
                            <div className={styles.buyer_index_container}>
                                <Ticketvalid level="1" type="2"/>
                                <Ticketvalid level="2" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                                <Ticketvalid level="4" type="2"/>
                                <Ticketvalid level="5" type="2"/>
                                <Ticketvalid level="3" type="2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default payment;