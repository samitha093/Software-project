import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Tabcustom from '../../components/user/Tabcustom'
import {Grid} from '@mui/material';

const index: NextPage = () => {
    return (
        <div className="buyer-bg">
             <Navbar/>
             <Grid className= "index_container">
              <div className = "main_container">
                <Tabcustom/>
              </div>   
          </Grid>
              
        </div>
    );
}
export default index;
