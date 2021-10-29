import React from 'react';
import Image from 'next/image';
import lock from '../../assets/lock.png'
import {Box,Grid,} from '@mui/material';

interface ForgotpwdProps {

}

const Forgotpwd: React.FC<ForgotpwdProps> = ({}) => {

  const [login_email,login_setEmail] = React.useState<string>("");
  const [login_emailHasError,login_setEmailError] = React.useState<boolean>(false);
  
  const login_emailChangeHandler = (event:any)=>{
    login_setEmail(event.target.value);
    const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const valid = !!event.target.value.match(email_regex);
    login_setEmailError(!valid);
  }
    return(
        <div className="container" id="container" >
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item md={7} className = "pwd_container" >
                <div className="form-wrapper">
                        <form className='modern-form' action="#">
                         <h1 className = "head-password" >Forgot Password</h1>
                         {login_emailHasError && (<p className="error-message"> * Invalid email</p>)}
                        <input 
                         className='inputbox-modern' 
                         type="email" 
                         placeholder="Your Email"
                         value={login_email}
                         onChange={login_emailChangeHandler}
                        // onBlur={emailBlurHandler} 
                          />
                          <br/><br/>
                          <button className='modern-btn'>Send Email</button>
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
export default Forgotpwd;