/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Homepage from '../../components/seller/Homepage'

const index: NextPage = () => {
    return (
        <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar/>
                    <Homepage />
                </div>
        </div>
    );
}

export default index;