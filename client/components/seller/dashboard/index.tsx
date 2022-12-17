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
                    Yesterday Revanue
                        <div>
                            <div className={styles.dashboard_Statics_item_paid}>
                                <div className={styles.dashboard_Statics_item_name}>Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>42,000 LKR</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_nonpaid}>
                                <div className={styles.dashboard_Statics_item_name}>Non-Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>13,670 LKR</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_total}>
                                <div className={styles.dashboard_Statics_item_name}>Total</div>
                                <div className={styles.dashboard_Statics_item_amount}>44,000 LKR</div>
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
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 13</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_nonpaid}>
                                <div className={styles.dashboard_Statics_item_name}>Paid Amount (Buy)</div>
                                <div className={styles.dashboard_Statics_item_amount}>24,800 LKR</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_total}>
                                <div className={styles.dashboard_Statics_item_name}>Paid amount (Bid)</div>
                                <div className={styles.dashboard_Statics_item_amount}>12,900 LKR</div>
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
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 13</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_nonpaid}>
                                <div className={styles.dashboard_Statics_item_name}>Paid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 12</div>
                            </div>
                            <div className={styles.dashboard_Statics_item_total}>
                                <div className={styles.dashboard_Statics_item_name}>Unpaid</div>
                                <div className={styles.dashboard_Statics_item_amount}>Tickets : 8</div>
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