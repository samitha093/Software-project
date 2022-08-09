import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Categorylist from '../../components/manager/Categorylist'
import Arealist from '../../components/manager/Arealist'
import Navbar from '../../components/Navbar'
import Profile from '../../components/profile/Profile'
import axios from 'axios'
import { gethost } from '../../session/Session';
import styles from './styles.module.css'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'

const settings: NextPage = () => {
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
                axios.get(gethost() + 'manager/sellers')
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
            <div className={styles.manager_settings_index}>
                <Sidebar id='4' />
                <div className={styles.manager_index_scroll_set}>
                    <h1>Settings</h1>
                    <div className={styles.manager_settings_container}>
                        <Profile/>
                        <div className={styles.manager_settings_container_listinput_container}>
                        <div className={styles.manager_settings_container_listinput_container_left}>
                            <Arealist />
                        </div>
                        <div className={styles.manager_settings_container_listinput_container_right}>
                            <Categorylist />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>:null}
        </div>

    );
}

export default settings;