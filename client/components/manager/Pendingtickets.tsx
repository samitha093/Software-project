import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import DeleteIcon from '@mui/icons-material/Delete';
//import PublishIcon from '@mui/icons-material/Publish';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Pendingeventstable from '../../components/manager/Pendingeventstable'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Fab from '@mui/material/Fab';
import TextareaAutosize from '@mui/material/TextareaAutosize';


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
            <div className="manager-c-tickets" onClick={handleClickOpen}>
                <div>
                    <div className="manager-c-tickets-top">



                        <div className="manager-c-tickets-top-info">
                            <div className="manager-c-tickets-top-info-left">
                                <div className="manager-c-tickets-top-info-left-name">
                                    Event name
                                </div>
                                <div className="manager-c-tickets-top-info-left-date">
                                    2021-08-23
                                </div>
                            </div>
                            <div className="manager-c-tickets-top-info-right">
                                <div className="manager-c-tickets-top-info-right-nooftickets">460</div>
                                <div className="manager-c-tickets-top-info-right-tickets">tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className="manager-c-tickets-cardstatus">Info</h5>
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
                                <div className="manager-eventinfo-image">

                                </div>

                            </Grid>

                            <Grid margin-top="20px">
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2} className="manager-eventinfo-font">
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
                    <Stack spacing={2}>
                        <Stack spacing={2} direction="row" className="manager-c-ticketspublishdecline-buttons-stack"  >
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="approve" control={<Radio />} label="Approve" />
                                <FormControlLabel value="decline" control={<Radio />} label="Decline" />
                            </RadioGroup>
                        </Stack>
                        <Stack spacing={2} direction="row" className="manager-c-ticketspublishdecline-buttons-stack"  >
                            <TextareaAutosize
                                minRows={2}
                                maxRows={3}
                                aria-label="maximum height"
                                placeholder="Reason to decline event and the ticket(if any)"
                                style={{ width: 400 }}
                            />
                            <Fab variant="extended" size="medium" background-color="#8F7F98" aria-label="add">
                                SUBMIT
                            </Fab>
                        </Stack>
                    </Stack>
                </DialogActions>
            </Dialog>
        </div>
    );
}