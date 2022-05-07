import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Activeevents from '../../components/manager/Activeevents'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import axios from 'axios'
import {gethost} from '../../session/Session';

import styles from './styles.module.css'
import classnames from 'classnames';

const activeevents: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/activeevents')
            .then((res)=>{
                console.log(res.data);
            })
   
    }, [])
        return (
            <div className={styles.manager_bg}>
                <Navbar/>
                <div className={styles.manager_index}>
                    <Sidebar id = '2'/>
                    <ManagerTopBar id2='2'/>
                    <div>
                       <h1>Active Events</h1>
                       <div className={styles.manager_index_container}>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                            <Activeevents/>
                        </div> 
                    </div>
                </div>
            </div>
        );
}

export default activeevents;