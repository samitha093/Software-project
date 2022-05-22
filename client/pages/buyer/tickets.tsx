import React from 'react'
import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import axios from 'axios';
import Swal from 'sweetalert2'
import {gethost} from '../../session/Session';
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'
import { textAlign } from '@mui/system'

import styles from './styles.module.scss'

const tickets: NextPage = () => {
    const [open, setopen] = React.useState(false);
    const router = useRouter();
    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            if(res.data.type == 'BUYER'){
              setopen(true);
            }else if(res.data.type == 'MANAGER'){
              router.push('/manager');
            }else if(res.data.type == 'SELLER'){
              router.push('/seller');
            }else{
              router.push('/user');
            }
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: 'Please Login to your account',
            showConfirmButton: false,
            timer: 2500
          })
          router.push('/user');
        })       
    },[])
        return (
            <div className={styles.buyer_bg}>
                {open?<div>
                <Navbar/>
                <div className={styles.buyer_index}>
                    <Sidebar id="4"/>
                    <div className={styles.buyer_index_container_parent}>
                       <h1 className={styles.buyer_index_container_title}>Validated Tickets</h1> 
                       <div className={styles.buyer_index_container_d2}>
                        <div className={styles.buyer_index_container}>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                                <Ticketvalid level="1" type="4"/>
                                <Ticketvalid level="2" type="4"/>
                                <Ticketvalid level="3" type="4"/>
                                <Ticketvalid level="4" type="4"/>
                                <Ticketvalid level="5" type="4"/>
                            </div>  
                       </div>
                       
                    </div>
                </div>
                </div>:null}
            </div>
        );
}

export default tickets;