import React from 'react'
import type { NextPage } from 'next'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import Navbar from '../../components/Navbar'
import Cartcardfull from '../../components/buyer/Cartcardfull'
import Cartcard from '../../components/buyer/Cartcard'

const cart: NextPage = () => {
        return (
            <div className="buyer-bg cart">
                <Navbar/>
                <div className='cart-container'>
                    <div className='cart-container-left'><div className='cart-container-left-drower'>
                    <Cartcardfull/>
                    <Cartcardfull/>
                    <Cartcardfull/>
                    </div></div>
                    <div className='cart-container-right'><div className='cart-container-right-drower'>
                        <div className='cart-container-right-drower-1'>
                        <Cartcard/>
                        <Cartcard/>
                        <Cartcard/>
                        <Cartcard/>
                        <Cartcard/>
                        <Cartcard/>
                        </div><hr />
                        <div className='cart-container-right-drower-2'>
                            <div className='cart-container-right-drower-2-price'>
                                <div className='cart-container-right-drower-2-price-left'><h1>Total</h1></div>
                                <div className='cart-container-right-drower-2-price-right'><h3>LKR 467323</h3></div>
                            </div>
                            <div className='modern-paybutton'><div className='modern-paybutton-t'><CreditCardOutlinedIcon/> Pay Now</div></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default cart;