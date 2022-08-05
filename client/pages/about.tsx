import React  from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/dist/client/image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import CreateIcon from '@mui/icons-material/Create';
import { grey } from '@mui/material/colors';
import {Button} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import seat from '../assets/seat.png'
import social_distance from '../assets/social.jpg'
import aud from '../assets/aud.jpeg'
import mock from '../assets/mock.png'
import payment from '../assets/payment.jpeg'
import bid from '../assets/bid.jpg'
import stat from '../assets/stat.png'
import virus from '../assets/virus.png'
import chair from '../assets/office-chair.png'
import money from '../assets/money.png'

import style from './user/style.module.css'


const about: NextPage = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  
  const router = useRouter()

    const create = (event:any)=>{
    event.preventDefault();
    router.push('/events'); 
       
    }
    return (
        <div>
            <Navbar/>
            <h1 className={style.h1}>TickBid Event Ticketing Platform</h1>
            <div className={style.main_container_2}>
            <div className ={style.top_container_1} style={{backgroundColor:'#DCD1E1'}}>
                     <div className ={style.left_container_1}>
                       <div className={style.text_3}>
                           Reserve your seat with Online Ticketing Platform
                       </div>
                       <div className ={style.icon}>
                          <Image
                             src = {chair}
                             width={50}
                             height={50}
                             alt= " "
                          ></Image>    
                       </div>
                       <div className= {style.text_2_wrap}>
                       <div className= {style.text_2}>
                             This is a convenient ticketing platform to 
                              all with tight schedules now can simply visit 
                              us to quick check the best event reserve your 
                              seat from any place and at any time. 
                              With many exiting events coming up our 24/7  
                              service provides the chance to choose your seat. 
                       </div>
                       </div>
                    </div> 
                   
                    <div className ={style.right_container_1}>
                      <Image
                        src = {seat}
                        width={900}
                        height={700}
                        p-30='true'
                        alt= " "
                       ></Image> 
                    </div>  
            </div>
            <div data-aos='fade-left' className ={style.top_container_1} style={{backgroundColor:'#CFEAEA'}}>
                    <div className ={style.right_container_1}>
                      <Image
                        src = {social_distance}
                        layout = "responsive"
                        p-30='true'
                        alt= " "
                       ></Image> 
                    </div>  
                     <div className ={style.left_container_1}>
                       <div className={style.text_3}>
                               Improve Social Distancing. Say No to long queues
                       </div>
                       <div className ={style.icon}>
                          <Image
                             src = {virus}
                             width={50}
                             height={50}
                             alt= " "
                          ></Image>    
                       </div>
                       <div className= {style.text_2_wrap}>
                       <div className= {style.text_2}>
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
            <div data-aos='fade-right'  className ={style.top_container_1} style={{backgroundColor:'#DAE1F3'}}>
                     <div className ={style.left_container_1}>
                       <div className={style.text_3}>
                           Easy Payment options and e- tickets
                       </div>
                       <div className ={style.icon}>
                          <Image
                             src = {money}
                             width={50}
                             height={50}
                             alt= " "
                          ></Image>    
                       </div>
                       <div className= {style.text_2_wrap}>
                       <div className= {style.text_2}>
                             We offer more options for the payments as preferences, 
                             instant confirmation and quick purchase of e-tickets
                             drives the your online ticket booking experience insanely 
                             convenient.Standard assurance of e-tickets takes you 
                             to next level and you will never loss you concert ticket 
                            again! 
                       </div>
                       </div>
                    </div> 
                    <div className ={style.right_container_1}>
                      <Image
                        src = {payment}
                        layout = "responsive"
                        alt= " "
                        p-30='true'
                       ></Image> 
                    </div>
                </div>
                <div data-aos='fade-left'  className ={style.top_container}>
                    <div className ={style.right_container_1}>
                      <Image
                        src = {aud}
                        layout = "responsive"
                        p-30='true'
                        alt= " "
                       ></Image> 
                    </div>  
                     <div className ={style.left_container_1}>
                       <div className={style.text_1}>
                       Reserve your Ticket now ...
                       <br/><br/>
                       </div>
                       <div className= {style.text_2_wrap}>
                       <div className= {style.text_2}>
                         
                            With online bookings you can round the clock at 
                            any time without leaving home. Find out more about
                            your favorite event.E-tickets and instant confirmation
                            secure your payments. Hurry up! bid and win your ticket.
                            <br/><br/><br/> 
                                      
                       </div>
                       </div>
                       <div className={style.btn_class}>
                       <Button 
                            className= {style.btn_create} 
                             variant="contained" 
                             startIcon = {<CreateIcon/>}
                             onClick={create}
                             >Buy Tickets</Button>
                             </div> 
                    </div> 
            </div>

            <div data-aos='fade-right' className ={style.top_container_1} style={{backgroundColor:'#DCD1E1'}}>
                     <div className ={style.right_container_1}>
                      <Image
                        src = {mock}
                        layout = "responsive"
                        p-30='true'
                        alt= " "
                       ></Image> 
                    </div>  
                     <div className ={style.left_container_1}>
                       <div className={style.text_3}>
                       Create your & sell your Tickets Virtual Ticket Box 
                       </div>
                       <div className= {style.text_2_wrap}>
                       <div className= {style.text_2}>
                       <br/>  <br/>
                                 Our simple to use ticketing page builder lets you create an 
                                  attractive ticketing page that fits to your unique event with our
                                  super easy integrated tools,all without any technical knowledge
                                  &  also supported with live preview, setting open and closed
                                 dates, & multiple ticket options. 
                       </div>
                       </div>
                    </div>
            </div>
            <div data-aos='fade-left' className ={style.top_container_1} style={{backgroundColor:'#CFEAEA'}}>
                     <div className ={style.left_container_1}>
                       <div className={style.text_3}>
                          Premium Experiences with our Bidding System 
                       </div>
                       <div className= {style.text_2_wrap}>
                       <div className= {style.text_2}>
                          <br/><br/>
                                Create multiple levels of tickets and put into the 
                                 auction. Introducing pre-ticketing event duration & 
                                event ticket auction enables the best prices for your
                                tickets creating competitive marketing environment 
                                and handles the dynamic event ticket prices.
                       </div>
                       </div>
                    </div> 
                   
                    <div className ={style.right_container_1}>
                      <Image
                        src = {bid}
                        layout = "responsive"
                        p-30='true'
                        alt= " "
                       ></Image> 
                    </div>  
            </div>
            <div data-aos='fade-right' className ={style.top_container_1} style={{backgroundColor:'#DAE1F3'}}>
                     <div className ={style.right_container_1}>
                      <Image
                        src = {stat}
                        layout = "responsive"
                        p-30
                        alt= " "
                       ></Image> 
                    </div>  
                     <div className ={style.left_container_1}>
                       <div className={style.text_3}>
                       Marketing Insights & Analytical Reports

                       </div>
                       <div className= {style.text_2_wrap}>
                       <div className= {style.text_2}>
                       <br/>  <br/>
                             With online bookings you can round the clock at 
                            any time without leaving home. Find out more about
                             your favorite event. E-tickets and instant confirmation
                             secure your payments. Hurry up! bid and win your ticket. 
                       </div>
                       </div>
                    </div>
            </div>   
            </div>
    
                <div className ={style.top_container}> 
                       <div className ={style.footer}>
                          <div className ={style.aboutus}>
                            <h2 className ={style.h2}>About us</h2>
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
                          <div className ={style.Quicklinks}>
                            <h2 className ={style.h2}>Quick Links</h2>
                            <ul>
                            <li><a href = "/" color="#a688a7">About Us</a></li>
                             <li> <a href = "#">Contact</a></li>
                            </ul>  
                          </div>
                          <div className ={style.contact}>
                            <h2 className ={style.h2}>Contact info</h2>
                            <div className ={style.row}>
                              <div> <LocationOnIcon sx={{ color: grey[300] }}/></div>
                              <div className={style.text_4}>fhjsfhjdhjshfjsfhjdf</div> 
                            </div>
                            <div className ={style.row}>
                              <div> <PhoneInTalkRoundedIcon sx={{ color: grey[300] }}/></div>
                              <div className={style.text_4}> +94 779384983  <br/> +94 779384983 </div> 
                            </div>
                            <div className ={style.row}>
                              <div> <AlternateEmailIcon sx={{ color: grey[300] }}/></div>
                              <div className={style.text_4}>fhjsfhjdhjshfjsfhjdf</div> 
                            </div>
                          </div>   
                       </div> 
                </div> 
                
        </div>   
    );
}
export default about;