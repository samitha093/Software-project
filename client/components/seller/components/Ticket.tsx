import React from 'react'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios'
import {gethost} from '../../../session/Session'
import styles from './Styles.module.css'
interface TicketProps {
data:any
array:any
}

const Ticket: React.FC<TicketProps> = ({data,array}) => {
    const [loading, setLoading] = React.useState(false);
    const [activate, setactive] = React.useState(false);

    const [amount, setamount] = React.useState("");
    const [buytickets, setbuytickets] = React.useState("");
    const [bidamount, setbidamount] = React.useState("");
    const [bidtickets, setbidtickets] = React.useState("");

    function handleClick() {
      setLoading(true);
      //get access from gatway for 5min
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            //create a headet pack
            const config = {
            headers: { Authorization: `Bearer ${res.data.accesstoken}` }
            };
            //create a body pack
            const datapack = {
                ticket_level:data.rid,
                buy_quantity:buytickets,
                buy_amount:amount,
                bid_quantity:bidtickets,
                min_bid_amount:bidamount,
            }
            axios.post(gethost()+'s/createaticket/'+ data.eid ,datapack,config)
            .then(async (res)=>{
               // console.log("saved");
            })
            .catch((err)=>{
                console.log(err);
            })
        })
        //end connection
      setactive(true);
      setLoading(false);
    }
    const buyTickets = (e:any,id:any) => {
      setbuytickets(e.target.value);
      array.change(e,"A",id);
    };
    const buyAmount = (e:any,id:any) => {
      setamount(e.target.value);
      array.change(e,"B",id);
    };
    const bidTickets = (e:any,id:any) => {
      setbidtickets(e.target.value);
      array.change(e,"C",id);
    };
    const bidAmounts = (e:any,id:any) => {
      setbidamount(e.target.value);
      array.change(e,"D",id);
    };
  return (
    <div className={styles.ticket_bg}>
        <div className={styles.ticket_container}>
            <div className={styles.ticket_data}>{data.rid}</div>
            <div className={styles.ticket_data}><TextField id="standard-basic" onChange={(e)=>buyTickets(e,data.rid)}  variant="standard" /></div>
            <div className={styles.ticket_data}><TextField id="standard-basic" onChange={(e)=>buyAmount(e,data.rid)} variant="standard" /></div>
            <div className={styles.ticket_data}><TextField id="standard-basic" onChange={(e)=>bidTickets(e,data.rid)} variant="standard" /></div>
            <div className={styles.ticket_data}><TextField id="standard-basic" onChange={(e)=>bidAmounts(e,data.rid)} variant="standard" /></div>
        </div>
    </div>
  )
}

export default Ticket