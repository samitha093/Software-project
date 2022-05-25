import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Activeevents from '../../components/manager/Activeevents'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import { gethost } from '../../session/Session';
import Swal from 'sweetalert2'
import styles from './styles.module.css'
import {useRouter} from 'next/router'
import axios from 'axios'

const activeevents: NextPage = () => {
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
                axios.get(gethost() + 'manager/activeevents')
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
        <div className={styles.manager_bg}>
            {open?<div>
            <Navbar />
            <div className={styles.manager_index}>
                <Sidebar id='2' />
                <ManagerTopBar id2='2' />
                <div>
                    <h1>Active Events</h1>
                    <div className={styles.manager_index_container}>
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                        <Activeevents />
                    </div>
                </div>
            </div>
            </div>:null}
        </div>
    );
}

export default activeevents;