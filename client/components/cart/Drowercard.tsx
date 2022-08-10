import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import {gethost, removecart, dropcart} from '../../session/Session';
import styles from './styles.module.scss'

interface DrowercardProps {
 ticketid:string,
 qty:number,
 data:any
}
const removefromcart = (ticketid:string,data:any) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you need to remove this item from cart",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Remove it'
      }).then(async(result) => {
        if (result.isConfirmed) {
           await removecart(ticketid);
            data.change()
          Swal.fire(
            'Removed',
            'Selected item removed from your cart.',
            'success'
          )
        }
      })
  }

const Drowercard: React.FC<DrowercardProps> = ({ticketid,qty,data}) => {
    const [ticket,setticket] = React.useState<any>([]);
    React.useEffect(()=>{
        axios.get(gethost() + 'g/ticketbyid/'+ticketid,{withCredentials:false})
        .then(async (res)=>{
            if(res.data){
              setticket(res.data)
            }
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Something whent to wrong',
            text: 'Please try again later',
            showConfirmButton: false,
            timer: 2500
          })
        })       
    },[])
    return (
        <div className={styles.Drowercardbg}>
            <div style={{backgroundImage: `url("https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg")`}} className={styles.Drowercard_left}>

            </div>
            <div className={styles.Drowercard_right}>
                {ticket.event_name}
                <div className={styles.Drowercard_right_left_container}>
                    <div className={styles.Drowercard_right_left}>
                         QTY: {qty}
                    </div>
                    <div className={styles.Drowercard_right_right}>
                        LKR: {ticket.buy_amount*qty}
                    </div>
                </div>
            </div>
            <div className={styles.Drowercard_exit} onClick={(e)=>removefromcart(ticketid,data)}>X</div>
        </div>
    );
}

export default Drowercard;