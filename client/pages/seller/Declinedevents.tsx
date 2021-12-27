import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Topbar from '../../components/seller/Topbar'
import Declinedevents from '../../components/seller/Declinedevents'
import axios from 'axios'
import {gethost} from '../../session/Session'

const index: NextPage = () => {

    const [items, setitem] = React.useState([])
    React.useEffect(()=>{
      axios.get(gethost()+'seller/declined/61842a1e0ec95f011fdc3bcf')
      .then(async (res)=>{
        await setitem(res.data)
      })
        
    },[])

    const listitem = items.map((item)=>(
      <Declinedevents data={item}/>
    ));

    return (
        <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar id="2"/>
                    <Topbar id2="4"/>
                    <div className="seller-index-parent-fix">
                    <div className="seller-index-parent">
                       <h1 className="seller-index-container-name">Declined Events</h1>
                       <div className="seller-index-container">
                        {listitem}
                       </div>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default index;