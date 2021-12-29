import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Declinedevents from '../../components/manager/Declinedevents'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import axios from 'axios'
import {gethost} from '../../session/Session';

const declinedevents: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/declined')
            .then((res)=>{
                console.log(res.data);
            })
   
    }, [])
    return (
            <div className="manager-bg">
                <Navbar/>
                <div className="manager-index">
                    <Sidebar id = '2'/>
                    <ManagerTopBar id2='3'/>
                    <div>
                       <h1>Declined Events</h1> 
                       <div className="manager-index-container">
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                        </div> 
                    </div>
                </div>
            </div>
        );
}

export default declinedevents;