import React, { useState } from 'react'
import type { NextPage } from 'next'
import styles from './styles.module.scss'

const qr: NextPage = function ActiveEvents() {
    const [data, setData] = useState('No result');
    React.useEffect(()=>{
      
    },[])



    return (
        <div className={styles.bg}>
          
      <p>{data}</p>
        </div>
    );
}

export default qr;