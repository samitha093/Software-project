import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image';
import lock from '../../assets/forgot-password.png'
import Navbar from '../../components/Navbar'
import Mediacard from '../../components/user/Media-card'
import {Grid,Box, Typography} from '@mui/material';


const about: NextPage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                 <Mediacard 
                 image = "../../assets/forgot-password.png"
                 title = "hello"
                 description ="dd"/>  
            </div>
              
        </div>
    );
}
export default about;