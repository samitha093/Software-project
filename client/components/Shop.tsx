import React from 'react'
import Shopcard from './Shopcard';
import style from './styles.module.css'
import {gethost } from '../session/Session';
import axios from 'axios';
import Swal from 'sweetalert2'
interface ShopProps {
 tickets:any
}

const Shop: React.FC<ShopProps> = ({tickets}) => {
    const [items, setitems] = React.useState<any[]>([])
    React.useEffect(()=>{

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
        
      },[])
      React.useEffect(()=>{
        setitems(tickets)
        console.log(tickets)
      },[tickets])

        return (
            <div className={style.buyer_index_container} >
                {items.map((itemdata)=>{
                   return(<div key={itemdata.id}><Shopcard ticketid={itemdata.id} level='5'/></div>)
                })}
            </div>
        );
}

export default Shop;