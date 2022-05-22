import React from 'react'
import Shopcard from './Shopcard';
import style from './styles.module.css'
import {gethost } from '../session/Session';
import axios from 'axios';
import Swal from 'sweetalert2'
interface ShopProps {

}

const Shop: React.FC<ShopProps> = ({}) => {
    const [items, setitems] = React.useState<any[]>([])
    React.useEffect(()=>{
        //get data
        axios.get(gethost() + 'g/tickets')
        .then(async (res)=>{
          await setitems(res.data);
        })
        .catch(()=>{
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'server is not Responding, please try again later!'
            })
            return;
        }) 
        .finally(()=>{
            console.log(items);
        })
        
      },[])

        return (
            <div className={style.buyer_index_container} >
                {items.map((itemdata)=>{
                   return(<div key={itemdata.id}><Shopcard level='5'/></div>)
                })}
            </div>
        );
}

export default Shop;