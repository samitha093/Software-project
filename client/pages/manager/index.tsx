import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'

const index: NextPage = () => {
        return (
            <div>
                <Navbar/>
                <div className="manager-index">
                    <div>
                        <h1>Hello</h1>
                    </div>
                    <Sidebar/>
                </div>
            </div>
            
            
        );
}

export default index;