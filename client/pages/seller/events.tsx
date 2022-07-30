import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Topbar from '../../components/seller/Topbar'
// import Pendingevents from '../../components/seller/Pendingevents'
import Popup from '../../components/seller/ticketpopups/Popup'
import Createevent from '../../components/seller/Createevents'
import axios from 'axios'
import {useRouter} from 'next/router'
import {gethost} from '../../session/Session'
import Styles from './Styles.module.css'
import Swal from 'sweetalert2'

const Pendingevents: NextPage = () => {
    const [open, setopen] = React.useState(false);
    const router = useRouter();
    const [items, setitem] = React.useState([])
    const [itemURL, setitemURL] = React.useState('s/getevent/pending');
    const [itemID, setitemID] = React.useState("1");
    React.useEffect(()=>{
      axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            if(res.data.type == 'BUYER'){
                router.push('/buyer');
            }else if(res.data.type == 'MANAGER'){
                router.push('/manager');
            }else if(res.data.type == 'SELLER'){
                setopen(true);
                await axios.get(gethost() + 'a/refreshtoken',{withCredentials:true}).then(async (res)=>{
                    //create a headet pack
                    const config = {
                      headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                    };
                    axios.get(gethost() + itemURL ,config).then(async (res)=>{
                      await setitem(res.data)
                    }).catch(()=>{
                      Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Database connection error!'
                        })
                    }) 

                  })

            }else{
              router.push('/user');
            }
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: 'Please Login to your account',
            showConfirmButton: false,
            timer: 2500
          })
          router.push('/user');
        })   
    },[])

    const listitem = items.map((item:any)=>(
      <Popup data={item} key={item.id}/>
    ));
    const changeSellerList = async(e:any)=>{
      if(e == 1){
          setitemURL('s/getevent/pending');
          setitemID("1")
      }else if(e == 2){
          setitemURL('s/getevent/active');
          setitemID("2")
      }else if(e == 3){
          setitemURL('s/getevent/end');
          setitemID("3")
      }else if(e == 4){
          setitemURL('s/getevent/declined');
          setitemID("4")
      }
    };
    return (
      <div className={Styles.seller_bg}>
        {open?<div>
        <Navbar/>
        <div className={Styles.seller_index}>
          <Sidebar id="2"/>
          <Topbar id="1" data={{change: changeSellerList}}/>
          <div className={Styles.seller_index_parent_fix}>
          <div className={Styles.seller_index_parent}>
            <h1 className={Styles.seller_index_container_name}>Pending Events</h1>
            <div className={Styles.seller_index_container}>
              {listitem}
            </div>
          </div>
          </div>
        </div>
        <div className={Styles.seller_index_float}>
            <Createevent/>
        </div>
        </div>:null}
      </div>
    );
}

export default Pendingevents;