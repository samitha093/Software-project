import React from 'react'
import Avatar from '@mui/material/Avatar';
interface CheckoutcardProps {

}

const Checkoutcard: React.FC<CheckoutcardProps> = ({}) => {
        return (
            <div className='checkout-card'>
                <div className='checkout-card-container'>
                    <div className='checkout-card-container-left'>
                        <div>
                        <Avatar
                            alt="Ticket"
                            src="/Uploads/ev1.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                        </div>
                        <div className='checkout-card-container-left-name'>
                            <div>
                                Night night Card
                            </div>
                            <div>
                                4 Tickets
                            </div>
                        </div>
                        <div className='checkout-card-container-left-price'>
                            4300.00LKR
                        </div>
                    </div>
                    <div className='checkout-card-container-right'>
                        X
                    </div>
                </div>
                
            </div>
        );
}

export default Checkoutcard;