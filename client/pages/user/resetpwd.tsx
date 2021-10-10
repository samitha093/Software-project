import React from 'react'
import type { NextPage } from 'next'
import {Grid} from '@mui/material';
import Navbar from '../../components/Navbar'
import Resetpwd from '../../components/user/Resetpwd';


const resetpwd: NextPage = () => {
    return (
            <div>
            <Navbar/>
            <Grid>
            <div className = "main_container">
               <Resetpwd/>
              </div>            
          </Grid>
      </div>
         

                
    
   
    );
}

export default resetpwd;
