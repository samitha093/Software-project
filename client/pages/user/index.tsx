import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Login from '../../components/user/Login'
import Register from '../../components/user/Register'

const index: NextPage = () => {
    return (
        <div>
             <Navbar/>
              <div className= "main_container">  
                                
                <Login/>
                <Register/> 
              </div>
    );
}

export default index;
