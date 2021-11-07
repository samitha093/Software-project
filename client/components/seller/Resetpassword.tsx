import React from 'react';
import Image from 'next/image';
import lock from '../../assets/lock.png'
import {Box,Grid,} from '@mui/material';

interface ForgotpwdProps {

}

const Resetpassword: React.FC<ForgotpwdProps> = ({}) => {

  const [login_email,login_setEmail] = React.useState<string>("");
  const [currentpw, setcurrentpw] = React.useState("");
  const [newpw, setnewpwpw] = React.useState("");
  const [cnewpw, setcnewpwpw] = React.useState("");

    return(
        <div className="container" id="container" >
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item md={7} className = "pwd_container" >
                <div className="form-wrapper">
                        <form className='modern-form' action="#">
                         <h1 className = "head-password" >Rest Password</h1>
                        <input 
                         className='inputbox-modern' 
                         type="password" 
                         placeholder="Current password"
                         value={currentpw}
                         onChange={(e)=>setcurrentpw(e.target.value)}
                        // onBlur={emailBlurHandler} 
                          />
                        <input 
                         className='inputbox-modern' 
                         type="password" 
                         placeholder="New Password"
                         value={newpw}
                         onChange={(e)=>setnewpwpw(e.target.value)}
                        // onBlur={emailBlurHandler} 
                          />
                        <input 
                         className='inputbox-modern' 
                         type="password" 
                         placeholder="Confirm New Password"
                         value={cnewpw}
                         onChange={(e)=>setcnewpwpw(e.target.value)}
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
                    ></Image>    
                 </div>
                            
                </Grid>
                        
            </Grid>
        </Box>  
</div>

    );



}
export default Resetpassword;