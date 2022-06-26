/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
//import Homepage from '../../components/manager/Homepage'
import Homepage from '../../components/manager/dashboard/index'
import Swal from 'sweetalert2'
import styles from './styles.module.css'
import {useRouter} from 'next/router'
import {gethost} from '../../session/Session';
import axios from 'axios'

const index: NextPage = () => {
    const [open, setopen] = React.useState(false);
    const router = useRouter();
    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            if(res.data.type == 'BUYER'){
                router.push('/buyer');
            }else if(res.data.type == 'MANAGER'){
                setopen(true);
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
        <div className={styles.manager_bg}>
            {open?<div>
            <Navbar />
            <div className={styles.manager_index}>
                <Sidebar id="1" />
                <div className={styles.manager_index_scroll_set}>
                    <h1>Insigths</h1>
                    <div className={styles.manager_setting_fix}>
                        <Homepage />
                    </div>
                </div>
            </div>
            </div>:null}
        </div>
    );
}

export default index;