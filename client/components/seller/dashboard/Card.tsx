import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import ticket from '../../../assets/1.png'
import event from '../../../assets/2.png'
import bidss from '../../../assets/3.png'
import Analiticbar from '../../analytics/Analiticbar'

interface CardProps {
    value:number;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children, value}) => {
    const [nvalue, setnvalue] = React.useState(20);
    React.useEffect(()=>{
        setnvalue(value)
        console.log(value)
    },[value])
    return (
        <div className={styles.bg_card}>
            <div className={styles.dashboard_Statics_item_left}>
                {children}
            </div>
            <div className={styles.dashboard_Statics_item_right}>
                {/* <Analiticbar data={{progress : nvalue}}/> */}
                {value==1?
                <Image  src = {ticket} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
                :null}
                {value==2?
                <Image  src = {event} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
                :null}
                {value==3?
                <Image  src = {bidss} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
                :null}
            </div>
        </div>
    );
}

export default Card;