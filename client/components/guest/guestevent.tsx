import React from 'react'

import {gethost } from '../../session/Session';
import axios from 'axios';
import Swal from 'sweetalert2'
import Image from 'next/image';
import style from '../styles.module.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import seat from '../../assets/seat.png'

interface GuestProps {
    
}

const Guest: React.FC<GuestProps> = ({}) => {

    return (

        <div className ='card' id='card'>
        <Card >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
            <Image
                        src = {seat}
                        width={90}
                        height={70}
                        p-30='true'
                        alt= " "
                       
                       
            ></Image> 
          </CardContent>
          <CardActions>
            <Button className='modern_btn' size='small'>Buy Now</Button>
          </CardActions>
        </Card>
        </div>
      );




}

export default Guest;