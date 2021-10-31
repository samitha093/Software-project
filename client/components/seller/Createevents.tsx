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
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Createtickets from '../../components/seller/Createtickets'

interface CreateeventProps {

}

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

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
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('lg');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create Event
        </BootstrapDialogTitle>
        <DialogContent>
        <DialogContent dividers>
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ButtonBase sx={{ width: 300, height: 300 }}>
            <Img alt="complex" src="/assets/office-chair.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs className="manager-eventinfo-font" spacing={2}>
              <Typography >
                Event Name : khghjb
              </Typography>
            </Grid>
            <Grid item xs className="manager-eventinfo-font" spacing={2}>
              <Typography >
                Event Venue : dbjhsb
              </Typography>
            </Grid>
            <Grid item xs className="manager-eventinfo-font" spacing={2}>
              <Typography  >
                Event Date : 52154
              </Typography>
            </Grid>
            <Grid item xs className="manager-eventinfo-font" spacing={2}>
              <Typography >
                Ticket Levels : 5
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <div>
    <Createtickets/>
    </div>
        </DialogContent>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}