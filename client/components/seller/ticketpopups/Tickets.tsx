import React from 'react'
import styles from './styles.module.scss'

interface TicketsProps {

}

const Tickets: React.FC<TicketsProps> = ({}) => {
    return (
        <div className={styles.bg}>Tickets</div>
    );
}

export default Tickets;