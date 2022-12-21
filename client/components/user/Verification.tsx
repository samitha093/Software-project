import React from 'react';
import Image from 'next/image';
import verify from '../../assets/verify1.png'
import {Box,Grid,} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import Swal from 'sweetalert2'
import axios from 'axios'

import {getfastify, getmyhost, gethost} from '../../session/Session';

import { useRouter } from "next/router";

interface VerificationProps {
  email:any,
  otp:any
}

const Verification: React.FC<VerificationProps> = ({email,otp}) => {

  const { query } = useRouter();

  const [login_email,login_setEmail] = React.useState<string>("");
  const [login_emailHasError,login_setEmailError] = React.useState<boolean>(false);
  
  const login_emailChangeHandler = (event:any)=>{
    login_setEmail(event.target.value);
    const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const valid = !!event.target.value.match(email_regex);
    login_setEmailError(!valid);
  }

  const verification = (event:any)=>{

  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  React.useEffect(()=>{
    // console.log(email)
    // console.log(otp)
  })
    return(
        <div className="container" id="container" >
        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item md={6} className = "pwd_container" >
                <div className="form_wrapper">
                        <div className="modern_form" >

                          <h1 className = "head_password" >Re-Verification</h1>
                          {login_emailHasError && (<p className="error_message"> * Invalid email</p>)}

                          <div className ="input_box_container"> 
                          <div className ="icn"><EmailIcon sx={{ fontSize: 18 }}></EmailIcon></div> 
                          <input 
                          className="inputbox_modern"
                          type="email" 
                          placeholder="Your Email"
                          value={email}
                          // onChange={login_emailChangeHandler}
                          // onBlur={emailBlurHandler} 
                          /></div>

                          <div className ="input_box_container"> 
                          <div className ="icn"><MobileFriendlyIcon sx={{ fontSize: 18 }}></MobileFriendlyIcon></div> 
                          <input 
                          className="inputbox_modern_otp"
                          type="text" 
                          placeholder="OTP"
                          value={otp}
                          // onChange={login_emailChangeHandler}
                          // onBlur={emailBlurHandler} 
                          /></div>  

                           <br/><br/>
                          <button className="modern_btn" onClick={verification}>Verify</button>

                          
                   </div>
                </div>   
                </Grid>
                <Grid item xs className = "box_1" >
                <Image
                     src = {verify}
                     layout = "responsive"
                     m-100
                     alt= " "
                    ></Image>            
                </Grid>
                        
            </Grid>
        </Box>  
</div>

    );



}
export default Verification;