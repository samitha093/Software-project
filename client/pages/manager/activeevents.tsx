import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Activeevents from '../../components/manager/Activeevents'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import axios from 'axios'
import {gethost} from '../../session/Session';

const activeevents: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/activeevents')
            .then((res)=>{
                console.log(res.data);
            })
   
    }, [])
        return (
            <div className="manager-bg">
                <Navbar/>
                <div className="manager-index">
                    <Sidebar/>
                    <ManagerTopBar id2='2'/>
                    <div>
                       <h1>Active Events</h1>
                       <div className="manager-index-container">
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