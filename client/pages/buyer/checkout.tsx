import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Checkoutcard from '../../components/buyer/Checkoutcard'
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {gethost, getcart} from '../../session/Session';
import axios from 'axios';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDinersClub, faCcDiscover, faCcJcb} from "@fortawesome/free-brands-svg-icons";

import styles from './styles.module.scss'
import classnames from 'classnames';

const checkout: NextPage = () => {
    const [Amount,setAmount] = React.useState([]);

    const checkoutcart = async() =>{
        await axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            //create a headet pack
            const config = {
              headers: { Authorization: `Bearer ${res.data.accesstoken}` }
            };
            const  cartpack = {
                cart:getcart()
            }
            axios.post(gethost() + 'b/order',cartpack,config)
            .then(async (res)=>{
                console.log(res)
            })
            .catch((err)=>{
            Swal.fire({
                icon: 'error',
                title: 'Payment Failed',
                text: 'Please try again',
                showConfirmButton: false,
                timer: 2500
            })
            }) 
        })
        .catch((err)=>{
            Swal.fire({
                icon: 'error',
                title: 'Server Error',
                text: 'Please try again',
                showConfirmButton: false,
                timer: 2500
            })
        }) 
    };

    React.useEffect(() => {
        const  cartpack = {
            cart:getcart()
        }
        axios.post(gethost() + 'g/cartamount/',cartpack)
        .then((res)=>{
            setAmount(res.data);
        })
    },[]);

        return (
            <div className={styles.checkout_bg}>
                <Navbar/>
                <div className={styles.checkout_container}>
                   <div className={styles.checkout_container_left}>
                        <div className={styles.checkout_container_left_drower}>
                            <Checkoutcard/>
                            <Checkoutcard/>
                            <Checkoutcard/>
                            <Checkoutcard/>
                            <Checkoutcard/>
                            <Checkoutcard/>
                        </div>
                   </div>
                   <div className={styles.checkout_container_right}>
                       <div className={styles.checkout_container_right_card}>
                            <div className={styles.checkout_container_right_card_h2}>Card Details</div>
                            <div>
                                
                                <div className={styles.font_icon_bar}>
                                    <FontAwesomeIcon style={{fontSize: '40px', padding: '2px'}} icon={faCcVisa} className='font-icon'/>
                                    <FontAwesomeIcon style={{fontSize: '40px', padding: '2px'}} icon={faCcMastercard} className='font-icon'/>
                                    <FontAwesomeIcon style={{fontSize: '40px', padding: '2px'}} icon={faCcAmex} className='font-icon'/>
                                    <FontAwesomeIcon style={{fontSize: '40px', padding: '2px'}} icon={faCcDinersClub} className='font-icon'/>
                                    <FontAwesomeIcon style={{fontSize: '40px', padding: '2px'}} icon={faCcDiscover} className='font-icon'/>
                                    <FontAwesomeIcon style={{fontSize: '40px', padding: '2px'}} icon={faCcJcb} className='font-icon'/>
                                </div>
                            </div>
                            <div className={styles.creit_card_b}>
                            <input type="input" className={styles.form__field} placeholder="Credit Card Number" id='form__field' required />
                            </div>
                            <div style={{display:'flex'}}>
                            <input type="input" className={styles.form__field_2} placeholder="MM/YY" id='form__field' required />
                            <input type="input" className={styles.form__field_2} placeholder="CVV" id='form__field' required />
                            </div>
                       </div>
                        <div className={styles.Pay_Now_btn} onClick={checkoutcart}>
                            PAY {Amount}.00LKR
                        </div>
                   </div>
                </div>
            </div>
        );
}

export default checkout;