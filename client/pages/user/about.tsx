import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Image from 'next/dist/client/image';
import seat from '../../assets/Seat.jpeg'
import social_distance from '../../assets/Social-distance.jpeg'
import payment from '../../assets/payment.jpg'

const about: NextPage = () => {
    return (
        <div className= "main-container-1" >
            <Navbar/>
            <div className ="top-container">
                     <div className ="left-container-1">
                       <div className="text-3">
                           Reserve your seat with <br/>  Online Ticketing Platform
                       </div>
                       <div className= "text-2">
                             This is a convenient ticketing platform to all with tight<br/>
                             schedules now can simply visit us to quick check the best <br/> event
                             reserve your seat from any place and at any time. <br/>With many exiting
                             events coming up our 24/7  service <br/> provides the chance to choose your seat. 
                       </div>
                    </div> 
                    <div className ="right-container-1">
                      <Image
                        src = {seat}
                        layout = "responsive"
                        p-30
                       ></Image> 
                    </div>  
            </div>
            <div className ="top-container">
                    <div className ="right-container-1">
                      <Image
                        src = {social_distance}
                        layout = "responsive"
                        p-30
                       ></Image> 
                    </div>  
                     <div className ="left-container-1">
                       <div className="text-3">
                               Improve Social Distancing <br/>  Say No to long queues
                       </div>
                       <div className= "text-2">
                             Our virtual ticket box improves health security of the society while<br/>
                             improving the social-distancing policies and health guidelines<br/> 
                             relevant to the Covid-19 pandemic situation by reducing long queues<br/>
                             in front of the conventional tickets booths and social distancing <br/>
                            reservations provided by the event organizers." 
                       </div>
                    </div> 
            </div>
            <div className ="top-container">
                     <div className ="left-container-1">
                       <div className="text-3">
                           Easy Payment optionss <br/> and e- tickets
                       </div>
                       <div className= "text-2">
                              We offer more options for the payments as preferences , <br/>
                              instant confirmation and quick purchase of e-tickets drives<br/>
                              the your online ticket booking experience insanely <br/>
                              convenient.  Standard assurance of e- tickets takes you to<br/>
                              next level and you will never loss you concert ticket again! <br/>
                       </div>
                    </div> 
                    <div className ="right-container-1">
                      <Image
                        src = {payment}
                        layout = "responsive"
                        p-30
                       ></Image> 
                    </div>  
            </div>
            
        </div>   
    );
}
export default about;