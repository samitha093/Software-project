import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
const payment: NextPage = () => {
        return (
            <div>
                <Navbar/>
                <div className="buyer-index">
                    <Sidebar/>
                    <div>
                       <h1>Pending Payment</h1> 
                    </div>
                </div>
            </div>
        );
}

export default payment;