import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Shop from '../components/Shop'

const events: NextPage = () => {
        return (
            <div className="buyer-bg shop-home">
                <Navbar/>
                <Shop/>
            </div>
        );
}

export default events;