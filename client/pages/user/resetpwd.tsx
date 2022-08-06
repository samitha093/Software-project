import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Forgotpwd from '../../components/user/Forgotpwd';
import style from './style.module.css'
import { useRouter } from "next/router";


const resetpwd: NextPage = () => {
  const { query } = useRouter();

    return (
            <div className={style.main_container_1}>
            <Navbar/>
            <div className = {style.main_background}>
               <Forgotpwd email={query.email} otp={query.otp}/>
            </div>            
        
      </div>
    );
}

export default resetpwd;
