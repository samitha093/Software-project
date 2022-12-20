import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import style from './style.module.css'
import { useRouter } from "next/router";
import Verification from '../../components/user/Verification';


const verification: NextPage = () => {
  const { query } = useRouter();

    return (
            <div className={style.main_container_1}>
            <Navbar/>
            <div className = {style.main_background}>
               <Verification email={query.email} otp={query.otp}/>
            </div>            
        
      </div>
    );
}

export default verification;
