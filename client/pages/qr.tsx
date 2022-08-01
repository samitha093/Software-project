import React, { useState } from 'react'
import { useRouter } from "next/router";
import type { NextPage } from 'next'
import Swal from 'sweetalert2'
import axios from 'axios'
import Button from '@mui/material/Button';
import styles from './styles.module.scss'
import {getfastify, getmyhost, gethost} from '../session/Session';

const qr: NextPage = function ActiveEvents() {
    const { query } = useRouter();
    const [data, setData] = useState([]);

    const [osName, setosName] = React.useState();
    const [osVersion, setosVersion] = React.useState();
    const [clientName, setclientName] = React.useState();
    const [clientType, setclientType] = React.useState();
    const [deviceModel, setdeviceModel] = React.useState();
    const [deviceBrand, setdeviceBrand] = React.useState();
    const [deviceType, setdeviceType] = React.useState();
    const [deviceId, setdeviceId] = React.useState();

    React.useEffect(()=>{
        axios.get(getmyhost() +'fastify').then(async (res)=>{
            setclientName(res.data.ndd.client.name);
            setclientType(res.data.ndd.client.type);
            setosName(res.data.ndd.os.name);
            setosVersion(res.data.ndd.os.version);
            setdeviceModel(res.data.ndd.device.model);
            setdeviceBrand(res.data.ndd.device.brand);
            setdeviceType(res.data.ndd.device.type);
            setdeviceId(res.data.ndd.device.id);

        }).catch(()=>{
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Database connection error!'
            })
        }) 

    },[])

    const updatedevice = ()=>{
        const datapack = {
            osName:osName,
            osVersion:osVersion,
            clientName:clientName,
            clientType:clientType,
            deviceModel:deviceModel,
            deviceBrand:deviceBrand,
            deviceType:deviceType,
            deviceId:deviceId,
        }
        axios.put(gethost()+'d/update/'+query.id,datapack)
        .then(async (res)=>{
            Toast.fire({
                icon: 'success',
                title: 'Device conected successfully'
              })
        })
        .catch((err)=>{
            Swal.fire({
            icon: 'error',
            title: 'Connetion Failed',
            text: err.response.data,
            showConfirmButton: false,
            timer: 2500
            })
        })
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    return (
        <div className={styles.bg}>
            {query.id == null?
                null
            :
                <Button variant="contained" onClick={updatedevice}>Connect With : {query.id}</Button>
            }
      <p>{data}</p>
        </div>
    );
}

export default qr;