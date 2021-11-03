import React from 'react';
import Image from 'next/image';
import lock from '../../assets/lock.png'
import {Box,Grid,} from '@mui/material';
import Approvesellers from '../../components/manager/Approvesellers'

interface ResetPwdProps {

}

const Passwordresetmanager: React.FC<ResetPwdProps> = ({}) => {

  const [login_email,login_setEmail] = React.useState<string>("");
  const [currentpwd, setcurrentpwd] = React.useState("");
  const [newpwd, setnewpwdpw] = React.useState("");
  const [cnewpwd, setcnewpwdpw] = React.useState("");

    return(
        <div className="container" id="container" >
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item md={7} className = "pwd_container" >
                <div className="form-wrapper">
                        <form className='modern-form' action="#">
                         <h1 className = "head-password" >Reset Password</h1>
                        <input 
                         className='inputbox-modern' 
                         type="email" 
                         placeholder="Current password"
                         value={currentpwd}
                         onChange={(e)=>setcurrentpwd(e.target.value)}
                        // onBlur={emailBlurHandler} 
                          />
                        <input 
                         className='inputbox-modern' 
                         type="email" 
                         placeholder="New Password"
                         value={newpwd}
                         onChange={(e)=>setnewpwdpw(e.target.value)}
                        // onBlur={emailBlurHandler} 
                          />
                        <input 
                         className='inputbox-modern' 
                         type="email" 
                         placeholder="Confirm New Password"
                         value={cnewpwd}
                         onChange={(e)=>setcnewpwdpw(e.target.value)}
                        // onBlur={emailBlurHandler} 
                          />
                          <br/><br/>
                          <button className='modern-btn'>Rest Password</button>
                          </form>
                          
                   </div>
                    
                </Grid>
                <Grid item xs className = "box-1" >
                <div className="content-1">
                <Image
                     src = {lock}
                     layout = "responsive"
                     m-50
                    >
                        </Image>    
                        <Approvesellers/>
                 </div>        
                </Grid>
                        
            </Grid>
        </Box>  
</div>

    );



}
export default Passwordresetmanager;