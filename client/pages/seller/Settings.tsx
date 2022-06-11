import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Resetpassword from '../../components/seller/Resetpassword'
import Styles from './Styles.module.css'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
import {gethost} from '../../session/Session';
import axios from 'axios'

const Settings: NextPage = () => {
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
                <div className={Styles.seller_setting}>
                    <Sidebar id="3"/>
                    <div className={Styles.seller_setting_fix}>
                        <div className={Styles.seller_setting_con}>
                            <h1>Settings</h1>
                            <div className={Styles.seller_setting_con_in}><Resetpassword /></div> 
                        </div>
                    </div>
                </div>
            </div>:null}
            </div>
        );
}

export default Settings;