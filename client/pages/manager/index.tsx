import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'

const index: NextPage = () => {
        return (
            <div>
                <Navbar/>
                <div className="manager-index">
                    <div><Sidebar/></div>
                    <div>
                        <h1>Manager Manager</h1>
                    </div>
                    
                </div>
            </div>          
        );
}

export default index;