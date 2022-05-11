import React from 'react'
import Shopcard from './Shopcard';
import style from './styles.module.css'
interface ShopProps {

}

const Shop: React.FC<ShopProps> = ({}) => {
        return (
            <div className={style.buyer_index_container} >
                <Shopcard level='5'/>
                <Shopcard level='2'/>
                <Shopcard level='1'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='5'/>
                <Shopcard level='2'/>
                <Shopcard level='1'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='5'/>
                <Shopcard level='2'/>
                <Shopcard level='1'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='5'/>
                <Shopcard level='2'/>
                <Shopcard level='1'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
                <Shopcard level='3'/>
            </div>
        );
}

export default Shop;