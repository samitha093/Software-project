import React from 'react'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios'
import {gethost} from '../../../session/Session'
import styles from './Styles.module.css'

function Ticket({data}:any) {
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
  return (
    <div className={styles.ticket_bg}>
        <div className={styles.ticket_container}>
            <div className={styles.ticket_data}>{data.rid}</div>
            <div className={styles.ticket_data}><TextField id="standard-basic" onChange={(e)=>setbuytickets(e.target.value)}  variant="standard" /></div>
            <div className={styles.ticket_data}><TextField id="standard-basic" onChange={(e)=>setamount(e.target.value)} variant="standard" /></div>
            <div className={styles.ticket_data}><TextField id="standard-basic" onChange={(e)=>setbidtickets(e.target.value)} variant="standard" /></div>
            <div className={styles.ticket_data}><TextField id="standard-basic" onChange={(e)=>setbidamount(e.target.value)} variant="standard" /></div>
            <div className={styles.ticket_data}>
                <LoadingButton
                    size="small"
                    color="secondary"
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    disabled={activate}
                    >
                    Save
                </LoadingButton>
            </div>
        </div>
    </div>
  )
}

export default Ticket