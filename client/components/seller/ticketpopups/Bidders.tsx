import React from 'react'
import styles from './styles.module.scss'

interface BiddersProps {

}

const Bidders: React.FC<BiddersProps> = ({}) => {
    return (
        <div className={styles.bg}>Bidders</div>
    );
}

export default Bidders;