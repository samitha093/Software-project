import React from 'react'
import styles from './styles.module.scss'
import QRCode from 'qrcode'
import Swal from 'sweetalert2'
import axios from 'axios'
import {getfastify, getmyhost, gethost} from '../../session/Session';

interface QrcardProps {
 data:any
 tigger:any
}

const Qrcard: React.FC<QrcardProps> = ({data,tigger}) => {
    const [imag, setimg] = React.useState('');

    function close(){
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you need delete this device!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          request();
          Swal.fire(
            'Deleted!',
            'Device Connections updated!',
            'success'
          )
        }
      })
    }

    function request(){
      axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
      .then(async (res)=>{
        const config = {
          headers: { Authorization: `Bearer ${res.data.accesstoken}` }
        };
        axios.delete(gethost() + 'd/deletelink/'+data.id,config).then(async (res)=>{
          console.log(res);
          tigger.change();
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

    React.useEffect(()=>{
      QRCode.toDataURL(getmyhost()+"qr?id="+data.id,(error, url)=>{
        setimg(url);
      });
      },[])

    return (
        <div className={styles.bg}>
        <div className={styles.device_card} >
          <div className={styles.device_card_qr}>
            <img src={imag}/>
          </div>
          <div className={styles.device_card_data}>
            {data.deviceModel}{data.deviceModel?<br/>:null}
            {data.deviceType}{data.deviceModel?<br/>:null}
            {data.osName}{data.deviceModel?<br/>:null}
            {data.clientName}{data.deviceModel?<br/>:null}
            {data.clientType}{data.deviceModel?<br/>:null}
            {data.deviceStatus}{data.deviceModel?<br/>:null}
          </div>
          <div className={styles.device_card_close} onClick={close}>X</div>
        </div>
        </div>
    );
}

export default Qrcard;