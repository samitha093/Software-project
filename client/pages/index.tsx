import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image';
import ticket from '../assets/online-ticket.png'
import CreateIcon from '@mui/icons-material/Create';
import {Button} from '@mui/material';
import Navbar from '../components/Navbar'
import Shop from '../components/Shop'
import { color } from '@mui/system';

const index: NextPage = () => {
    const router = useRouter()

    const create = (event:any)=>{
    event.preventDefault();
    router.push('/user'); 
       
    }
        return (
            <div className='index'>
                <div className="main-container">
                    <Navbar/>
                    <div className ="top-container">
                        <div className ="left-container">
                                    <div className="text-1" style={{display:'block'}}>
                                    <h2 style={{color:'#3b1c4e'}}>You dream it</h2>
                                    <div style={{marginTop:'-60px', color:'#212121'}}> We ticket it</div>
                                    </div>
                                    <div className= "text-2">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                    </div>
                                    <div className="btn-class">
                                    <Button 
                                    className= "btn-create" 
                                    variant="contained" 
                                    startIcon = {<CreateIcon/>}
                                    onClick={create}
                                    >Publish an Event</Button>
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
                <div>
                    <div className='trending-board-container'><h2 className='trending-board'>Trending Events</h2></div>
                    <Shop />
                </div>
            </div>
            
            
        );
}

export default index;