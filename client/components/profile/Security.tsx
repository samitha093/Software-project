import React from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import styles from '../manager/styles.module.css'
import Swal from 'sweetalert2'
import axios from 'axios';
//Session and local storage data
import { gethost } from '../../session/Session';

function Security() {
    const router = useRouter()

    const [newpassword, setNewpassword] = React.useState("");
    const [newpasswordError, setNewpasswordError] = React.useState<boolean>(false);

    const [confirmPassword, setConfirmpassword] = React.useState("");
    const [validationError, setvalidationerror] = React.useState<boolean>(false);

    async function passwordResetHandler() {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your password will be reset",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reset the password!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
                    const config = {
                        headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                    };
                    const datapack = {
                        password: confirmPassword
                    };
                    axios.post(gethost() + 'a/resetpassword', datapack, config).then(async (res) => {
                    })
                        .catch(() => {
                            Swal.fire(
                                'Successfully Added!',
                                'this area has been Added.',
                                'success'
                            )
                        })
                })
                    .catch((err) => { })
            }
        })
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
        <div>
            <div className={styles.form_wrapper}>
                <form className={styles.modern_form} action="#">
                    <div className={styles.manager_password_text}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
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
                    {newpasswordError && (<p className={styles.manager_error_message}> * Password doesn't follow given standards. Please check and enter the password again</p>)}

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
                    {validationError && (<p className={styles.manager_error_message}> * Confirm password must match with the new password</p>)}

                    <br />
                    <div className={styles.manager_reset_password_submit_button}>
                        <Button disabled={validationError} variant="contained" size="medium" onClick={passwordResetHandler}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Security