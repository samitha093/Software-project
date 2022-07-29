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

const pendingsellers: NextPage = () => {
    const [open, setopen] = React.useState(false);
    const router = useRouter();
    const [items, setitem] = React.useState([])

    React.useEffect(() => {
        axios.get(gethost() + 'a/refreshtoken', { withCredentials: true })
            .then(async (res) => {
                if (res.data.type == 'BUYER') {
                    router.push('/buyer');
                } else if (res.data.type == 'MANAGER') {
                    setopen(true);
                    //create a headet pack
                    const config = {
                        headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                    };
                    axios.get(gethost() + 'm/pendingsellerlist',config)
                        .then(async (res) => {
                            await setitem(res.data)
                            console.log(res.data);
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
    }, [])
    const changeSellerList = () => {
        console.log("fsdfj");
    };
    const rows = [
        { "id": "14gsd54a3sfdc", "name": "Ram", "email": "ram@gmail.com", "type": "SELLER", "status": "PENDING", "date": "23-04-2022" },
        { "id": "14gsd54e3sfdc", "name": "Shyam", "email": "shyam23@gmail.com", "type": "SELLER", "status": "ACTIVE", "date": "23-04-2022" },
        { "id": "14gsd54a3shdc", "name": "John", "email": "john@gmail.com", "type": "BUYER", "status": "DEACTIVE", "date": "23-04-2022" },
        { "id": "14gsd54a6sfdc", "name": "Bob", "email": "bob32@gmail.com", "type": "SELLER", "status": "ACTIVE", "date": "23-04-2022" },
        { "id": "14gsd54a6sfdc", "name": "Bob", "email": "bob32@gmail.com", "type": "SELLER", "status": "PENDING", "date": "23-04-2022" },
        { "id": "14gsd54a6sfdc", "name": "Bob", "email": "bob32@gmail.com", "type": "SELLER", "status": "PENDING", "date": "23-04-2022" }
    ];
    return (
        <div className={styles.manager_settings_bg}>
            {open ? <div>
                <Navbar />
                <div className={styles.manager_index}>
                    <Sidebar id='3' />
                    <div onClick={changeSellerList}><SellersTopBar id3='1' /></div>
                    <div className={styles.manager_sellers_main_container}>
                        <h1>Pending Sellers</h1>
                        <div className={styles.manager_sellers_main_container}>
                            <Seller data={rows} />
                        </div>
                    </div>
                </div>
            </div> : null}
        </div>
    );
}

export default pendingsellers;