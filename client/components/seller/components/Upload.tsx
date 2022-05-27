import React from 'react'
import Image from 'next/image';
import axios from 'axios'
import {gethost} from '../../../session/Session'
import ticket from '../../../assets/icons/upload.png'
import styles from './styles.module.css'
const Upload = ({data}:any) => {
    
    const handleFile = async(e:any)=>{
        if(e.target && e.target.files[0]){
        data.change(e.target.files[0])
        }
    };

  return (
    <div className={styles.drop_file_input}>
        <div className={styles.drop_file_input_label}>
            <Image className={styles.drop_file_input_label_image} src = {ticket} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
            <p>Drag & Drop your Cover Image here</p>
        </div>
        <input type="file" name="file" onChange={(e)=>handleFile(e)}/>
    </div>
  )
}


export default Upload