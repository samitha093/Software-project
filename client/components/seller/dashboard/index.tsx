import React from 'react'
import styles from './styles.module.scss'
import Card from './Card'
import Chart from './Chart'
import Graph from './Graph'
import Tabel from './Tabel'
import axios from 'axios';
import Swal from 'sweetalert2'
import {gethost} from '../../../session/Session';
interface indexProps {

}

const index: React.FC<indexProps> = ({}) => {
    const [card1, setcard1] = React.useState([]);
    const [card2, setcard2] = React.useState([]);
    const [card3, setcard3] = React.useState([]);
    const [card4, setcard4] = React.useState([]);
    const [card5, setcard5] = React.useState([]);
    const [card6, setcard6] = React.useState([]);
    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true}).then(async (res)=>{
          //create a headet pack
          const config = {
            headers: { Authorization: `Bearer ${res.data.accesstoken}` }
          };
          await axios.get(gethost() + 's/getdashboard',config).then(async (res)=>{
            // console.log(res.data.dataset1);
            setcard1(res.data.dataset1);
            setcard2(res.data.dataset2);
            setcard3(res.data.dataset3);
            setcard4(res.data.dataset4);
            setcard5(res.data.dataset5);
            setcard6(res.data.dataset6);
          })
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: err,
            showConfirmButton: false,
            timer: 2500
          })
        })
      },[])

    return (
        <div className={styles.bg}>
            <div className={styles.bg_container}>
                <Card value={55}>
                    <div>
                    Yesterday Revanue
                        <div>
                            <div className={styles.dashboard_Statics_item_paid}>
                                <div className={styles.dashboard_Statics_item_name}>Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>{card1[0]} LKR</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_nonpaid}>
                                <div className={styles.dashboard_Statics_item_name}>Non-Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>{card1[1]} LKR</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_total}>
                                <div className={styles.dashboard_Statics_item_name}>Total</div>
                                <div className={styles.dashboard_Statics_item_amount}>{card1[2]} LKR</div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card value={70}>
                    <div>
                        Yesterday Tickets
                        <div>
                            <div className={styles.dashboard_Statics_item_paid}>
                                <div className={styles.dashboard_Statics_item_name}>Direct Buy</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : {card2[0]}</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_nonpaid}>
                                <div className={styles.dashboard_Statics_item_name}>Paid Amount (Buy)</div>
                                <div className={styles.dashboard_Statics_item_amount}>{card2[1]} LKR</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_total}>
                                <div className={styles.dashboard_Statics_item_name}>Paid amount (Bid)</div>
                                <div className={styles.dashboard_Statics_item_amount}>{card2[2]} LKR</div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card value={35}>
                    <div>
                    Yesterday Bids
                        <div>
                            <div className={styles.dashboard_Statics_item_paid}>
                                <div className={styles.dashboard_Statics_item_name}>Won</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : {card3[0]}</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_nonpaid}>
                                <div className={styles.dashboard_Statics_item_name}>Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : {card3[1]}</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_total}>
                                <div className={styles.dashboard_Statics_item_name}>Unpaid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : {card3[2]}</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className={styles.bg_container}>
                <Chart data={card4}/>
                <Graph data={card5}/>
            </div>
            <div className={styles.bg_container}>
                <Tabel data={card6}/>
            </div>
        </div>
    );
}

export default index;