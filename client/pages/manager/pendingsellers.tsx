import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import SellersTopBar from '../../components/manager/SellersTopBar'
import Pendingsellerstable from '../../components/manager/Pendingsellerstable'
import Swal from 'sweetalert2'
import axios from 'axios'
import { gethost } from '../../session/Session';
import styles from './styles.module.css'
import {useRouter} from 'next/router'

const pendingsellers: NextPage = () => {
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
                axios.get(gethost() + 'manager/pendingsellers')
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
                <SellersTopBar id3='2' />
                <div className={styles.manager_sellers_main_container}>
                    <h1>Pending Sellers</h1>
                    <div className={styles.manager_sellers_main_container}>
                        <Pendingsellerstable />
                    </div>
                </div>
            </div>
            </div>:null}
        </div>
    );
}

export default pendingsellers;