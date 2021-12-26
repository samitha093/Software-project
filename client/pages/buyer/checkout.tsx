import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Checkoutcard from '../../components/buyer/Checkoutcard'
import TextField from '@mui/material/TextField';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard, faCcAmex, faCcDinersClub, faCcDiscover, faCcJcb} from "@fortawesome/free-brands-svg-icons";

const checkout: NextPage = () => {
        return (
            <div className='checkout-bg'>
                <Navbar/>
                <div className='checkout-container'>
                   <div className='checkout-container-left'>
                        <div className='checkout-container-left-drower'>
                            <Checkoutcard/>
                            <Checkoutcard/>
                            <Checkoutcard/>
                            <Checkoutcard/>
                            <Checkoutcard/>
                            <Checkoutcard/>
                        </div>
                   </div>
                   <div className='checkout-container-right'>
                       <div className='checkout-container-right-card'>
                            <div className='checkout-container-right-card-h2'>Card Details</div>
                            <div>
                                Select Card Type
                                <div className='font-icon-bar'>
                                    <FontAwesomeIcon style={{cursor:'pointer'}} icon={faCcVisa} className='font-icon'/>
                                    <FontAwesomeIcon style={{cursor:'pointer'}} icon={faCcMastercard} className='font-icon'/>
                                    <FontAwesomeIcon style={{cursor:'pointer'}} icon={faCcAmex} className='font-icon'/>
                                    <FontAwesomeIcon style={{cursor:'pointer'}} icon={faCcDinersClub} className='font-icon'/>
                                    <FontAwesomeIcon style={{cursor:'pointer'}} icon={faCcDiscover} className='font-icon'/>
                                    <FontAwesomeIcon style={{cursor:'pointer'}} icon={faCcJcb} className='font-icon'/>
                                </div>
                            </div>
                            <div className='creit-card-b'>
                            <input type="input" className='form__field' placeholder="Credit Card Number" id='form__field' required />
                            </div>
                            <div style={{display:'flex'}}>
                            <input type="input" className='form__field-2' placeholder="MM/YY" id='form__field' required />
                            <input type="input" className='form__field-2' placeholder="CVV" id='form__field' required />
                            </div>
                       </div>
                        <div className='Pay-Now-btn'>
                            PAY (3500.00LKR )
                        </div>
                   </div>
                </div>
            </div>
        );
}

export default checkout;