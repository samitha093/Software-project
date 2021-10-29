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
import { TryRounded } from '@mui/icons-material';

interface ShopcardProps {
  level : string,
 }

const Shopcard: React.FC<ShopcardProps> = ({level}) => {
  const [Ticketcolor, setTicketcolor] =  React.useState("");
  const [Ticketlevel, setTicketlevel] =  React.useState("");
  const [Ticketimg, setTicketimg] =  React.useState("");
  useEffect(()=>{
    setTicketcolor("#881700");
    setTicketimg(`url("https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg")`);
    setTicketlevel(level);
    
  },[])
  const handleClickOpen_buy = () => {
    console.log('buy');
  };
  const handleClickOpen_bid = () => {
    console.log('bid');
  };

  return (
    <div>
        <div style={{backgroundColor: Ticketcolor}} className="buyer-c-ticketunvalid new">
            
                <div style={{backgroundImage: Ticketimg}} className="buyer-c-ticketunvalid-top">
                    <div className="buyer-c-ticketunvalid-top-head">
                        <div className="buyer-c-ticketunvalid-top-head-left">
                        </div>
                        <div style={{backgroundColor: '#424242'}} className="buyer-c-ticketunvalid-top-head-right">
                            <div className="buyer-c-ticketunvalid-top-head-right-1">
                                Level
                            </div>
                            <div className="buyer-c-ticketunvalid-top-head-right-2" id="ticket-level">
                                {Ticketlevel}
                            </div>
                        </div>
                    </div>
                    <div className="buyer-c-ticketunvalid-top-info">
                        <div className="buyer-c-ticketunvalid-top-info-left">
                            <div className="buyer-c-ticketunvalid-top-info-left-name">
                                Event name
                            </div>
                            <div className="buyer-c-ticketunvalid-top-info-left-date">
                                2021-08-23
                            </div>
                        </div>
                        <div className="buyer-c-ticketunvalid-top-info-right">
                            <div className="buyer-c-ticketunvalid-top-info-right-nooftickets">460</div>
                            <div className="buyer-c-ticketunvalid-top-info-right-tickets">tickets</div>
                        </div>
                    </div>
                </div>
                <div className='shop-card-controler'>
                    <div className='shop-card-controler-left' onClick={handleClickOpen_buy}>
                        <div className='icon'>
                        </div>
                        <div className='text'>
                            Buy
                        </div>
                    </div>
                    <div className='shop-card-controler-right' onClick={handleClickOpen_bid}>
                        <div className='icon'>
                        </div>
                        <div className='text'>
                            Bid
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
  );
}
export default Shopcard;