import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Forgotpwd from '../../components/user/Forgotpwd';
import style from './style.module.css'


const resetpwd: NextPage = () => {
    return (
            <div className={style.main_container_1}>
            <Navbar/>
            <div className = {style.main_background}>
               <Forgotpwd/>
            </div>            
        
      </div>
    );
}

export default resetpwd;
