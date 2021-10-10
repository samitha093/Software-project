import React from 'react'
import type { NextPage } from 'next'
import {Grid} from '@mui/material';
import Navbar from '../../components/Navbar'
import Tabcustom from '../../components/user/Tabcustom'


const login: NextPage = () => {
    return (
            <div>
            <Navbar/>
            <Grid>
              <div className = "main_container">
                <Tabcustom/>
              </div>   
          </Grid>
      </div>
         

                
    
   
    );
}

export default login;


