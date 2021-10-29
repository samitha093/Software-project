import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Tabcustom from '../../components/user/Tabcustom'
import {Grid} from '@mui/material';
import Login from '../../components/user/Login-Register';

const index: NextPage = () => {
    return (
        <div className ="main-container">
             <Navbar/>
             
              <div className="main-background">
                <Login/>
              </div>   
         
              
        </div>
    );
}
export default index;
