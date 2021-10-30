import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Activeevents from '../../components/seller/Activeevents'

const index: NextPage = () => {
    return (
        <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar/>
                    <div>
                       <h1>Active Events</h1>
                       <div className="seller-index-container">
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

export default index;