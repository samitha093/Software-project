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
                        <h1>Tickets</h1>
                        <div className="buyer-index-container">
                            lakshan
                        </div>
                    </div>
                </div>
            </div>
            
            
        );
}

export default index;