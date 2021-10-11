import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import {Grid} from '@mui/material';

const index: NextPage = () => {
    return (
        <div>
             <Navbar/>
             <Grid item xs={6} className= "index_container">
             <div>
                              
            </div>
              </Grid>
        </div>
    );
}
export default index;
