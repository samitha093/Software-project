import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Topbar from '../../components/seller/Topbar'
import Navbar from '../../components/Navbar'
import Activeevents from '../../components/seller/Activeevents'
import axios from 'axios'
import {gethost} from '../../session/Session'
import Styles from './Styles.module.css'
import Swal from 'sweetalert2'

const index: NextPage = () => {

    const [items, setitem] = React.useState([])
    React.useEffect(()=>{
        axios.get(gethost()+'seller/active/61842a1e0ec95f011fdc3bcf')
        .then(async (res)=>{
          await setitem(res.data)
        })
      .catch(()=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Database connection error!'
          })
        }
      )    
    },[])

    const listitem = items.map((item)=>(
      <Activeevents data={item}/>
    ));

    return (
        <div className={Styles.seller_bg}>
                <Navbar/>
                <div className={Styles.seller_index}>
                    <Sidebar id="2"/>
                    <Topbar id2="2"/>
                    <div className={Styles.seller_index_parent_fix}>
                    <div className={Styles.seller_index_parent}>
                       <h1 className={Styles.seller_index_container_name}>Active Events</h1>
                       <div className={Styles.seller_index_container}>
                          {listitem}
                       </div>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default index;