import React, { useState, createContext, useContext, useRef } from 'react'
import { useRouter } from "next/router";
import type { NextPage } from 'next'
import Swal from 'sweetalert2'
import axios from 'axios'
import styles from './styles.module.scss'
import {getfastify, getmyhost, gethost} from '../session/Session';
import Socket from '../websocket/Socket';
import dynamic from "next/dynamic";
import Button from '@mui/material/Button';
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

const qr: NextPage = function ActiveEvents() {
    const router = useRouter()
    const [scanned, setScanned] = React.useState("");
    const [scannedold, setScannedold] = React.useState("");

    const onScan = (result: string | null) => {
        setScanned(result ? result : "");
    };

    const { query } = useRouter();

    const [roomid, setroomid] = React.useState<string>('');
    const [roomstatus, setroomstatus] = React.useState<boolean>(false);

    const name = process.env.HOST_IP;

    const [result, setResult] = useState('No result');

	const handleError = (err:any) => {
		console.log(err)
	}

	const handleScan = (result:any) => {
		if(result){
			setResult(result)
		}
	}

	const previewStyle = {
		height: 240,
		width: 320,
	}

    function logout(){
        axios.get(gethost() +'s/ticketvalidatelogout/'+query.id).then(async (res)=>{
            router.push('/');
        }).catch((err)=>{
            Toast.fire({
                icon: 'error',
                title: err
            })
        })
    }

    React.useEffect(()=>{
        if(query.id){
            axios.get(getmyhost() +'fastify').then(async (res)=>{
                const datapack = {
                    osName:res.data.ndd.os.name,
                    osVersion:res.data.ndd.os.version,
                    clientName:res.data.ndd.client.name,
                    clientType:res.data.ndd.client.type,
                    deviceModel:res.data.ndd.device.model,
                    deviceBrand:res.data.ndd.device.brand,
                    deviceType:res.data.ndd.device.type,
                    deviceId:res.data.ndd.device.id,
                }
                axios.put(gethost()+'d/update/'+query.id,datapack)
                .then(async (res)=>{
                    await setroomid(res.data)
                    Toast.fire({
                        icon: 'success',
                        title: 'Device conected successfully'
                    })
                    await setroomstatus(true);
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
            }).catch(()=>{
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Database connection error!'
                })
            })
        }
    },[query.id])

    React.useEffect(()=>{
        if(scanned != scannedold){
            if(scanned){
                setScannedold(scanned)
                const datapack = {
                    device:query.id,
                    scan:scanned,
                }
                axios.post(gethost()+'s/ticketvalidate',datapack).then(async (res)=>{
                    Swal.fire(
                        'Success',
                        'Ticket was validated',
                        'success'
                      )
                }).catch((err)=>{
                    Swal.fire(
                        'Opps!',
                        'Unvalid ticket',
                        'error'
                      )
                })
            }
        }
        //
        
    },[scanned])

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

            {roomstatus?<div style={{width:"600px"}}>
                <Socket.Input data={roomid}/>
                <QrReader
                delay={100}
                onError={() => {}}
                onScan={onScan}
                className={styles.scanner}
                facingMode="environment"
            />
            <div id="reader" style={{width:"400px"}}></div>
            <div className={styles.bg}>
                <Button variant="outlined" color="error" onClick={logout}>
                        logout
                    </Button>
            </div>
            </div>
            :
            <div>
               403 Error
            </div>
            }
        </div>
    );
}

export default qr;