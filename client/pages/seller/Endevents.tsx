import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Topbar from '../../components/seller/Topbar'
import axios from 'axios'
import {useRouter} from 'next/router'
import {gethost} from '../../session/Session'
import Styles from './Styles.module.css'
import Swal from 'sweetalert2'
import Popup from '../../components/seller/ticketpopups/Popup'


const Endevents: NextPage = () => {
    const [open, setopen] = React.useState(false);
    const router = useRouter();       
    const [items, setitem] = React.useState([])
    React.useEffect(()=>{
      axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            if(res.data.type == 'BUYER'){
                router.push('/buyer');
            }else if(res.data.type == 'MANAGER'){
                router.push('/manager');
            }else if(res.data.type == 'SELLER'){
                setopen(true);
                await axios.get(gethost() + 'a/refreshtoken',{withCredentials:true}).then(async (res)=>{
                  //create a headet pack
                  const config = {
                    headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                  };

                  axios.get(gethost()+'s/getevent/END',config).then(async (res)=>{
                    await setitem(res.data)
                  }).catch(()=>{
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Database connection error!'
                      })
                  }) 

                })
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

    const listitem = items.map((item:any)=>(
      <Popup data={item} key={item.id}/>
    ));

    return (
        <div className={Styles.seller_bg}>
          {open?<div>
                <Navbar/>
                <div className={Styles.seller_index}>
                    <Sidebar id="2"/>
                    <Topbar id2="3"/>
                    <div className={Styles.seller_index_parent_fix}>
                    <div className={Styles.seller_index_parent}>
                       <h1 className={Styles.seller_index_container_name}>End Events</h1>
                       <div className={Styles.seller_index_container}>
                        {listitem}
                       </div>
                    </div>
                    </div>
                </div>
            </div>:null}
          </div>
    );
}

export default Endevents;