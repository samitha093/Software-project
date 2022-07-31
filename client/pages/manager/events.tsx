import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Popup from '../../components/manager/ticketpopups/Popup'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import Swal from 'sweetalert2'
import axios from 'axios'
import { gethost } from '../../session/Session';
import {useRouter} from 'next/router'
import styles from './styles.module.css'
import classnames from 'classnames';


const events: NextPage = function ActiveEvents() {
    const [open, setopen] = React.useState(false);
    const router = useRouter();
    const [items, setitem] = React.useState([])
    const [itemID, setitemID] = React.useState("1");
    const [itemURL, setitemURL] = React.useState('m/getevent/pending');

    React.useEffect(() => {
        setopen(false);
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            if(res.data.type == 'BUYER'){
                router.push('/buyer');
            }else if(res.data.type == 'MANAGER'){
                const config = {
                    headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                  };
                axios.get(gethost() + itemURL ,config)
                    .then(async (res) => {
                        await setitem(res.data)
                        setopen(true);
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Database connection error!'
                        })
                    })
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
    }, [itemURL])

    const listitem = items.map((item:any)=>(
        <Popup data={item} key={item.id}/>
      ));
      
      const changeSellerList = async(e:any)=>{
        if(e == 1){
            setitemURL('m/getevent/pending');
            setitemID("1")
        }else if(e == 2){
            setitemURL('m/getevent/active');
            setitemID("2")
        }else if(e == 3){
            setitemURL('m/getevent/declined');
            setitemID("3")
        }
      };

    return (
        <div className={styles.manager_bg}>
            {open?<div>
            <Navbar />
            <div className={styles.manager_index}>
                <Sidebar id='2' />
                <ManagerTopBar id2={itemID} data={{change: changeSellerList}} />
                <div className={styles.manager_index_scroll_set}>
                    <h1>Events</h1>
                    <div className={styles.manager_index_container}>
                        {listitem}
                    </div>
                </div>
            </div>
            </div>:null}
        </div>
    );
}

export default events;