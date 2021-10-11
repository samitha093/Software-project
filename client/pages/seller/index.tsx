import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Pendingevents from '../../components/seller/Pendingevents'

const index: NextPage = () => {
    return (
        <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar/>
                    <div>
                       <h1>WELCOME</h1>
                       <div className="seller-index-container">
                            <Pendingevents/>
                            <Pendingevents/>
                            <Pendingevents/>
                            <Pendingevents/>
                            <Pendingevents/>
                            <Pendingevents/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default index;