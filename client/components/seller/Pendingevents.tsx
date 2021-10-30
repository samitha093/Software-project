import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import PendingEvents from '../manager/Pendingtickets';
import { dividerClasses } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DialogContentText from '@mui/material/DialogContentText';
import Image from 'next/image'
import remove from '../assets/icons/minus.png'
import add from '../assets/icons/plus.png'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
interface PendingeventProps {

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

const Pendingevents: React.FC<PendingeventProps> = ({}) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
        console.log('asd');
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div  className="seller-c-pendingevents" onClick={handleClickOpen}>
                <div>
                    <div  className="seller-c-pendingevents-top">
                        <div className="seller-c-pendingevents-top-info">
                            <div className="seller-c-pendingevents-top-info-left">
                                <div className="seller-c-pendingevents-top-info-left-name">
                                    Event name
                                </div>
                                <div className="seller-c-pendingevents-top-info-left-date">
                                    2021-08-23
                                </div>
                            </div>
                            <div className="seller-c-pendingevents-top-info-right">
                                <div className="seller-c-pendingevents-top-info-right-nooftickets">460</div>
                                <div className="seller-c-pendingevents-top-info-right-tickets">tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className="seller-c-pendingevents-cardstatus">Info</h5 >
                </div>
            </div>
            <BootstrapDialog 
        aria-labelledby="customized-dialog-title"
        open={open}
      >
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
      </BootstrapDialog>       
    </div>
  );
}

export default Pendingevents;