import React, { useState } from 'react';
import Image from 'next/image';
import lock from '../../assets/lock.png'
import { Box, Grid, } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';


import Categorylist from '../../components/manager/Categorylist'

import axios from 'axios';
import styles from './styles.module.css'
import classnames from 'classnames';

interface ResetPwdProps {

}

const Passwordresetmanager: React.FC<ResetPwdProps> = ({ }) => {

    const router = useRouter()

    const [newpassword, setNewpassword] = React.useState("");
    const [newpasswordError, setNewpasswordError] = React.useState<boolean>(false);

    const [confirmPassword, setConfirmpassword] = React.useState("");
    const [validationError, setvalidationerror] = React.useState<boolean>(false);

    //Need a function to retrieve and store current password

    async function passwordResetHandler() {
        if (validationError == false) {
            const datapack = {
                password: newpassword
            }
        }
        else{
            {newpasswordError && (<p className={styles.manager_error_message}> Please check again</p>)} 
        }
        //There should be routing part here. (Refer USER)
    }

    const newpasswordChangeHandler = (e: any) => {
        const newpassword_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        const valid = !!e.target.value.match(newpassword_regex);
        setNewpassword(e.target.value);
        setNewpasswordError(!valid);
    }

    const confirmPasswordChangeHandler = async (e: any) => {
        var np = new String(newpassword);
        await setConfirmpassword(e.target.value);
        var cp = new String(e.target.value);
        var isEquel = JSON.stringify(np) === JSON.stringify(cp);
        setvalidationerror(!isEquel);
    }


    return (
        <div className={styles.container} id="container">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item md={7} className={styles.pwd_container}>
                        <div className={styles.form_wrapper}>
                            <form className={styles.modern_form} action="#">
                                <div className={styles.manager_password_text}>
                                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                        Reset Password
                                    </Typography>
                                </div>
                                <div>
                                    <p className={styles.manager_passwordreset_list_topic}>Password must contain,</p>
                                <ul className={styles.manager_passwordreset_list}>
                                        <li>Minimum 8 characters</li>
                                        <li>At least one uppercase letter</li>
                                        <li>At least one lowercase letter</li>
                                        <li>At least one special character</li>
                                    </ul>
                                </div>

                                <div>
                                    <input
                                        className={styles.inputbox_modern}
                                        type="password"
                                        placeholder="New Password"
                                        value={newpassword}
                                        //onChange={(e) => setNewpassword(e.target.value)}
                                        onChange={newpasswordChangeHandler}
                                    />
                                </div>
                                {newpasswordError && (<p className={styles.manager_error_message}> * Password doesn't follow given standards. Please check and enter new password</p>)}

                                <div>
                                    <input
                                        className={styles.inputbox_modern}
                                        type="password"
                                        placeholder="Confirm New Password"
                                        value={confirmPassword}
                                        //onChange={(e) => setConfirmpassword(e.target.value)}
                                        onChange={confirmPasswordChangeHandler}
                                    />
                                </div>
                                {validationError && (<p className={styles.manager_error_message}> * Confirm password must match with new password</p>)}

                                <br />
                                <div className={styles.manager_reset_password_submit_button}>
                                    <Button variant="contained" size="small" onClick={passwordResetHandler}>
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Grid>
                    <Grid item md={5} className={styles.pwd_container}>
                        <div className={styles.content_1}>
                            <Categorylist />
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>

    );



}
export default Passwordresetmanager;