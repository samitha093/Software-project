import React from 'react'
import Shopcard from './Shopcard';

interface ShopProps {

}

const Shop: React.FC<ShopProps> = ({}) => {
        return (
            <div className='buyer-index-container' >
                <Shopcard level='5'/>
                <Shopcard level='2'/>
                <Shopcard level='1'/>
                <Shopcard level='3'/>
            </div>
        );
}

export default Shop;