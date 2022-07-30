/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import ReactDOM from "react-dom";
import QrReader from "react-qr-reader";
import type { NextPage } from 'next'
import styles from './styles.module.scss'

import DeviceInfo from 'react-native-device-info';

const qr: NextPage = () => {
    const [data, setData] = useState('No result');
    React.useEffect(()=>{
        let brand = DeviceInfo.getBrand();
        // console.log(brand);
    },[])
    return (
        <div className={styles.bg}>
            {/* <QrReader
                onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
                }

                if (!!error) {
                    console.info(error);
                }
                }}
                style={{ width: '100%' }}
            /> */}
      <p>{data}</p>
        </div>
    );
}

export default qr;