import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import axios from 'axios'
import {gethost} from '../../session/Session';

const sellers: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/sellers')
            .then((res) => {
                console.log(res.data);
            })
    }, [])
    return (
        <div className="manager-bg">
            <Navbar />
            <div className="manager-index">
                <Sidebar />
                <ManagerTopBar />
                <div>
                    <h1>Sellers</h1>
                    <div className="manager-index-container">


                    </div>
                </div>
            </div>
        </div>
    );
}

export default sellers;