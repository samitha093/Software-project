import React, { useState } from 'react'
import Shopcard from './Shopcard';
import {gethost } from '../../session/Session';
import axios from 'axios';
import { Button } from '@mui/material'
import Swal from 'sweetalert2'

import style from '../styles.module.scss'

interface ShopProps {
 tickets:any
}

//Load More Button Responsiveness
//Load more

const [visible, setVisible] = useState(18);
const [nextCount, setNextCount] = useState(12);

const showMoreItems = () => {
  setVisible((prevValue) => prevValue + nextCount);
};

function screenSizeDetect() {
  if (window.matchMedia("(max-width : 1775px)").matches) {
      setVisible(15);
      setNextCount(10);
  }
  if (window.matchMedia("(max-width : 1300px)").matches) {
      setVisible(12);
      setNextCount(8);
  }
  if (window.matchMedia("(max-width : 1246px)").matches) {
      setVisible(9);
      setNextCount(6);
  }
  if (window.matchMedia("(max-width : 976px)").matches) {
      setVisible(6);
      setNextCount(6);
  }
  if (window.matchMedia("(max-width : 707px)").matches) {
      setVisible(3);
      setNextCount(3);
  }
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
        screenSizeDetect();
        setitems(tickets)
      },[tickets])

        return (
            <div className={style.buyer_index_container} >
                {items.slice(0, visible).map((itemdata)=>{
                   return(<div key={itemdata.id}><Shopcard ticketdata={itemdata} level='5'/>
                   <div className={style.events_index_loadmore_button}>
                                        {itemdata.length >= visible ? <Button variant="text" onClick={showMoreItems}>..Load More..</Button> : null}
                                    </div>
                                    </div>)
                })}
            </div>
        );
}

export default Shop;