import React from 'react'
import styles from './styles.module.scss'
import Analiticbar from '../../analytics/Analiticbar'

interface CardProps {
    value:number;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children, value}) => {
    return (
        <div className={styles.bg_card}>
            <div className={styles.dashboard_Statics_item_left}>
                {children}
            </div>
            <div className={styles.dashboard_Statics_item_right}>
                <Analiticbar data={{progress : value}}/>
            </div>
        </div>
    );
}

export default Card;