import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Tabcustom from '../../components/user/Tabcustom'
import {Box,Grid,Paper} from '@mui/material';

const index: NextPage = () => {
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

export default index;
