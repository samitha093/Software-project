import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Login from '../../components/user/Login'
import {Box,Grid} from '@mui/material';

const login: NextPage = () => {
    return (
        <div>
          <Navbar/>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Login/>
                </Grid>
                <Grid item xs={6}>
             
                </Grid>
           
            </Grid>
        </Box>

        </div>
         

                
    
   
    );
}

export default login;


