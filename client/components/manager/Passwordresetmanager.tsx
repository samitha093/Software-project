import React from 'react';
import Image from 'next/image';
import lock from '../../assets/lock.png'
import { Box, Grid, } from '@mui/material';
import Sellerapproval from '../../components/manager/Sellerapproval'
import Fab from '@mui/material/Fab';

interface ResetPwdProps {

}

const Passwordresetmanager: React.FC<ResetPwdProps> = ({ }) => {

    /*const [login_email,login_setEmail] = React.useState<string>("");*/
    const [currentpwd, setcurrentpwd] = React.useState("");
    const [newpwd, setnewpwdpw] = React.useState("");
    const [cnewpwd, setcnewpwdpw] = React.useState("");

    return (
        <div className="container" id="container" >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item md={7} className="pwd_container">
                        <div className="form-wrapper">
                            <form className='modern-form' action="#">
                                <h1 className="head-password" >Reset Password</h1>
                                <input
                                    className='inputbox-modern'
                                    type="password"
                                    placeholder="Current password"
                                    value={currentpwd}
                                    onChange={(e) => setcurrentpwd(e.target.value)}
                                // onBlur={emailBlurHandler} 
                                />
                                <input
                                    className='inputbox-modern'
                                    type="password"
                                    placeholder="New Password"
                                    value={newpwd}
                                    onChange={(e) => setnewpwdpw(e.target.value)}
                                // onBlur={emailBlurHandler} 
                                />
                                <input
                                    className='inputbox-modern'
                                    type="password"
                                    placeholder="Confirm New Password"
                                    value={cnewpwd}
                                    onChange={(e) => setcnewpwdpw(e.target.value)}
                                // onBlur={emailBlurHandler} 
                                />
                                <br /><br />
                                <Fab variant="extended" size="medium" background-color="#752E9E" aria-label="newpwd">
                                    SUBMIT
                                </Fab>
                            </form>

                        </div>

                    </Grid>
                    <Grid item xs className="box-1" >
                        <div className="content-1">
                            <Image
                                src={lock}
                                layout="responsive"
                                m-50='true'
                                alt=''
                            >
                            </Image>
                            <Sellerapproval />

                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>

    );



}
export default Passwordresetmanager;