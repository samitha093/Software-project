import React from 'react'
import Image from 'next/image';
import axios from 'axios'
import {gethost} from '../../../session/Session'
import bgupload from '../../../assets/icons/upload.png'
import png from '../../../assets/icons/png.png'
import jpg from '../../../assets/icons/jpg.png'
import other from '../../../assets/icons/undefine.png'
import styles from './styles.module.css'
const Upload = ({data}:any) => {
    const [icon,seticon] = React.useState<boolean>(true);
    const [pngtype,setpngtype] = React.useState<boolean>(false);
    const [jpgtype,setjpgtype] = React.useState<boolean>(false);
    const [othertype,setothertype] = React.useState<boolean>(false);
    const [image,setimage] = React.useState<string>("Drag & Drop your Cover Image here");
    const handleFile = async(e:any)=>{
        if(e.target && e.target.files[0]){
        data.change(e.target.files[0])
        if(e.target.files[0].type === "image/jpeg"){
            seticon(false);
            setjpgtype(true);
            setpngtype(false)
            setothertype(false)
        }else if(e.target.files[0].type === "image/png"){
            seticon(false);
            setjpgtype(false);
            setpngtype(true)
            setothertype(false)
        }else{
            seticon(false);
            setjpgtype(false);
            setpngtype(false)
            setothertype(true)
        }
        setimage(e.target.files[0].name);
        }
    };

  return (
    <div className={styles.drop_file_input}>
        <div className={styles.drop_file_input_label}>
            {icon?
                <Image className={styles.drop_file_input_label_image} src = {bgupload} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
            :null}
            {pngtype?
                <Image className={styles.drop_file_input_label_image} src = {png} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
            :null}
            {jpgtype?
                <Image className={styles.drop_file_input_label_image} src = {jpg} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
            :null}
            {othertype?
                <Image className={styles.drop_file_input_label_image} src = {other} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
            :null}
            <p>{image}</p>
        </div>
        <input type="file" name="file" onChange={(e)=>handleFile(e)}/>
    </div>
  )
}


export default Upload