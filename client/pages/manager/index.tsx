import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Pendingtickets from '../../components/manager/Pendingtickets'
import axios from 'axios'
import {gethost} from '../../session/Session';
import styles from './styles.module.css'
import classnames from 'classnames';

const index: NextPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        axios.get(gethost() + 'manager')
            .then((res)=>{
                console.log(res.data);
            })
   
    }, [])
        return (
            <div className={styles.manager_bg}>
                <Navbar/>
                <div className={styles.manager_index}>
                    <Sidebar id = '1'/>
                    <div>
                       <h1>Pending Events</h1>
                       <div className={styles.manager_index_container}>
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

export default index;