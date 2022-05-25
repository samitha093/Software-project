/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Homepage from '../../components/seller/Homepage'
import Styles from './Styles.module.css'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
import {gethost} from '../../session/Session';

const index: NextPage = () => {
    const [open, setopen] = React.useState(false);
    const router = useRouter();
    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            if(res.data.type == 'BUYER'){
                router.push('/buyer');
            }else if(res.data.type == 'MANAGER'){
                router.push('/manager');
            }else if(res.data.type == 'SELLER'){
                setopen(true);
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
        <div className={Styles.seller_bg}>
            {open?<div>
                <Navbar/>
                <div className={Styles.seller_index}>
                    <Sidebar id="1"/>
                    <div className={Styles.seller_setting_fix}>
                    <Homepage />
                    </div>
                </div>
            </div>:null}
        </div>
    );
}

export default index;