import React from 'react'
import type { NextPage } from 'next'
import CreateIcon from '@mui/icons-material/Create';
import { Typography,Button,TextField,Link,Box,Grid,Stack} from '@mui/material';
import Navbar from '../components/Navbar'

const index: NextPage = () => {
        return (
            <div className="index-bg">
             <Navbar/>
             <div className ="index_container">
             <Grid container className = "content" >
                 <Grid item xs={4}  >
                     <Stack >
                            <div className="text-1">
                             You dream it <br/> We ticket it
                            </div>
                            <div className= "content-2">
                            Please login with personal info & <br/>
                            Keep connected with us.  
                            </div>
                            <Button className= "btn-create"  variant="contained" startIcon = {<CreateIcon/>}>Create Event</Button>
                      </Stack>  
              </Grid>  </Grid>  

             </div>
             
           </div>
            
        );
}

export default index;