import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Topbar from '../../components/seller/Topbar'
import Pendingevents from '../../components/seller/Pendingevents'
import Createevent from '../../components/seller/Createevents'
import axios from 'axios'
import {useRouter} from 'next/router'
import {gethost} from '../../session/Session'
import Styles from './Styles.module.css'
import Swal from 'sweetalert2'

const index: NextPage = () => {
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
                axios.get(gethost()+'seller/pending/61842a1e0ec95f011fdc3bcf')
                  .then(async (res)=>{
                    await setitem(res.data)
                  })
                  .catch(()=>{
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Database connection error!'
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

    const listitem = items.map((item)=>(
      <Pendingevents data={item}/>
    ));

    return (
      <div className={Styles.seller_bg}>
        {open?<div>
        <Navbar/>
        <div className={Styles.seller_index}>
          <Sidebar id="2"/>
          <Topbar id2="1"/>
          <div className={Styles.seller_index_parent_fix}>
          <div className={Styles.seller_index_parent}>
            <h1 className={Styles.seller_index_container_name}>Pending Events</h1>
            <div className={Styles.seller_index_container}>
              {listitem}
            </div>
          </div>
          </div>
        </div>
        <div className={Styles.seller_index_float}>
            <Createevent/>
        </div>
        </div>:null}
      </div>
    );
}

export default index;