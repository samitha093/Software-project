import React, { useState } from 'react'
import type { NextPage } from 'next'
import Swal from 'sweetalert2'
import axios from 'axios'
import styles from './styles.module.scss'

const qr: NextPage = function ActiveEvents() {
    const [data, setData] = useState('No result');
    React.useEffect(()=>{
            axios.get('http://localhost/fastify').then(async (res)=>{
              console.log(res)
            }).catch(()=>{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Database connection error!'
                })
            }) 
    },[])



    return (
        <div className={styles.bg}>
          
      <p>{data}</p>
        </div>
    );
}

export default qr;