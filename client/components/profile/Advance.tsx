import React from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import styles from './Styles.module.scss'
import QRCode from 'qrcode'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {getfastify, getmyhost, gethost} from '../../session/Session';
import Qrcard from './qrcard';

interface AdvanceProps {

}

const Advance: React.FC<AdvanceProps> = ({}) => {
  const [data, setData] = React.useState([]);
  const [rtn, setrtn] = React.useState();
  
    React.useEffect(()=>{
      axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
      .then(async (res)=>{
        const config = {
          headers: { Authorization: `Bearer ${res.data.accesstoken}` }
        };
        axios.get(gethost() + 'd/links',config).then(async (res)=>{
          setData(res.data);
        }).catch(()=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'API connection error!'
            })
        })       
      })
      .catch((err)=>{
        Swal.fire({
          icon: 'error',
          title: 'Authentication Failed',
          text: err,
          showConfirmButton: false,
          timer: 2500
        })
      })
    },[rtn])

    const newDevice = async()=>{
      axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
          const config = {
            headers: { Authorization: `Bearer ${res.data.accesstoken}` }
          };
          const datapack = {}
          axios.post(gethost() + 'd/create',datapack,config).then(async (res)=>{
            setrtn(res.data)
          }).catch(()=>{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'API connection error!'
              })
          })       
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: err,
            showConfirmButton: false,
            timer: 2500
          })
        })
      
    }

    const listitem = data.map((item:any)=>(
      <div className={styles.device_card} key={item.id}>
        <Qrcard data={item}/>
      </div>
    ));

  return (
    <div className={styles.bg}>
      <h3>Linked Devices</h3>
      <div className={styles.device_list}>
        {listitem}
      </div>
      <div className={styles.addMoreEndDevices}>
        <Fab size="small" color="secondary" aria-label="add" onClick={newDevice}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Advance;