import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Login from '../../components/user/Login-Register';
import style from './style.module.css'
import {useRouter} from 'next/router'
import axios from 'axios';
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
              router.push('/seller');
            }else{
              setopen(true);
            }
        })
        .catch((err)=>{
          setopen(true);
        })       
    },[])
    return (
        <div className ={style.main_container_1}>
          {open?<div>
             <Navbar/>
             
              <div className={style.main_background}>
                <Login/>
              </div>   
         
            </div>:null}  
        </div>
    );
}
export default index;
