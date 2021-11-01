import React from 'react'

interface CartcardfullProps {

}

const Cartcardfull: React.FC<CartcardfullProps> = ({}) => {
        return (
            <div className='cartitem-card'>
                <div className='cartitem-card-img'></div>
                <div className='cartitem-card-eventname'> <h1>Event Name</h1><div>2021 Nov 24</div></div>
                <div className='cartitem-card-price'> LKR 2600 X 13 Tickets</div>
            </div>
        );
}

export default Cartcardfull;