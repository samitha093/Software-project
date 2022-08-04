import React from 'react'
import styles from './styles.module.scss'
import QRCode from 'qrcode'
import {getfastify, getmyhost, gethost} from '../../session/Session';

interface QrcardProps {
 data:any
}

const Qrcard: React.FC<QrcardProps> = ({data}) => {
    const [imag, setimg] = React.useState('');

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
        </div>
        </div>
    );
}

export default Qrcard;