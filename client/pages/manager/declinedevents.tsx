import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Declinedevents from '../../components/manager/Declinedevents'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import Swal from 'sweetalert2'
import axios from 'axios'
import { gethost } from '../../session/Session';
import styles from './styles.module.css'
import {useRouter} from 'next/router'

const declinedevents: NextPage = () => {
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
                axios.get(gethost() + 'manager/declinedevents')
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
                <ManagerTopBar id2='3' />
                <div>
                    <h1>Declined Events</h1>
                    <div className={styles.manager_index_container}>
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                        <Declinedevents />
                    </div>
                </div>
            </div>
            </div>:null}
        </div>
    );
}

export default declinedevents;