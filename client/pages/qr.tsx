import React from 'react'
import type { NextPage } from 'next'
import styles from './styles.module.scss'
// import QrReader from 'react-qr-reader';
import dynamic from "next/dynamic"
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

const qqrs: NextPage = function ActiveEvents() {
    const [scanned, setScanned] = React.useState("");

    const onScan = (result: string | null) => {
        setScanned(result ? result : "");
    };
    return (
        <div className={styles.bg}>
            <QrReader
                delay={100}
                onError={() => {}}
                onScan={onScan}
                className={styles.scanner}
                facingMode="environment"
            />
            <div className={styles.result}>{scanned}</div>
        </div>
    );
}

export default qqrs;