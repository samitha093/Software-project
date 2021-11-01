import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Declinedevents from '../../components/seller/Declinedevents'

const index: NextPage = () => {
    return (
        <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar/>
                    <div>
                       <h1>Declined Events</h1>
                       <div className="seller-index-container">
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

export default index;