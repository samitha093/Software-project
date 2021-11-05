/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'
import {getuser } from '../../session/Session';

const index: NextPage = () => {
    const [open, setopen] = React.useState(false);
    const router = useRouter();
    React.useEffect(()=>{
        console.log(getuser());
        if(getuser() != null){
            setopen(true);
        }else{
            if(!open){
                router.push('/user');
            }
        }
       
    },[])
        return (
            <div className="buyer-bg">
                {open?
                    <div>
                        <Navbar/>
                    <div className="buyer-index">
                        <Sidebar/>
                        <div className="buyer-index-content">
                            <h1>Tickets</h1>
                            <div className="buyer-index-container">
                                <Ticketvalid level="1" type="1"/>
                                <Ticketvalid level="2" type="1"/>
                                <Ticketvalid level="3" type="1"/>
                                <Ticketvalid level="4" type="1"/>
                                <Ticketvalid level="5" type="1"/>
                                <Ticketvalid level="5" type="1"/>
                            </div>
                        </div>
                    </div>
                    </div>
                :null
                }
                
            </div>
            
            
        );
}

export default index;