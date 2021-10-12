import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import CreateIcon from '@mui/icons-material/Create';
import {Button,Grid,Stack} from '@mui/material';
import Navbar from '../components/Navbar'

const index: NextPage = () => {
    const router = useRouter()

    const create = (event:any)=>{
    event.preventDefault();
    router.push('/user'); 
       
    }
        return (
            <div className="index-bg">
             <Navbar/>
             <div className ="index_container">
             <Grid container className = "content" >
                 <Grid item xs={4}  >
                     <Stack spacing = {7}>
                            <div className="text-1">
                             You dream it <br/><br/> We ticket it
                            </div>
                            <div className= "text-2">
                            The best place to sell your <br/>
                            fully customized event tickets  
                            </div>
                            <Button 
                            className= "btn-create" 
                             variant="contained" 
                             startIcon = {<CreateIcon/>}
                             onClick={create}
                             >Create Event</Button>
                      </Stack>  
              </Grid>  </Grid>  

             </div>
             
           </div>
            
        );
}

export default index;