import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Pendingtickets from '../../components/manager/Pendingtickets'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import axios from 'axios'
import {gethost} from '../../session/Session';
import styles from './styles.module.css'
import classnames from 'classnames';

const pendingevents: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/pendingevents')
            .then((res)=>{
                console.log(res.data);
            })
   
    }, [])
        return (
            <div className={styles.manager_bg}>
                <Navbar/>
                <div className={styles.manager_index}>
                    <Sidebar id = '2'/>
                    <ManagerTopBar id2='1'/>
                    <div className={styles.manager_index_scroll_set}>
                       <h1>Pending Events</h1>
                       <div className={styles.manager_index_container}>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                            <Pendingtickets/>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default pendingevents;