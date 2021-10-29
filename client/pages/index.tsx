import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image';
import ticket from '../assets/online-ticket.png'
import CreateIcon from '@mui/icons-material/Create';
import {Button} from '@mui/material';
import Navbar from '../components/Navbar'

const index: NextPage = () => {
    const router = useRouter()

    const create = (event:any)=>{
    event.preventDefault();
    router.push('/user'); 
       
    }
        return (
            
            <div className="main-container">
             <Navbar/>
             <div className ="top-container">
                 <div className ="left-container">
                            <div className="text-1">
                             You dream it <br/> We ticket it
                            </div>
                            <div className= "text-2">
                            The best place to sell your <br/>
                            fully customized event tickets.<br/><br/>
                            Join with TickBid today
                            </div>
                            <div className="btn-class">
                            <Button 
                            className= "btn-create" 
                             variant="contained" 
                             startIcon = {<CreateIcon/>}
                             onClick={create}
                             >Create Event</Button>
                             </div> 
                 </div>
                 <div className ="right-container">
                 <Image
                     src = {ticket}
                     layout = "responsive"
                     m-50
                    ></Image>   
                 </div>
            
             </div>
             
           </div>
            
        );
}

export default index;