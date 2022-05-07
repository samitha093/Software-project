import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'
import { textAlign } from '@mui/system'

import styles from './styles.module.css'

const tickets: NextPage = () => {
        return (
            <div className={styles.buyer_bg}>
                <Navbar/>
                <div className={styles.buyer_index}>
                    <Sidebar id="4"/>
                    <div className={styles.buyer_index_container_parent}>
                       <h1 className={styles.buyer_index_container_title}>Validated Tickets</h1> 
                       <div className={styles.buyer_index_container_d2}>
                        <div className={styles.buyer_index_container}>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                            </div>  
                       </div>
                       
                    </div>
                </div>
            </div>
        );
}

export default tickets;