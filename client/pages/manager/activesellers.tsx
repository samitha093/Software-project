import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import SellersTopBar from '../../components/manager/SellersTopBar'
import Activesellerstable from '../../components/manager/Activesellerstable'
import styles from './styles.module.css'
import {useRouter} from 'next/router'
import axios from 'axios'
import Swal from 'sweetalert2'
import { gethost } from '../../session/Session';

const activesellers: NextPage = () => {
    const [open, setopen] = React.useState(false);
    const router = useRouter();
    const [items, setitem] = React.useState([])
 
    React.useEffect(() => {
    axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            if(res.data.type == 'BUYER'){
                router.push('/buyer');
            }else if(res.data.type == 'MANAGER'){
                setopen(true);
                axios.get(gethost() + 'manager/activesellers')
                .then(async (res) => {
                    await setitem(res.data)
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
    }, [])
    return (
        <div className={styles.manager_settings_bg}>
            {open?<div>
            <Navbar />
            <div className={styles.manager_index}>
                <Sidebar id='3' />
                <SellersTopBar id3='1' />
                <div className={styles.manager_sellers_main_container}>
                    <h1>User Account Managment</h1>
                    <div className={styles.manager_sellers_main_container}>
                        <Activesellerstable />
                    </div>
                </div>
            </div>
        </div>:null}
        </div>
    );
}

export default activesellers;