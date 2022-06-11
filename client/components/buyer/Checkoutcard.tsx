import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from './styles.module.scss'

interface CheckoutcardProps {

}

const Checkoutcard: React.FC<CheckoutcardProps> = ({}) => {
        return (
            <div className={styles.checkout_card}>
                <div className={styles.checkout_card_container}>
                    <div className={styles.checkout_card_container_left}>
                        <div>
                        <Avatar
                            alt="Ticket"
                            src="/Uploads/ev1.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                        </div>
                        <div className={styles.checkout_card_container_left_name}>
                            <div>
                                Night night Card
                            </div>
                            <div>
                                4 Tickets
                            </div>
                        </div>
                        <div className={styles.checkout_card_container_left_price}>
                            4300.00LKR
                        </div>
                    </div>
                    <div className={styles.checkout_card_container_right}>
                        X
                    </div>
                </div>
                
            </div>
        );
}

export default Checkoutcard;