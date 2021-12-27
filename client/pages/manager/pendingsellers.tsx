import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import SellersTopBar from '../../components/manager/SellersTopBar'
import axios from 'axios'
import {gethost} from '../../session/Session';

const pendingsellers: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/pendingsellers')
            .then((res) => {
                console.log(res.data);
            })
    }, [])
    return (
        <div className="manager-bg">
            <Navbar />
            <div className="manager-index">
                <Sidebar />
                <SellersTopBar id3='2'/>
                <div>
                    <h1>Pending Sellers</h1>
                    <div className="manager-index-container">


                    </div>
                </div>
            </div>
        </div>
    );
}

export default pendingsellers;