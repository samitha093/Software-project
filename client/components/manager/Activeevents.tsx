import * as React from 'react';
import Dialog from '@mui/material/Dialog';
//import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import { styled } from '@mui/material/styles';
import Pendingeventstable from '../../components/manager/Pendingeventstable'
//import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import styles from './styles.module.css'
import classnames from 'classnames';


//Line 80 space for the image box

export default function ActiveEvents() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={styles.manager_c_tickets_active} onClick={handleClickOpen}>
                <div>
                    <div className={styles.manager_c_tickets_top}>



                        <div className={styles.manager_c_tickets_top_info}>
                            <div className={styles.manager_c_tickets_top_info_left}>
                                <div className={styles.manager_c_tickets_top_info_left-name}>
                                    Event name
                                </div>
                                <div className={styles.manager_c_tickets_top_info_left_date}>
                                    2021-08-23
                                </div>
                            </div>
                            <div className={styles.manager_c_tickets_top_info_right}>
                                <div className={styles.manager_c_tickets_top_info_right_nooftickets}>460</div>
                                    <div className={styles.manager_c_tickets_top_info_right_tickets}>tickets </div>
                            </div>
                        </div>
                    </div>
                    <h5 className={styles.manager_c_tickets_cardstatus}>Info</h5>
                </div >
            </div >
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
        </Dialog>
        </div >
    );
}