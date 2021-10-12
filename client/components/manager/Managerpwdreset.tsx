import React from 'react';
import { useRouter } from 'next/router'
import { Typography, Button, TextField, Link, Box, Grid, Stack } from '@mui/material';


interface ManagerpwdresetProps {

}

const Managerpwdreset: React.FC<ManagerpwdresetProps> = ({ }) => {
    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container xs={12} className="manager-password-container" >
                        <div className="manager-password-form-wrapper">
                            <Typography className="manager-settings-head">Reset Password</Typography>
                            <form className="manager-password-box2">
                                <Stack spacing={4}>
                                    <TextField
                                        type="password"
                                        id="current-password"
                                        placeholder="Current Password"
                                        size="small"
                                        className="textfield"
                                        required
                                    />
                                    <TextField
                                        type="password"
                                        id="new-password"
                                        placeholder="New Password"
                                        size="small"
                                        className="textfield"
                                        required
                                    />
                                    <TextField
                                        type="password"
                                        id="confirm-password"
                                        placeholder="Confirm Password"
                                        size="small"
                                        className="textfield"
                                        required
                                    />
                                </Stack>
                            </form>
                            <Button className="manager-button-submit"
                                type="submit"
                                variant="contained"
                                size="small"
                                alignment = "center"
                            >
                                Submit
                            </Button>
                        </div>
                    </Grid>
            </Box>
        </div>

    );
}
export default Managerpwdreset;