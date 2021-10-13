import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import EventSeatTwoToneIcon from '@mui/icons-material/EventSeatTwoTone';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import Mediacard from '../../components/user/Media-card';
import {Grid, Typography} from '@mui/material';


const about: NextPage = () => {
    return (
        <div className="buyer-bg">
            <Navbar/>
            <Grid className = "index_container">
            <Grid className ="grid-container">
            <Typography variant="h4" fontWeight="bold" className ="head-about">Welcome ! to TickBid Event Ticketing Platform</Typography>
                <EventSeatTwoToneIcon fontSize= "large"/>
                 <Mediacard 
                 image = {require("../../assets/Seat.jpeg")}
                 title = "Reserve your seat with  Online Ticketing Platform"
                 description ="This is a convenient ticketing platform to all with tight
                               schedules now can simply visit us to quick check the best event
                               reserve your seat from any place and at any time.With many exiting
                               events coming up our 24/7  service provides the chance to choose your seat."
                 />              
                 <SocialDistanceIcon fontSize="large"/>
                 <Mediacard 
                 image = {"../../assets/Social-distance.jpeg"}
                 title = "Improve Social Distancing  Say No to long queues "
                 description ="Our virtual ticket box improves health security of the society while
                 improving the social-distancing policies and health guidelines 
                 relevant to the Covid-19 pandemic situation by reducing long queues
                 in front of the conventional tickets booths and social distancing
                 reservations provided by the event organizers."
                 /> 
                 <CreditCardTwoToneIcon fontSize="large"/> 
                 <Mediacard 
                 image = {"../../assets/payment.png"}
                 title = "Easy Payment optionss and e- tickets"
                 description ="We offer more options for the payments as preferences , 
                 instant confirmation and quick purchase of e-tickets drives
                 the your online ticket booking experience insanely 
                 convenient.  Standard assurance of e- tickets takes you to
                 next level and you will never loss you concert ticket again!    "
                 />  
          </Grid>                
            </Grid>
        </div>
    );
}
export default about;