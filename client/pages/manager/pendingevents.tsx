import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Pendingtickets from '../../components/manager/Pendingtickets'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import axios from 'axios'
import {gethost} from '../../session/Session';

const pendingevents: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/pendingevents')
            .then((res)=>{
                console.log(res.data);
            })
   
    }, [])
        return (
            <div className="manager-bg">
                <Navbar/>
                <div className="manager-index">
                    <Sidebar/>
                    <ManagerTopBar/>
                    <div>
                       <h1>Pending Events</h1>
                       <div className="manager-index-container">
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