import React from 'react'
import styles from './styles.module.scss'

interface NopermissionProps {

}

const Nopermission: React.FC<NopermissionProps> = ({}) => {
    return (
        <div className={styles.bg}>Nopermission</div>
    );
}

export default Nopermission;