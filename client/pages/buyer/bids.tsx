import React from 'react'
import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import axios from 'axios';
import Swal from 'sweetalert2'
import {gethost} from '../../session/Session';
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import Ticketvalid from '../../components/buyer/Ticketvalid'
import Ticketunvalid from '../../components/buyer/Ticketunvalid'

import styles from './styles.module.scss'

const bids: NextPage = () => {
    const [Open, setopen] = React.useState(false);
    const Router = useRouter();
    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
          //create a headet pack
          const config = {
            headers: { Authorization: `Bearer ${res.data.accesstoken}` }
          };
          axios.get(gethost() + 'b/gettickets/pb',config).then(async (res)=>{
            setitems(res.data)
            console.log(res.data)
          })
            if(res.data.type == 'BUYER'){
              setopen(true);
            }else if(res.data.type == 'MANAGER'){
              Router.push('/manager');
            }else if(res.data.type == 'SELLER'){
              Router.push('/seller');
            }else{
              Router.push('/user');
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
          Router.push('/user');
        })       
    },[])
    const [items, setitems] = React.useState<any[]>([])
        return (
            <div className={styles.buyer_bg}>
                {Open?<div>
                <Navbar/>
                <div className={styles.buyer_index}>
                    <Sidebar id="3" />
                    <div className={styles.buyer_index_container_parent}>
                       <h1 className={styles.buyer_index_container_title}>Pending Bids</h1> 
                       <div className={styles.buyer_index_container_d2}>
                            <div className={styles.buyer_index_container}>
                            {items.map((itemdata)=>{
                                      return(<div key={itemdata.id}><Ticketunvalid level={itemdata.ticket_level}/></div>)
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                </div>:null}
            </div>
        );
}

export default bids;