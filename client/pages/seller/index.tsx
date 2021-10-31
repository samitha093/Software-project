import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Createevent from '../../components/seller/Homepage'

const index: NextPage = () => {
    return (
        <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar/>
                    <Createevent/>
                </div>
        </div>
    );
}

export default index;