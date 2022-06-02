import React from 'react'
import Image from 'next/image';
import styles from './styles.module.scss'
import welcome from '../../../assets/welcome.png'
import ticket from '../../../assets/1.png'
import event from '../../../assets/2.png'
import Analiticbar from '../../analytics/Analiticbar'
import Daygraph from './Daygraph'
import Salesgraph from './Salesgraph';
import Weekgraph from './Weekgraph'
import Eventlist from './Eventlist'

interface indexProps {

}

const index: React.FC<indexProps> = ({}) => {
    const rows = [    
        { "id" : "14gsd54a3sfdc", "name":"Ram", "email":"ram@gmail.com", "type":"SELLER", "status":"PENDING", "date":"23-04-2022"},    
        {"id" : "14gsd54e3sfdc", "name":"Shyam", "email":"shyam23@gmail.com", "type":"SELLER", "status":"ACTIVE", "date":"23-04-2022"},  
        {"id" : "14gsd54a3shdc", "name":"John", "email":"john@gmail.com", "type":"BUYER", "status":"DEACTIVE", "date":"23-04-2022"},    
        {"id" : "14gsd54a6sfdc","name":"Bob", "email":"bob32@gmail.com", "type":"SELLER", "status":"ACTIVE", "date":"23-04-2022"},
        {"id" : "14gsd54a6sfdc","name":"Bob", "email":"bob32@gmail.com", "type":"SELLER", "status":"PENDING", "date":"23-04-2022"},
        {"id" : "14gsd54a6sfdc","name":"Bob", "email":"bob32@gmail.com", "type":"SELLER", "status":"PENDING", "date":"23-04-2022"}  
    ];
    return (
        <div className={styles.bg}>
            <div className={styles.bg_container}>
                <section className={styles.dashboard_controler}>
                    <div className={styles.dashboard_controler_welcome}>
                    <div className={styles.dashboard_controler_welcome_left}>
                            <h1>Hi Admin!</h1>
                            Welcome TickBid Dashboard.
                            <br></br>thank you for joing with us,
                            <br></br>Have a nice day!

                        </div>
                        <div className={styles.dashboard_controler_welcome_right}>
                            <div className={styles.dashboard_controler_welcome_right_Image}>
                                <Image  src = {welcome} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
                            </div>
                        </div> 
                    </div>
                    <div className={styles.dashboard_controler_date_selector}>
                        <div className={styles.dashboard_controler_date}>
                            2022
                            May
                            <div className={styles.dashboard_controler_date_number}>4</div>
                        </div>
                        <div className={styles.dashboard_controler_date}>
                            2022
                            May
                            <div className={styles.dashboard_controler_date_number}>5</div>
                        </div>
                        <div className={styles.dashboard_controler_date}>
                            2022
                            May
                            <div className={styles.dashboard_controler_date_number}>6</div>
                        </div>
                        <div className={styles.dashboard_controler_date}>
                            2022
                            May
                            <div className={styles.dashboard_controler_date_number}>7</div>
                        </div>
                        <div className={styles.dashboard_controler_date}>
                            2022
                            May
                            <div className={styles.dashboard_controler_date_number}>8</div>
                        </div>
                        <div className={styles.dashboard_controler_date}>
                            2022
                            May
                            <div className={styles.dashboard_controler_date_number}>9</div>
                        </div>
                        <div className={styles.dashboard_controler_date}>
                            2022
                            May
                            <div className={styles.dashboard_controler_date_number}>10</div>
                        </div>
                    </div>
                </section>
                <section className={styles.dashboard_Statics}>
                    <div className={styles.dashboard_Statics_top}>
                        <div className={styles.dashboard_Statics_top_left}>
                            <div className={styles.dashboard_Statics_item_left}>
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
                            <div className={styles.dashboard_Statics_item_right}>
                                <Analiticbar data={{progress : 70}}/>
                            </div>
                        </div>
                        <div className={styles.dashboard_Statics_top_right}>
                            <div className={styles.dashboard_Statics_item_left}>
                               Paid Amounts
                               <div>
                                   <div className={styles.dashboard_Statics_item_paid}>
                                        <div className={styles.dashboard_Statics_item_name}>Paid</div>
                                        <div className={styles.dashboard_Statics_item_amount}>LKR : 1342</div>
                                   </div>
                                   <div className={styles.dashboard_Statics_item_nonpaid}>
                                        <div className={styles.dashboard_Statics_item_name}>Non-Paid</div>
                                        <div className={styles.dashboard_Statics_item_amount}>LKR : 1342</div>
                                   </div>
                                    <div className={styles.dashboard_Statics_item_total}>
                                        <div className={styles.dashboard_Statics_item_name}>Total</div>
                                        <div className={styles.dashboard_Statics_item_amount}>LKR : 1342</div>
                                    </div>
                               </div>
                            </div>
                            <div className={styles.dashboard_Statics_item_right}>
                                <Analiticbar data={{progress : 50}}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashboard_Statics_bottom}>
                        <div className={styles.dashboard_Statics_bottom_left}>
                        <div className={styles.dashboard_Statics_item_left}>
                               Tickets
                               <div>
                               <div className={styles.dashboard_Statics_item_paid}>
                                        <div className={styles.dashboard_Statics_item_name}>Total Pending</div>
                                        <div className={styles.dashboard_Statics_item_amount}>Tickets : 13</div>
                                   </div>
                                   <div className={styles.dashboard_Statics_item_nonpaid}>
                                        <div className={styles.dashboard_Statics_item_name}>Total Unvalid</div>
                                        <div className={styles.dashboard_Statics_item_amount}>Tickets : 12</div>
                                   </div>
                                    <div className={styles.dashboard_Statics_item_total}>
                                        <div className={styles.dashboard_Statics_item_name}>Total Stock</div>
                                        <div className={styles.dashboard_Statics_item_amount}>Tickets : 42</div>
                                    </div>
                               </div>
                            </div>
                            <div className={styles.dashboard_Statics_item_right}>
                                <Image  src = {ticket} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
                            </div>
                        </div>
                        <div className={styles.dashboard_Statics_bottom_right}>
                        <div className={styles.dashboard_Statics_item_left}>
                               Events
                               <div>
                                   <div className={styles.dashboard_Statics_item_paid}>
                                        <div className={styles.dashboard_Statics_item_name}>Total Live</div>
                                        <div className={styles.dashboard_Statics_item_amount}>Tickets : 13</div>
                                   </div>
                                   <div className={styles.dashboard_Statics_item_nonpaid}>
                                        <div className={styles.dashboard_Statics_item_name}>Today Closed</div>
                                        <div className={styles.dashboard_Statics_item_amount}>Tickets : 12</div>
                                   </div>
                                    <div className={styles.dashboard_Statics_item_total}>
                                        <div className={styles.dashboard_Statics_item_name}>Today Published</div>
                                        <div className={styles.dashboard_Statics_item_amount}>Tickets : 42</div>
                                    </div>
                               </div>
                            </div>
                            <div className={styles.dashboard_Statics_item_right}>
                                <Image  src = {event} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.dashboard_graph}>
                <div className={styles.dashboard_graph_left}>
                    <Daygraph/>
                </div>
                <div className={styles.dashboard_graph_right_1}>
                <div className={styles.dashboard_graph_right}>
                    <div className={styles.pichart}>
                        <div className={styles.pichart_title}>Transactions</div>
                        <Salesgraph/>
                    </div>
                </div>
                </div>
                
            </div>
            <div className={styles.dashboard_graph}>
                <div className={styles.dashboard_graph_right_1_new}>
                    <div className={styles.dashboard_graph_right}>
                        <div className={styles.pichart}>
                            <div className={styles.pichart_title}>Transactions By Bid</div>
                            <Weekgraph/>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboard_graph_left_new}>
                <div className={styles.pichart_title}>Transactions By Direct Buy</div>
                    <Weekgraph/>
                </div> 
            </div>
            <div className={styles.dashboard_graph}>
                <div className={styles.dashboard_graph_new}>
                <div className={styles.pichart_title}>Transactions By Direct Buy</div>
                    <Eventlist data={rows}/>
                </div> 
            </div>
        </div>
    );
}

export default index;