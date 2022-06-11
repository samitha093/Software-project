import React from 'react'
import styles from './styles.module.scss'

interface CartcardProps {

}

const Cartcard: React.FC<CartcardProps> = ({}) => {
        return (
            <div className={styles.cartprice_card}>
                <div className={styles.cartprice_card_left}>Event Name</div>
                <div className={styles.cartprice_card_right}>LKR 123456</div>
            </div>
        );
}

export default Cartcard;