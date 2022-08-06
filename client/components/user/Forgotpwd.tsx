import React from 'react';
import Image from 'next/image';
import lock from '../../assets/lock.png'
import {Box,Grid,} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

import LockIcon from '@mui/icons-material/Lock';

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
                <Grid item md={6} className = "pwd_container" >
                <div className="form_wrapper">
                        <form className="modern_form" action="#">

                          <h1 className = "head_password" >Reset Password</h1>
                          {login_emailHasError && (<p className="error_message"> * Invalid email</p>)}

                          <div className ="input_box_container"> 
                          <div className ="icn"><EmailIcon sx={{ fontSize: 18 }}></EmailIcon></div> 
                          <input 
                          className="inputbox_modern"
                          type="email" 
                          placeholder="Your Email"
                          // value={login_email}
                          // onChange={login_emailChangeHandler}
                          // onBlur={emailBlurHandler} 
                          /></div>

                          <div className ="input_box_container"> 
                          <div className ="icn"><MobileFriendlyIcon sx={{ fontSize: 18 }}></MobileFriendlyIcon></div> 
                          <input 
                          className="inputbox_modern_otp"
                          type="text" 
                          placeholder="OTP"
                          // value={login_email}
                          // onChange={login_emailChangeHandler}
                          // onBlur={emailBlurHandler} 
                          /></div>

                          <div className ="input_box_container"> 
                          <div className="icn"> <LockIcon sx={{ fontSize: 18 }}></LockIcon></div>                       
                            <input 
                            className="inputbox_modern_1"
                            type="password" 
                            placeholder="New Password" 
                            // value={login_password}
                            // onChange={login_passwordChangeHandler}
                            // onBlur={login_passwordChangeHandler}
                            // onBlur={emailBlurHandler}
                            />
                          </div>

                          <div className ="input_box_container"> 
                          <div className="icn"> <LockIcon sx={{ fontSize: 18 }}></LockIcon></div>                       
                            <input 
                            className="inputbox_modern_1"
                            type="password" 
                            placeholder="Conform Password" 
                            // value={login_password}
                            // onChange={login_passwordChangeHandler}
                            // onBlur={login_passwordChangeHandler}
                            // onBlur={emailBlurHandler}
                            />
                          </div>

                          <br/><br/>
                          <button className="modern_btn">Change Password</button>
                        </form>
                          
                   </div>
                    
                </Grid>
                <Grid item xs className = "box_1" >
                <Image
                     src = {lock}
                     layout = "responsive"
                     m-50
                     alt= " "
                    ></Image>            
                </Grid>
                        
            </Grid>
        </Box>  
</div>

    );



}
export default Forgotpwd;