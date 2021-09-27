import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'

const index: NextPage = () => {
        return (
            <div>
                <Navbar/>
                <div className="buyer-index">
                    <Sidebar/>
                    <div>
                        hello ! lakshan
                    </div>
                </div>
            </div>
            
            
        );
}

export default index;