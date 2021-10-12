import * as React from 'react';
//import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PublishIcon from '@mui/icons-material/Publish';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Pendingeventstable from '../../components/manager/Pendingeventstable'


//Line 80 space for the image box

export default function PendingEvents() {
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
            <div className="manager-c-pendingtickets" onClick={handleClickOpen}>
                <div>
                    <div className="manager-c-pendingtickets-top">



                        <div className="manager-c-pendingtickets-top-info">
                            <div className="manager-c-pendingtickets-top-info-left">
                                <div className="manager-c-pendingtickets-top-info-left-name">
                                    Event name
                                </div>
                                <div className="manager-c-pendingtickets-top-info-left-date">
                                    2021-08-23
                                </div>
                            </div>
                            <div className="manager-c-pendingtickets-top-info-right">
                                <div className="manager-c-pendingtickets-top-info-right-nooftickets">460</div>
                                <div className="manager-c-pendingtickets-top-info-right-tickets">tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className="manager-c-pendingtickets-cardstatus">Info</h5>
                </div>
            </div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" className="manager-c-ticketsinfo-top-head-right">
                    {"More Info"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid sx={{ maxWidth: 480 }}>
                            <Grid>
                            


                            </Grid>

                            <Grid margin-top = "20px">
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography> Event Name </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Organaizer </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Venue </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Date </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Time </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Starting Date </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> Ending Date </Typography>
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
                    <Stack spacing={2} direction="row" className="manager-c-ticketspublishdecline-buttons-stack"  >
                        <Button variant="contained" endIcon={<PublishIcon />}>
                            Publish
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Decline
                        </Button>
                    </Stack>
                </DialogActions>
            </Dialog>
        </div>
    );
}