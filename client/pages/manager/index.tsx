//node packages
import React from 'react'
import type { NextPage } from 'next'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import axios from 'axios'
//custom components
import Sidebar from '../../components/manager/Sidebar'
import Navbar from '../../components/Navbar'
import Homepage from '../../components/manager/dashboard/index'
import Categorylist from '../../components/manager/Lists/Categorylist'
import Arealist from '../../components/manager/Lists/Arealist'
import Profile from '../../components/profile/Profile'
import ManagerTopBar from '../../components/manager/ManagerTopBar'
import Popup from '../../components/manager/ticketpopups/Popup'
import Seller from '../../components/manager/tables/Seller'
import SellersTopBar from '../../components/manager/SellersTopBar'
import Auth from '../../components/auth/Auth'
//Session and local storage data
import { gethost } from '../../session/Session';
//stylesheet
import styles from './styles.module.css'

const index: NextPage = function ActiveEvents() {

    const [buyersidebar, setbuyersidebar] = React.useState([{ status: true }, { status: false }, { status: false }, { status: false }]);

    const [itemID, setitemID] = React.useState("1");
    const [itemURL, setitemURL] = React.useState('m/getevent/pending');
    const [items, setitem] = React.useState([])

    const [selleritemID, setselleritemID] = React.useState("0");
    const [selleritemURL, setselleritemURL] = React.useState('m/userlist/all');
    const [selleritems, setselleritem] = React.useState([])

    const [loader, setloader] = React.useState(false);

    React.useEffect(() => {
        console.log("loading call")

    }, [loader])

    React.useEffect(() => {
        axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
            const config = {
                headers: { Authorization: `Bearer ${res.data.accesstoken}` }
            };
            axios.get(gethost() + itemURL, config).then(async (res) => {
                await setitem(res.data)
            })
                .catch(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Database connection error!'
                    })
                })
        })
            .catch((err) => { })

    }, [itemURL])

    React.useEffect(() => {
        setloader(true);
        axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
            const config = {
                headers: { Authorization: `Bearer ${res.data.accesstoken}` }
            };
            await axios.get(gethost() + selleritemURL, config)
                .then(async (res) => {
                    console.log(res.data)
                    setselleritem(res.data);
                    setloader(false);
                })
                .catch(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Database connection error!'
                    })
                })
        })
            .catch((err) => { })
    }, [selleritemURL])

    //component changer
    const selectcomponents = async (e: any) => {
        tabchange(e);
    };

    async function tabchange(id: any) {
        var datapack = [
            { status: id == '1' ? true : false },
            { status: id == '2' ? true : false },
            { status: id == '3' ? true : false },
            { status: id == '4' ? true : false },
        ]
        setbuyersidebar(datapack);
    }

    const changeSellerList = async (e: any) => {
        if (e == 0) {
            setselleritemURL('m/userlist/all');
            setselleritemID("0")
        } else if (e == 1) {
            setselleritemURL('m/userlist/pending');
            setselleritemID("1")
        } else if (e == 2) {
            setselleritemURL('m/userlist/active');
            setselleritemID("2")
        } else if (e == 3) {
            setselleritemURL('m/userlist/declined');
            setselleritemID("3")
        } else if (e == 4) {
            setselleritemURL('m/userlist/unverified');
            setselleritemID("4")
        }
    };

    const changeEventList = async (e: any) => {
        if (e == 1) {
            setitemURL('m/getevent/pending');
            setitemID("1")
        } else if (e == 2) {
            setitemURL('m/getevent/active');
            setitemID("2")
        } else if (e == 3) {
            setitemURL('m/getevent/declined');
            setitemID("3")
        }
    };

    const listitem = items.map((item: any) => (
        <Popup data={item} key={item.id} />
    ));


    return (
        <Auth type={"MANAGER"} >
            <div className={styles.manager_bg}>
                <Navbar />
                <div className={styles.manager_index}>
                    <Sidebar id="1" data={{ change: selectcomponents }} />
                    <div className={styles.manager_index_scroll_set}>

                        {buyersidebar[0].status ?
                            <div>
                                <div className={styles.manager_c_header}>
                                    <h1 >Insigths</h1>
                                </div>
                                <div className={styles.manager_setting_fix}>
                                    <Homepage />
                                </div>
                            </div>
                            : null}

                        {buyersidebar[1].status ?
                            <div>
                                <ManagerTopBar id2={itemID} data={{ change: changeEventList }} />
                                <div className={styles.manager_index_scroll_set}>
                                <div className={styles.manager_c_header}>
                                    <h1 >Events</h1>
                                </div>
                                    <div className={styles.manager_index_container}>
                                        {listitem}
                                    </div>
                                </div>
                            </div>
                            : null}

                        {buyersidebar[2].status ?
                            <div>
                                <div onClick={changeSellerList}><SellersTopBar id3={selleritemID} data={{ change: changeSellerList }} /></div>
                                <div className={styles.manager_sellers_main_container}>
                                <div className={styles.manager_c_header}>
                                    <h1 >Sellers</h1>
                                </div>
                                    <div className={styles.manager_sellers_main_container}>
                                        {loader ? null : <Seller data={selleritems} />}
                                    </div>
                                </div>
                            </div>
                            : null}

                        {buyersidebar[3].status ?
                            <div className={styles.manager_index_scroll_set}>
                                <div className={styles.manager_c_header}>
                                    <h1 >Settings</h1>
                                </div>
                                <div className={styles.manager_settings_container}>
                                    <Profile />
                                    <div className={styles.manager_settings_container_listinput_container}>
                                        <div className={styles.manager_settings_container_listinput_container_left}>
                                            <Arealist />
                                        </div>
                                        <div className={styles.manager_settings_container_listinput_container_right}>
                                            <Categorylist />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null}

                    </div>
                </div>
            </div>
        </Auth>
    );
}

export default index;