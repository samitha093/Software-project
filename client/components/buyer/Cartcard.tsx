import React from 'react'

interface CartcardProps {

}

const Cartcard: React.FC<CartcardProps> = ({}) => {
        return (
            <div className='cartprice-card'>
                <div className='cartprice-card-left'>Event Name</div>
                <div className='cartprice-card-right'>LKR 123456</div>
            </div>
        );
}

export default Cartcard;