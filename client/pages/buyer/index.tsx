/* eslint-disable react-hooks/rules-of-hooks */
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

const index: NextPage = () => {
    const [open, setopen] = React.useState(false);

    const [mticket, setmticket] = React.useState<any[]>([]);
    const [ppticket, setppticket] = React.useState<any[]>([]);
    const [pbticket, setpbticket] = React.useState<any[]>([]);
    const [moticket, setmoticket] = React.useState<any[]>([]);

    const router = useRouter();
    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
          //create a headet pack
          const config = {
            headers: { Authorization: `Bearer ${res.data.accesstoken}` }
          };
          axios.get(gethost() + 'b/gettickets/mt',config).then(async (res)=>{
            setmticket(res.data);
          })
          axios.get(gethost() + 'b/gettickets/pp',config).then(async (res)=>{
            setppticket(res.data);
          })
          axios.get(gethost() + 'b/gettickets/pb',config).then(async (res)=>{
            setpbticket(res.data);
          })
          axios.get(gethost() + 'b/gettickets/ot',config).then(async (res)=>{
            setmoticket(res.data);
          })
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
            text: err,
            showConfirmButton: false,
            timer: 2500
          })
          router.push('/user');
        })       
    },[])

    const mytickets = mticket.map((itemdata:any)=>(
      <div key={itemdata.id}>
        <Ticketvalid level={itemdata.ticket_level} type="1" data={itemdata}/>
      </div>
    ));
    const myppticket = ppticket.map((itemdata:any)=>(
      <div key={itemdata.id}>
        <Ticketvalid level={itemdata.ticket_level} type="2" data={itemdata}/>
      </div>
    ));
    const mypbticket = pbticket.map((itemdata:any)=>(
      <div key={itemdata.id}>
        <Ticketunvalid level={itemdata.ticket_level} type="3" data={itemdata}/>
      </div>
    ));
    const myoldtickets = moticket.map((itemdata:any)=>(
      <div key={itemdata.id}>
        <Ticketvalid level={itemdata.ticket_level} type="4" data={itemdata}/>
      </div>
    ));

    
        return (
            <div className={styles.buyer_bg}>
                {open?
                    <div>
                        <Navbar/>
                    <div className={styles.buyer_index}>
                        <Sidebar id="1"/>
                        <div className={styles.buyer_index_container_parent}>
                            <h1 className={styles.buyer_index_container_title}>Tickets</h1>
                            <div className={styles.buyer_index_container_d2}>
                                <div className={styles.buyer_index_container}>
                                    {mytickets}
                                </div>
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