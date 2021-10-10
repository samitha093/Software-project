import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Ticket from '../../components/buyer/Ticket'

interface TicketvalidProps {
  level : string,
  type : string
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
const Ticketvalid: React.FC<TicketvalidProps> = ({level , type}) => {
  const [open, setOpen] = React.useState(false);
  const [pay, setpay] = React.useState(false);
  const [Ticketcolor, setTicketcolor] =  React.useState("");
  const [Ticketlevel, setTicketlevel] =  React.useState("");
  const [Ticketlevelcolor, setTicketlevelcolor] =  React.useState("");
  const [Ticketimg, setTicketimg] =  React.useState("");
  useEffect(()=>{
    if( type == "1"){
      setTicketcolor("#57B473");
    }else if(type == "2"){
      setTicketcolor("#5776B4");
      setpay(true);
    }else if(type == "3"){
      setTicketcolor("#752E9E");
    }else{
      setTicketcolor("#AE6300");
    }
    setTicketimg(`url("https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg")`);
    setTicketlevel(level);
    if( level == "1"){
      setTicketlevelcolor("#57B473");
    }else if(level == "2"){
      setTicketlevelcolor("#752E9E");
    }else if(level == "3"){
      setTicketlevelcolor("#5776B4");
    }else if(level == "4"){
      setTicketlevelcolor("#AE006E");
    }else{
      setTicketlevelcolor("#AE6300");
    }
    
  },[])
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
        <div style={{backgroundColor: Ticketcolor}}  className="buyer-c-ticketvalid"  onClick={handleClickOpen}>
            <div>
                <div  style={{backgroundImage: Ticketimg}} className="buyer-c-ticketvalid-top">
                    <div className="buyer-c-ticketvalid-top-head">
                        <div className="buyer-c-ticketvalid-top-head-left">
                            13:30:00
                        </div>
                        <div style={{backgroundColor: Ticketlevelcolor}} className="buyer-c-ticketvalid-top-head-right" id="ticket-level" >
                            <div className="buyer-c-ticketvalid-top-head-right-1">
                                Level
                            </div>
                            <div className="buyer-c-ticketvalid-top-head-right-2" >
                                {Ticketlevel}
                            </div>
                        </div>
                    </div>
                    <div className="buyer-c-ticketvalid-top-info">
                        <div className="buyer-c-ticketvalid-top-info-left">
                            <div className="buyer-c-ticketvalid-top-info-left-name">
                                Event name
                            </div>
                            <div className="buyer-c-ticketvalid-top-info-left-date">
                                2021-08-23
                            </div>
                        </div>
                        <div className="buyer-c-ticketvalid-top-info-right">
                            <div className="buyer-c-ticketvalid-top-info-right-nooftickets">460</div>
                            <div className="buyer-c-ticketvalid-top-info-right-tickets">tickets</div>
                        </div>
                    </div>
                </div>
                <h5 className="buyer-c-ticketvalid-cardstatus">card status</h5>
            </div>
        </div>


      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Event name
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Ticket id="123456 654321 345678 34567 987678"/>
          <Ticket id="766756 343545 766688 67678 876668"/>
          <Ticket id="464666 776766 765757 86868 787686"/>
          {pay?
              <div className='paynow'><Button fullWidth style={{backgroundColor: '#752E9E', borderRadius:'20px'}} variant="contained" size="medium">Pay Now (LKR 14 600)</Button></div>
          :null}  
          
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default Ticketvalid;
