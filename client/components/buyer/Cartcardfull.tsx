import React from 'react'
import styles from './styles.module.scss'

interface CartcardfullProps {

}

const Cartcardfull: React.FC<CartcardfullProps> = ({}) => {
        return (
            <div className={styles.cartitem_card}>
                <div className={styles.cartitem_card_img}></div>
                <div className={styles.cartitem_card_eventname}> <h1>Event Name</h1><div>2021 Nov 24</div></div>
                <div className={styles.cartitem_card_price}> LKR 2600 X 13 Tickets</div>
            </div>
        );
}

export default Cartcardfull;