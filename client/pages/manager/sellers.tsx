import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import SellersTopBar from '../../components/manager/SellersTopBar'
import Swal from 'sweetalert2'
import axios from 'axios'
import { gethost } from '../../session/Session';
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import Seller from '../../components/manager/tables/Seller'

interface pendingsellersProps {

}

const pendingsellers: NextPage = function ActiveEvents() {
    const [open, setopen] = React.useState(false);
    const [items, setitem] = React.useState([]);
    const [itemURL, setitemURL] = React.useState('m/userlist/all');
    const [itemID, setitemID] = React.useState("0");
    const router = useRouter();
   

    React.useEffect(() => {
        setopen(false);
        axios.get(gethost() + 'a/refreshtoken', { withCredentials: true })
            .then(async (res) => {
                if (res.data.type == 'BUYER') {
                    router.push('/buyer');
                } else if (res.data.type == 'MANAGER') {
                    const config = {
                        headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                    };
                    await axios.get(gethost() + itemURL,config)
                        .then(async (res) => {
                            setitem(res.data); 
                            setopen(true);
                        })
                        .catch(() => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Database connection error!'
                            })
                        })
                } else if (res.data.type == 'SELLER') {
                    router.push('/seller');
                } else {
                    router.push('/user');
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Authentication Failed',
                    text: 'Please Login to your account',
                    showConfirmButton: false,
                    timer: 2500
                })
                router.push('/user');
            })
    }, [itemURL])


    const changeSellerList = async(e:any)=>{
        if(e == 0){
            setitemURL('m/userlist/all');
            setitemID("0")
        }else if(e == 1){
            setitemURL('m/userlist/pending');
            setitemID("1")
        }else if(e == 2){
            setitemURL('m/userlist/active');
            setitemID("2")
        }else if(e == 3){
            setitemURL('m/userlist/declined');
            setitemID("3")
        }else if(e == 4){
            setitemURL('m/userlist/unverified');
            setitemID("4")
        }
      };
    return (
        <div className={styles.manager_settings_bg}>
            {open ? <div>
                <Navbar />
                <div className={styles.manager_index}>
                    <Sidebar id='3' />
                    <div onClick={changeSellerList}><SellersTopBar id3={itemID} data={{change: changeSellerList}}/></div>
                    <div className={styles.manager_sellers_main_container}>
                        <h1>Pending Sellers</h1>
                        <div className={styles.manager_sellers_main_container}>
                            <Seller data={items} />
                        </div>
                    </div>
                </div>
            </div> : null}
        </div>
    );
}



export default pendingsellers;