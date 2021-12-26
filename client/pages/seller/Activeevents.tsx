import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Topbar from '../../components/seller/Topbar'
import Navbar from '../../components/Navbar'
import Activeevents from '../../components/seller/Activeevents'
import axios from 'axios'
import {gethost} from '../../session/Session'

const index: NextPage = () => {

    const [items, setitem] = React.useState([])
    React.useEffect(()=>{
      axios.get(gethost()+'seller/active/61842a1e0ec95f011fdc3bcf')
      .then(async (res)=>{
        await setitem(res.data)
      })
        
    },[])

    const listitem = items.map((item)=>(
      <Activeevents data={item}/>
    ));

    return (
        <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar id="2"/>
                    <Topbar id2="2"/>
                    <div className="seller-index-parent">
                       <h1 className="seller-index-container-name">Active Events</h1>
                       <div className="seller-index-container">
                          {listitem}
                       </div>
                    </div>
                </div>
            </div>
    );
}

export default index;