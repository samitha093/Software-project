import React, { useState } from 'react';
import Image from 'next/image';
import lock from '../../assets/lock.png'
import { Box, Grid, } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import axios from 'axios';

import Categorylist from '../../components/manager/Categorylist'

import styles from './styles.module.css'
import classnames from 'classnames';

interface ResetPwdProps {

}

const Passwordresetmanager: React.FC<ResetPwdProps> = ({ }) => {

    const router = useRouter()

    const [currentpassword, setCurrentpassword] = React.useState<string>("");
    const [currentpasswordHasError, setCurrentpasswordError] = React.useState<boolean>(false);

    const [newpassword, setNewpassword] = React.useState("");
    const [newpasswordError, setNewpasswordError] = React.useState<boolean>(false);

    const [confirmPassword, setConfirmpassword] = React.useState("");
    const [validationError, setvalidationerror] = React.useState<boolean>(false);

    //Need a function to retrieve and store current password

    async function passwordResetHandler() {
        const datapack = {
            password: newpassword
        }
        //There should be routing part here. (Refer USER)
    }

    const newpasswordChangeHandler = (e: any) => {
        setNewpassword(e.target.value);
        const valid = e.target.value.trim().length >= 5;
        setNewpasswordError(!valid);
    }

    const confirmPasswordChangeHandler = async (event: any) => {
        var np = new String(newpassword);
        var cp = new String(confirmPassword);
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
                                    <input
                                        className={styles.inputbox_modern}
                                        type="password"
                                        placeholder="Current password"
                                        value={currentpassword}
                                        onChange={(e) => setCurrentpassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        className={styles.inputbox_modern}
                                        type="password"
                                        placeholder="New Password"
                                        value={newpassword}
                                        onChange={(e) => setNewpassword(e.target.value)}
                                    //onChange = {newpasswordChangeHandler}
                                    />
                                </div>
                                {newpasswordError && (<p className="error_message"> * Password can not be empty</p>)}

                                <div>
                                    <input
                                        className={styles.inputbox_modern}
                                        type="password"
                                        placeholder="Confirm New Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmpassword(e.target.value)}
                                    //onChange={confirmPasswordChangeHandler}
                                    />
                                </div>
                                {validationError && (<p className="error_message"> * Confirm password should match with new password</p>)}

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