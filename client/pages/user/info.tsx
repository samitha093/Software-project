import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Image from 'next/image';
import seat from '../../assets/Seat.jpeg'

const info: NextPage = () => {
    return (
        <div className= "main-container-1" >
        
             <Navbar/>
            <div className ="top-container">
                 <div className ="left-container">
                    <div className="text-3">
                           Reserve your seat with <br/>  Online Ticketing Platform
                    </div>
                    <div className= "text-2">
                             "This is a convenient ticketing platform to all with tight<br/>
                             schedules now can simply visit us to quick check the best <br/> event
                             reserve your seat from any place and at any time. <br/>With many exiting
                             events coming up our 24/7  service <br/> provides the chance to choose your seat." 
                    </div>
                          
                  </div>          
                    </div>
                 <div className ="right-container">
                   <Image
                     src = {seat}
                     layout = "responsive"
                     m-50
                    ></Image>   
                </div>
            </div>
                
     
    
        
    );
}
export default info;