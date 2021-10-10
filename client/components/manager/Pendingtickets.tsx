import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Pendingeventinfo from '../../components/manager/Pendingeventinfo'

export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
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
            </div>

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Optional sizes</DialogTitle>
                <DialogContent>
                    <DialogContent dividers>
                        <Pendingeventinfo/>
                    </DialogContent>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <FormControl sx={{ mt: 2, minWidth: 120 }}>
                            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                            <Select
                                autoFocus
                                value={maxWidth}
                                onChange={handleMaxWidthChange}
                                label="maxWidth"
                                inputProps={{
                                    name: 'max-width',
                                    id: 'max-width',
                                }}
                            >
                                <MenuItem value={false}>false</MenuItem>
                                <MenuItem value="xs">xs</MenuItem>
                                <MenuItem value="sm">sm</MenuItem>
                                <MenuItem value="md">md</MenuItem>
                                <MenuItem value="lg">lg</MenuItem>
                                <MenuItem value="xl">xl</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            sx={{ mt: 1 }}
                            control={
                                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
                            }
                            label="Full width"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}