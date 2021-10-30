import React from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import lock from '../../assets/lock.png'
import { Box, Grid, } from '@mui/material';

import Sellerapproval from '../../components/manager/Sellerapproval'
import Fab from '@mui/material/Fab';

interface Passwordresetmanager {

}

const Passwordresetmanager: React.FC<Passwordresetmanager> = ({ }) => {

    /*const [login_email,login_setEmail] = React.useState<string>("");
    const [login_emailHasError,login_setEmailError] = React.useState<boolean>(false);
    
    const login_emailChangeHandler = (event:any)=>{
      login_setEmail(event.target.value);
      const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const valid = !!event.target.value.match(email_regex);
      login_setEmailError(!valid);
    }*/
    return (
        <div className="container" id="container" >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item md={7} className="manager-password-container" >
                        <div className="manager-password-form-wrapper">
                            <form className='modern-form' action="#">
                                <h1 className="head-password" >Reset Password</h1>

                                <input
                                    className='inputbox-modern'
                                    type="password"
                                    placeholder="Enter Current Password"
                                //value={login_email}
                                //onChange={login_emailChangeHandler}
                                // onBlur={emailBlurHandler} 
                                />
                                <input
                                    className='inputbox-modern'
                                    type="password"
                                    placeholder="Enter New Password"
                                //value={login_email}
                                //onChange={login_emailChangeHandler}
                                // onBlur={emailBlurHandler} 
                                />
                                <input
                                    className='inputbox-modern'
                                    type="password"
                                    placeholder="Confirm New Password"
                                //value={login_email}
                                //onChange={login_emailChangeHandler}
                                // onBlur={emailBlurHandler} 
                                />

                                <Fab variant="extended" size="medium" background-color="#BB9CD1" aria-label="add">
                                    SUBMIT
                                </Fab>
                                <br />
                            </form>
                        </div>

                    </Grid>
                    <Grid item xs className="box-1" >
                        <div className="manager-password-content-1">
                            <Image
                                src={lock}
                                layout="responsive"
                                m-50
                            ></Image>
                            <Sellerapproval />
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>

    );



}
export default Passwordresetmanager;