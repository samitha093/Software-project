import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface CreateeventProps {

}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }

  const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked);
  };
  

  return (
    <React.Fragment >
      <div className="btn-class">
                                    <Button 
                                    className= "btn-create" 
                                    variant="contained" 
                                    startIcon = {<CreateIcon/>}
                                    onClick={handleClickOpen}
                                    >Publish an Event</Button>
                                    </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Pending Event
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="ticketview">
            <h1>Evante Name - Evante Name Name</h1>  
          </div>  
          <Grid sx={{ maxWidth: 480 }}>
            <Grid margin-top="20px">
              <Box sx={{ flexGrow: 1 }}>
                <Grid  className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Event Venue: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                     <Typography> Event Date: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Event Time: </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Ticket Type : Level 1 </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={0} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Fix price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Bid Price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Ticket Type : Level 2 </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={0} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Fix price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Bid Price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Ticket Type : Level 3 </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={0} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Fix price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Bid Price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Ticket Type : Level 4 </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={0} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Fix price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Bid Price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Ticket Type : Level 5 </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={0} className="manager-eventinfo-font">
                  <Grid item xs={6}>
                    <Typography> Fix price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Bid Price: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Number of Tickets: </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <div className='ticketview-price-btn'>
            Delete Event
          </div>
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
                <MenuItem value="lg"></MenuItem>
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
      </Dialog>
    </React.Fragment>
  );
}