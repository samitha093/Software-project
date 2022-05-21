import * as React from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Pendingeventstable from '../../components/manager/Pendingeventstable'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './styles.module.css'
import classnames from 'classnames';
import axios from 'axios'
import { isValid } from 'date-fns';


//Line 80 space for the image box

export default function PendingEvents() {
    const router = useRouter()
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [declinemessage, setdeclinemessage] = React.useState<string>("");
    const [declinemessageError, setdeclinemessageError] = React.useState<boolean>(false);

    const declinemessageChangeHandler = (e: any) => {
        const declinemessage_regex = /^.{1,50}$/;
        const valid = !!e.target.value.match(declinemessage_regex);
        setdeclinemessage(e.target.value);
        setdeclinemessageError(!valid);
    }

    /*
    LOGIC OF RADIO BUTTTONS AND DECLINE MESSAGE
        At the beginning decline message box and SUBMIT button should be in disabled mode
        If Approve radio button clicked
            > Decline message box should remain disabled
            > Submit button should be enabled
        If Decline radio button clicked
            > Decline message box should be enabled
            > Submit button should be remain disabled
            
            If the decline message is in the given criteria (already implemented criteria)
                > Submit button should be enabled
            Else
                > Error message (already implemented) 
    */

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={styles.manager_c_tickets} onClick={handleClickOpen}>
                <div>
                    <div className={styles.manager_c_tickets_top}>



                        <div className={styles.manager_c_tickets_top_info}>
                            <div className={styles.manager_c_tickets_top_info_left}>
                                <div className={styles.manager_c_tickets_top_info_left_name}>
                                    Event name
                                </div>
                                <div className={styles.manager_c_tickets_top_info_left_date}>
                                    2021-08-23
                                </div>
                            </div>
                            <div className={styles.manager_c_tickets_top_info_right}>
                                <div className={styles.manager_c_tickets_top_info_right_nooftickets}>460</div>
                                <div className={styles.manager_c_tickets_top_info_right_tickets}>tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className={styles.manager_c_tickets_cardstatus}>Info</h5>
                </div>
            </div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" className={styles.manager_c_ticketsinfo_top_head_right}>
                    {"More Info"}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 4,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid sx={{ maxWidth: 480 }}>
                            <Grid>
                                <div className={styles.manager_eventinfo_image}>

                                </div>

                            </Grid>

                            <Grid margin-top="20px">
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2} className={styles.manager_eventinfo_font}>
                                        <Grid item xs={12}>
                                            <Typography> Event Name: </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Organaizer: </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Venue: </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Date: </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Time: </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Starting Date: </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Ending Date: </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Pendingeventstable />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Stack spacing={2} direction="row" className={styles.manager_c_ticketspublishdecline_buttons_stack}>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="approve" control={<Radio />} label="Approve" />
                            <FormControlLabel value="decline" control={<Radio />} label="Decline" />
                        </RadioGroup>
                    </Stack>
                    <Stack spacing={2} direction="row" className={styles.manager_c_ticketspublishdecline_buttons_stack}>
                        <TextField
                            id="standard-multiline-static"
                            placeholder="Reason for declining"
                            multiline
                            maxRows="1"
                            variant="standard"
                            fullWidth
                            error
                            onChange={declinemessageChangeHandler}
                        />
                        <Button variant="contained" size="medium" aria-label="add" margin-left="30px">
                            SUBMIT
                        </Button>
                    </Stack>
                </DialogActions>
                <Stack direction="column">
                        {declinemessageError && (<p className={styles.manager_error_message}> * Reason for declining message is required and it can contain maximum 50 characters</p>)}
                    </Stack>
            </Dialog>
        </div>
    );
}