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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

import axios from 'axios';
import {gethost, addcart} from '../../session/Session';

import styles from './styles.module.scss'

interface TicketunvalidProps {
  level : string,
  type:string,
  data:any,
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
const Ticketunvalid: React.FC<TicketunvalidProps> = ({level , type, data}) => {
  const [open, setOpen] = React.useState(false);
  const [Ticketcolor, setTicketcolor] =  React.useState("");
  const [Ticketlevel, setTicketlevel] =  React.useState("");
  const [Ticketlevelcolor, setTicketlevelcolor] =  React.useState("");
  const [Ticketimg, setTicketimg] =  React.useState("");
  const [TicketData, setTicketData] =  React.useState<any>([]);
  const [TicketbidData, setTicketbidData] =  React.useState<any>([]);
  const [Ticketbidamount, setTicketbidamount] =  React.useState<number>(700);

  useEffect(()=>{
    axios.get(gethost()+'g/ticketbyid/'+data.ticketid).then(async (res)=>{
      setTicketData(res.data);
      var asd = gethost()+res.data.ticket.img
      setTicketimg(`url("`+asd+`")`);
    }).catch((err)=>{})

    axios.get(gethost()+'b/bidbyid/'+data.bidid).then(async (res)=>{
      setTicketbidData(res.data);
      setTicketbidamount(res.data.bid_amount);
    }).catch((err)=>{})

    setTicketcolor("#881700");
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
        <div style={{backgroundColor: Ticketcolor}} className={styles.buyer_c_ticketunvalid} onClick={handleClickOpen}>
            <div>
                <div style={{backgroundImage: Ticketimg}} className={styles.buyer_c_ticketunvalid_top}>
                    <div className={styles.buyer_c_ticketunvalid_top_head}>
                        <div className={styles.buyer_c_ticketunvalid_top_head_left}>
                          {TicketData.event?TicketData.event.event_time:null}
                        </div>
                        <div style={{backgroundColor: Ticketlevelcolor}} className={styles.buyer_c_ticketunvalid_top_head_right}>
                            <div className={styles.buyer_c_ticketunvalid_top_head_right_1}>
                                Level
                            </div>
                            <div className={styles.buyer_c_ticketunvalid_top_head_right_2} id="ticket-level">
                            {TicketData.ticket?TicketData.ticket.ticket_level:null}
                            </div>
                        </div>
                    </div>
                    <div className={styles.buyer_c_ticketunvalid_top_info}>
                        <div className={styles.buyer_c_ticketunvalid_top_info_left}>
                            <div className={styles.buyer_c_ticketunvalid_top_info_left_name}>
                            {TicketData.event?TicketData.event.event_name:null}
                            </div>
                            <div className={styles.buyer_c_ticketunvalid_top_info_left_date}>
                            {TicketData.event?TicketData.event.event_date:null}
                            </div>
                        </div>
                        <div className={styles.buyer_c_ticketunvalid_top_info_right}>
                            <div className={styles.buyer_c_ticketunvalid_top_info_right_nooftickets}>{TicketbidData.ticketcount}</div>
                            <div className={styles.buyer_c_ticketunvalid_top_info_right_tickets}>tickets</div>
                        </div>
                    </div>
                </div>
                <h5 className={styles.buyer_c_ticketunvalid_cardstatus}>{TicketData.event?TicketData.event.event_venue:null}</h5>
            </div>
        </div>


      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount for a Ticket</InputLabel>
            <FilledInput
              value={Ticketbidamount}
              id="filled-adornment-amount"
              startAdornment={<InputAdornment position="start">LKR</InputAdornment>}
            />
          </FormControl>
          <div className='x'><b>X</b></div>
          <div>{TicketbidData.ticketcount} Tickes</div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Submit new bid
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
export default Ticketunvalid;