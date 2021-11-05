import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Declinedevents from '../../components/seller/Declinedevents'
import axios from 'axios'

const index: NextPage = () => {

    const [item, setitem] = React.useState([])
    React.useEffect(()=>{
      axios.get('http://localhost:8000/seller/declined/61842a1e0ec95f011fdc3bcf')
      .then(async (res)=>{
        await setitem(res.data)
        console.log(res.data)
      })
        
    },[])

    return (
        <div className="seller-bg">
                <Navbar/>
                <div className="seller-index">
                    <Sidebar/>
                    <div>
                       <h1>Declined Events</h1>
                       <div className="seller-index-container">
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                            <Declinedevents/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default index;