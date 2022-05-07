import React from 'react';
import Image from 'next/image';
import lock from '../../assets/lock.png'
import { Box, Grid, } from '@mui/material';
import Fab from '@mui/material/Fab';

import styles from './styles.module.css'
import classnames from 'classnames';

interface ResetPwdProps {

}

const Passwordresetmanager: React.FC<ResetPwdProps> = ({ }) => {

    /*const [login_email,login_setEmail] = React.useState<string>("");*/
    const [currentpwd, setcurrentpwd] = React.useState("");
    const [newpwd, setnewpwdpw] = React.useState("");
    const [cnewpwd, setcnewpwdpw] = React.useState("");

    return (
        <div className={styles.container} id="container">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item md={7} className={styles.pwd_container}>
                        <div className={styles.form_wrapper}>
                            <form className={styles.modern_form} action="#">
                                <h1 className={styles.head_password} >Reset Password</h1>
                                <input
                                    className={styles.inputbox_modern}
                                    type="password"
                                    placeholder="Current password"
                                    value={currentpwd}
                                    onChange={(e) => setcurrentpwd(e.target.value)}
                                // onBlur={emailBlurHandler} 
                                />
                                <input
                                    className={styles.inputbox_modern}
                                    type="password"
                                    placeholder="New Password"
                                    value={newpwd}
                                    onChange={(e) => setnewpwdpw(e.target.value)}
                                // onBlur={emailBlurHandler} 
                                />
                                <input
                                    className={styles.inputbox_modern}
                                    type="password"
                                    placeholder="Confirm New Password"
                                    value={cnewpwd}
                                    onChange={(e) => setcnewpwdpw(e.target.value)}
                                // onBlur={emailBlurHandler} 
                                />
                                <br /><br />
                                <div className={styles.manager_reset_password_submit_button}>
                                    <Fab variant="extended" size="medium" background-color="#752E9E" aria-label="newpwd" margin-left="40%">
                                        SUBMIT
                                    </Fab>
                                </div>
                            </form>

                        </div>

                    </Grid>
                    <Grid item xs className={styles.box_1} >
                        <div className={styles.content_1}>
                            <Image
                                src={lock}
                                layout="responsive"
                                m-50='true'
                                alt='Invalid Format'
                            >
                            </Image>

                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>

    );



}
export default Passwordresetmanager;