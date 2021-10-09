import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Login from '../../components/user/Login'


const index: NextPage = () => {
    return (
        <div>
             <Navbar/>
              <div className= "main_container">  
                 <Login/>  
              </div>
        </div>
    );
}

export default index;
