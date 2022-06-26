import React from 'react'
import styles from './styles.module.scss'
import Card from './Card'
import Chart from './Chart'
import Graph from './Graph'
import Tabel from './Tabel'
interface indexProps {
    
}

const index: React.FC<indexProps> = ({}) => {
    return (
        <div className={styles.bg}>
            <div className={styles.bg_container}>
                <Card value={55}>
                    <div>
                        Paid tickets
                        <div>
                            <div className={styles.dashboard_Statics_item_paid}>
                                <div className={styles.dashboard_Statics_item_name}>Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 13</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_nonpaid}>
                                <div className={styles.dashboard_Statics_item_name}>Non-Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 12</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_total}>
                                <div className={styles.dashboard_Statics_item_name}>Total</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 42</div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card value={70}>
                    <div>
                        Paid tickets
                        <div>
                            <div className={styles.dashboard_Statics_item_paid}>
                                <div className={styles.dashboard_Statics_item_name}>Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 13</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_nonpaid}>
                                <div className={styles.dashboard_Statics_item_name}>Non-Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 12</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_total}>
                                <div className={styles.dashboard_Statics_item_name}>Total</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 42</div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card value={35}>
                    <div>
                        Paid tickets
                        <div>
                            <div className={styles.dashboard_Statics_item_paid}>
                                <div className={styles.dashboard_Statics_item_name}>Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 13</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_nonpaid}>
                                <div className={styles.dashboard_Statics_item_name}>Non-Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 12</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_total}>
                                <div className={styles.dashboard_Statics_item_name}>Total</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 42</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className={styles.bg_container}>
                <Chart/>
                <Graph/>
            </div>
            <div className={styles.bg_container}>
                <Tabel/>
            </div>
        </div>
    );
}

export default index;