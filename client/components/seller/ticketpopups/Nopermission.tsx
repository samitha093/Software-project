import React from 'react'
import Image from 'next/image';
import notfoud from '../../../assets/403.png'
import styles from './styles.module.scss'

interface NopermissionProps {

}

const Nopermission: React.FC<NopermissionProps> = ({}) => {
    return (
        <div className={styles.bg}><Image src = {notfoud}
        layout = "responsive"
        m-50="true"
        alt='not found'
        /></div>
    );
}

export default Nopermission;