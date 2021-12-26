import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Pendingtickets from '../../components/manager/Pendingtickets'
import axios from 'axios'
import {gethost} from '../../session/Session';

const index: NextPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        axios.get(gethost() + 'manager/pending')
            .then((res)=>{
                console.log(res.data);
            })
   
    }, [])
        return (
            <div className="manager-bg">
                <Navbar/>
                <div className="manager-index">
                    <Sidebar/>
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

export default index;