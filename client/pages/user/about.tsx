import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Image from 'next/dist/client/image';
import seat from '../../assets/Seat.jpeg'
import social_distance from '../../assets/Social-distance.jpeg'
import aud from '../../assets/aud.jpeg'
import payment from '../../assets/payment.jpeg'
import virus from '../../assets/virus.png'
import chair from '../../assets/office-chair.png'
import money from '../../assets/money.png'
import { grey } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import CreateIcon from '@mui/icons-material/Create';
import {Button} from '@mui/material';

const about: NextPage = () => {

  const router = useRouter()

    const create = (event:any)=>{
    event.preventDefault();
    router.push('/user'); 
       
    }
    return (
        <div style={{backgroundColor:'#FEFEF9'}}  >
            <Navbar/>
            <div className ="top-container">
                     <div className ="left-container-1">
                       <div className="text-3">
                           Reserve your seat with <br/>  Online Ticketing Platform
                       </div>
                       <div className ="icon">
                          <Image
                             src = {chair}
                             width={40}
                             height={40}
                             alt= " "
                          ></Image>    
                       </div>
                       <div className= "text-2-wrap">
                       <div className= "text-2">
                             This is a convenient ticketing platform to 
                              all with tight schedules now can simply visit 
                              us to quick check the best  event reserve your 
                              seat from any place and at any time. 
                              With many exiting events coming up our 24/7  
                              service provides the chance to choose your seat. 
                       </div>
                       </div>
                    </div> 
                   
                    <div className ="right-container-1">
                      <Image
                        src = {seat}
                        layout = "responsive"
                        p-30
                        alt= " "
                       ></Image> 
                    </div>  
            </div>
            <div className ="top-container">
                    <div className ="right-container-1">
                      <Image
                        src = {social_distance}
                        layout = "responsive"
                        p-30
                        alt= " "
                       ></Image> 
                    </div>  
                     <div className ="left-container-1">
                       <div className="text-3">
                               Improve Social Distancing <br/>  Say No to long queues
                       </div>
                       <div className ="icon">
                          <Image
                             src = {virus}
                             width={40}
                             height={40}
                             alt= " "
                          ></Image>    
                       </div>
                       <div className= "text-2-wrap">
                       <div className= "text-2">
                             Our virtual ticket box improves health security of 
                             the society while improving the social-distancing
                             policies and health guidelines relevant to the 
                             Covid-19 pandemic situation by reducing long queues
                             in front of the conventional tickets booths and
                            social distancing reservations provided by the event
                            organizers.
                       </div>
                       </div>
                    </div> 
            </div>
            <div className ="top-container">
                     <div className ="left-container-1">
                       <div className="text-3">
                           Easy Payment options <br/> and e- tickets
                       </div>
                       <div className ="icon">
                          <Image
                             src = {money}
                             width={40}
                             height={40}
                             alt= " "
                          ></Image>    
                       </div>
                       <div className= "text-2-wrap">
                       <div className= "text-2">
                             We offer more options for the payments as preferences, 
                             instant confirmation and quick purchase of e-tickets
                             drives the your online ticket booking experience insanely 
                             convenient.  Standard assurance of e- tickets takes you 
                             to next level and you will never loss you concert ticket 
                            again! 
                       </div>
                       </div>
                    </div> 
                    <div className ="right-container-1">
                      <Image
                        src = {payment}
                        layout = "responsive"
                        alt= " "
                        p-30
                       ></Image> 
                    </div>
                </div>
                <div className ="top-container">
                    <div className ="right-container-1">
                      <Image
                        src = {aud}
                        layout = "responsive"
                        p-30
                        alt= " "
                       ></Image> 
                    </div>  
                     <div className ="left-container-1">
                       <div className="text-1">
                       Reserve your Ticket now ..
                       </div>
                       <div className= "text-2-wrap">
                       <div className= "text-2">
                         <br/>  <br/>
                            With online bookings you can round the clock at 
                            any time without leaving home. Find out more about
                             your favorite event. E- tickets and instant confirmation
                             secure your payments. Hurry up! bid and win your ticket.
                                      
                       </div>
                       </div>
                       <div className="btn-class">
                       <Button 
                            className= "btn-create" 
                             variant="contained" 
                             startIcon = {<CreateIcon/>}
                             onClick={create}
                             >Buy Tickets</Button>
                             </div> 
                    </div> 
            </div>






                <div className ="top-container"> 
                       <div className ="footer">
                          <div className ="aboutus">
                            <h2 className ="h2">About us</h2>
                            <p>TickBid is a powerful online event ticketing platform to 
                               sell  your event tickets and grow your events
                               & revenue without spending much time on 
                               traditional ticket sales. Build an awesome ticketing
                               experience, reach new attendees by giving access to
                                your ticket counter  to any fan at anywhere. Join with us!</p>
                                <IconButton>
                              <GitHubIcon sx={{ color: grey[300] }}/>
                              </IconButton>
                          </div>
                          <div className ="Quicklinks">
                            <h2 className ="h2">Quick Links</h2>
                            <ul>
                            <li><a href = "#" color="#a688a7">About Us</a></li>
                             <li> <a href = "#">Contact</a></li>
                            </ul>  
                          </div>
                          <div className ="contact">
                            <h2 className ="h2">Contact info</h2>
                            <div className ="row">
                              <div> <LocationOnIcon sx={{ color: grey[300] }}/></div>
                              <div className="text-4">fhjsfhjdhjshfjsfhjdf</div> 
                            </div>
                            <div className ="row">
                              <div> <PhoneInTalkRoundedIcon sx={{ color: grey[300] }}/></div>
                              <div className="text-4"> +94 779384983  <br/> +94 779384983 </div> 
                            </div>
                            <div className ="row">
                              <div> <AlternateEmailIcon sx={{ color: grey[300] }}/></div>
                              <div className="text-4">fhjsfhjdhjshfjsfhjdf</div> 
                            </div>
                          </div>   
                       </div> 
                </div> 
            
        </div>   
    );
}
export default about;