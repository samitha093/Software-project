import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Endevents from '../../components/seller/Endevents'

const index: NextPage = () => {
    return (
        <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar/>
                    <div>
                       <h1>End Events</h1>
                       <div className="seller-index-container">
                            <Endevents/>
                            <Endevents/>
                            <Endevents/>
                            <Endevents/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default index;