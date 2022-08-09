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
                buy_quantity:3,
                buy_amount:4,
                bid_quantity:5,
                min_bid_amount:6,
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
            <div className={styles.ticket_data}><TextField id="standard-basic"  variant="standard" /></div>
            <div className={styles.ticket_data}><TextField id="standard-basic"  variant="standard" /></div>
            <div className={styles.ticket_data}><TextField id="standard-basic"  variant="standard" /></div>
            <div className={styles.ticket_data}><TextField id="standard-basic"  variant="standard" /></div>
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