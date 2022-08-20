import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import Image from 'next/image'
import classnames from 'classnames';
import Swal from 'sweetalert2'
import axios from 'axios';

import {gethost, addcart} from '../../session/Session';

import remove from '../../assets/icons/minus.png'
import add from '../../assets/icons/plus.png'

import style from '../styles.module.scss'
import styles from '../buyer/styles.module.scss'

interface ShopcardProps {
  level : string,
  ticketdata:any
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

const Shopcard: React.FC<ShopcardProps> = ({level,ticketdata}) => {
  const [Ticketcolor, setTicketcolor] =  React.useState("");
  const [Ticketlevel, setTicketlevel] =  React.useState("");
  const [Ticketimg, setTicketimg] =  React.useState("");
  const [openbuy, setOpenbuy] = React.useState(false);
  const [openbid, setOpenbid] = React.useState(false);
  const [ticketpricet, setticketprice] = React.useState(ticketdata.min_bid_amount);
  const [ticketbidpricet, setticketbidprice] = React.useState(ticketpricet);
  const [ticketcount, setticketcount] = React.useState(1);
  useEffect(()=>{
    setTicketcolor("#881700");
    var asd = gethost()+ticketdata.img
    setTicketimg(`url("`+asd+`")`);
    setTicketlevel(level);
    
  },[])
  const handleClickOpen_buy = () => {
    setOpenbuy(true);
  };
  const handleClickOpen_bid = () => {
    setOpenbid(true);
  };
  const handleClickClose_buy = () => {
    setOpenbuy(false);
  };
  const handleClickClose_bid = () => {
    setOpenbid(false);
  };

  const paynow = () => {
    axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
    .then(async (res)=>{
        if(res.data.type == 'MANAGER' ||  res.data.type == 'SELLER'){
          setOpenbuy(false);
          Swal.fire({
            icon: 'error',
            title: 'Insufficient Permissions',
            text: 'You do not have permission to buy Tickets'
            })
        }else{
          addcart(ticketdata.id,ticketcount)
          setOpenbuy(false);
          Swal.fire({
            icon: 'success',
            title: 'successfull',
            text: 'Ticket Added To Your Cart'
            })
        }
    })
    .catch((err)=>{
      addcart(ticketdata.id,ticketcount)
      setOpenbuy(false);
      Swal.fire({
        icon: 'success',
        title: 'successfull',
        text: 'Ticket Added To Your Cart'
        })
    })  

  };

  const handleClickadd = () => {
    var i = ticketcount;
    i += 1;
    setticketcount(i);
  };
  const handleClickremove = () => {
    var i = ticketcount;
    if(i>1){
      i -= 1;
    }
    setticketcount(i);
  };

  return (
    <div>
        <div style={{backgroundColor: Ticketcolor}} className={classnames(styles.buyer_c_ticketunvalid, style.new)}>
            <div style={{backgroundImage: Ticketimg}} className={styles.buyer_c_ticketunvalid_top}>
                <div className={styles.buyer_c_ticketunvalid_top_head}>
                    <div className={styles.buyer_c_ticketunvalid_top_head_left}>
                    </div>
                    <div style={{backgroundColor: '#424242'}} className={styles.buyer_c_ticketunvalid_top_head_right}>
                        <div className={styles.buyer_c_ticketunvalid_top_head_right_1}>
                            Level
                        </div>
                        <div className={styles.buyer_c_ticketunvalid_top_head_right_2} id="ticket-level">
                            {ticketdata.ticket_level}
                        </div>
                    </div>
                </div>
                <div className={styles.buyer_c_ticketunvalid_top_info}>
                    <div className={styles.buyer_c_ticketunvalid_top_info_left}>
                        <div className={styles.buyer_c_ticketunvalid_top_info_left_name}>
                            {ticketdata.event_name}
                        </div>
                        <div className={styles.buyer_c_ticketunvalid_top_info_left_date}>
                            {ticketdata.event_date}
                        </div>
                    </div>
                    <div className={styles.buyer_c_ticketunvalid_top_info_right}>
                        <div className={styles.buyer_c_ticketunvalid_top_info_right_nooftickets}>{ticketdata.total_tickets}</div>
                        <div className={styles.buyer_c_ticketunvalid_top_info_right_tickets}>tickets</div>
                    </div>
                </div>
            </div>
            <div className={style.shop_card_controler}>
                <div className={style.shop_card_controler_left} onClick={handleClickOpen_buy}>
                    <div className={style.icon_card}>
                    <AddShoppingCartOutlinedIcon />
                    </div>
                    <div className={style.text}>
                        Buy
                    </div>
                </div>
                <div className={style.shop_card_controler_right} onClick={handleClickOpen_bid}>
                    <div className={style.icon_card}>
                      <PanToolOutlinedIcon />
                    </div>
                    <div className={style.text}>
                        Bid
                    </div>
                </div>
            </div>
        </div>
        <BootstrapDialog 
        aria-labelledby="customized-dialog-title"
        open={openbuy}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClickClose_buy}>
          Buy Ticket
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className={style.ticketview}>
            <h1>{ticketdata.event_name}</h1>  
          </div>
          <div className={style.ticketview_data}>
            <div>Event Location : {ticketdata.event_venue}</div>
            <div>Event Date : {ticketdata.event_date}</div>
            <div>Event Time :  07 : 00 pm</div>
            <div>Ticket Type :  LEVEL {ticketdata.ticket_level}</div>
            <div>In Stock : {ticketdata.buy_quantity} Tickets</div>
          </div>  
          <div className={style.ticketview_price}>
            LKR {ticketdata.buy_amount}.00
          </div>
          <div className={style.ticketview_count}>
            <div className={style.ticketview_count_text}><div className={style.ticketview_count_text_item}>No. Of Tickets : </div></div>
            <div className={style.ticketview_count_number}>
              <div className={style.ticketview_count_number_a}><Image className={style.button_img} src={remove} width={'20px'} height={'20px'} alt="" onClick={ handleClickremove}/></div> 
              <div className={style.ticketview_count_number_num}> {ticketcount} </div>
              <div className={style.ticketview_count_number_b} ><Image className={style.button_img} src={add} width={'20px'} height={'20px'} alt="" onClick={handleClickadd}/></div>
            </div>
          </div>
          <div className={style.ticketview_price_btn} onClick={paynow}>
            ADD TO CART ( LKR {ticketdata.buy_amount*ticketcount}.00 )
          </div>
        </DialogContent>
      </BootstrapDialog>

      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={openbid}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClickClose_bid}>
          Bid Ticket
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <div className={style.ticketview}>
            <h1>{ticketdata.event_name}</h1>  
          </div>
          <div className={style.ticketview_data}>
            <div>Event Location : {ticketdata.event_venue}</div>
            <div>Event Date : {ticketdata.event_date}</div>
            <div>Event Time :  07 : 00 pm</div>
            <div>Ticket Type :  LEVEL {ticketdata.ticket_level}</div>
            <div>In Stock : {ticketdata.bid_quantity} Tickets</div>
          </div>

          <div className={style.ticketview_price}>
            LKR <input className={style.priceboxforbid} type={'number'} value={ticketbidpricet} onChange={(e)=>setticketbidprice(Number(e.target.value))} min={ticketdata.min_bid_amount}/>
          </div>
          <div className={style.ticketview_count}>
            <div className={style.ticketview_count_text}><div className={style.ticketview_count_text_item}>No. Of Tickets : </div></div>
            <div className={style.ticketview_count_number}>
              <div className={style.ticketview_count_number_a}><Image className={style.button_img} src={remove} width={'20px'} height={'20px'} alt="" onClick={ handleClickremove}/></div> 
              <div className={style.ticketview_count_number_num}> {ticketcount} </div>
              <div className={style.ticketview_count_number_b}><Image className={style.button_img} src={add} width={'20px'} height={'20px'} alt="" onClick={handleClickadd}/></div>
            </div>
          </div>
          <div className={style.ticketview_price_btn}>
            Bid NOW ( LKR {ticketbidpricet*ticketcount}.00 )
          </div>         
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
export default Shopcard;