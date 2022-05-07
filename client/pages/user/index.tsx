import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Login from '../../components/user/Login-Register';
import style from './style.module.css'

const index: NextPage = () => {
    return (
        <div className ={style.main_container_1}>
             <Navbar/>
             
              <div className={style.main_background}>
                <Login/>
              </div>   
         
              
        </div>
    );
}
export default index;
