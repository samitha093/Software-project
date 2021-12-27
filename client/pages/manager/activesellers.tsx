import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import SellersTopBar from '../../components/manager/SellersTopBar'
import axios from 'axios'
import {gethost} from '../../session/Session';

const activesellers: NextPage = () => {
    React.useEffect(() => {
        axios.get(gethost() + 'manager/activesellers')
            .then((res) => {
                console.log(res.data);
            })
    }, [])
    return (
        <div className="manager-bg">
            <Navbar />
            <div className="manager-index">
                <Sidebar />
                <SellersTopBar id3='1'/>
                <div>
                    <h1>Active Sellers</h1>
                    <div className="manager-index-container">


                    </div>
                </div>
            </div>
        </div>
    );
}

export default activesellers;