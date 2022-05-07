import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'
import Ticketunvalid from '../../components/buyer/Ticketunvalid'

import styles from './styles.module.css'

const bids: NextPage = () => {
        return (
            <div className={styles.buyer_bg}>
                <Navbar/>
                <div className={styles.buyer_index}>
                    <Sidebar id="3" />
                    <div className={styles.buyer_index_container_parent}>
                       <h1>Pending Bids</h1> 
                       <div className={styles.buyer_index_container_d2}>
                            <div className={styles.buyer_index_container}>
                                <Ticketvalid level="1" type="3"/>
                                <Ticketvalid level="2" type="3"/>
                                <Ticketvalid level="3" type="3"/>
                                <Ticketvalid level="4" type="3"/>
                                <Ticketunvalid level="4" />
                                <Ticketvalid level="1" type="3"/>
                                <Ticketvalid level="2" type="3"/>
                                <Ticketvalid level="3" type="3"/>
                                <Ticketvalid level="4" type="3"/>
                                <Ticketunvalid level="4" />
                                <Ticketvalid level="1" type="3"/>
                                <Ticketvalid level="2" type="3"/>
                                <Ticketvalid level="3" type="3"/>
                                <Ticketvalid level="4" type="3"/>
                                <Ticketunvalid level="4" />
                                <Ticketvalid level="1" type="3"/>
                                <Ticketvalid level="2" type="3"/>
                                <Ticketvalid level="3" type="3"/>
                                <Ticketvalid level="4" type="3"/>
                                <Ticketunvalid level="4" />
                                <Ticketvalid level="1" type="3"/>
                                <Ticketvalid level="2" type="3"/>
                                <Ticketvalid level="3" type="3"/>
                                <Ticketvalid level="4" type="3"/>
                                <Ticketunvalid level="4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default bids;