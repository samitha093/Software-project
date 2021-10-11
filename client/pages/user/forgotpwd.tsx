import React from 'react'
import type { NextPage } from 'next'
import {Grid} from '@mui/material';
import Navbar from '../../components/Navbar'
import Forgotpwd from '../../components/user/Forgotpwd';


const resetpwd: NextPage = () => {
    return (
            <div className = "buyer-bg">
            <Navbar/>
            <Grid className = "index_container">
            <div className = "main_container">
               <Forgotpwd/>
              </div>            
          </Grid>
      </div>
    );
}

export default resetpwd;
