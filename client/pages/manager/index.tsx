//node packages
import React, { useState } from 'react'
import type { NextPage } from 'next'
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
import { Button } from '@mui/material'

const index: NextPage = function ActiveEvents() {

    const [buyersidebar, setbuyersidebar] = React.useState([{ status: false }, { status: true }, { status: false }, { status: false }]);

    const [itemID, setitemID] = React.useState("1");
    const [itemURL, setitemURL] = React.useState('m/getevent/pending');
    const [items, setitem] = React.useState([])

    const [selleritemID, setselleritemID] = React.useState("0");
    const [selleritemURL, setselleritemURL] = React.useState('m/userlist/all');
    const [selleritems, setselleritem] = React.useState([])

    //Load more
    const [loader, setloader] = React.useState(false);

    const [visible, setVisible] = useState(18);
    const [nextCount, setNextCount] = useState(12);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + nextCount);
    };

    //Load More Button Responsiveness
    function screenSizeDetect() {
        if (window.matchMedia("(max-width : 1775px)").matches) {
            setVisible(12);
            setNextCount(8);
          }
          if (window.matchMedia("(max-width : 1300px)").matches) {
            setVisible(9);
            setNextCount(6);
          }
          if (window.matchMedia("(max-width : 1246px)").matches) {
            setVisible(6);
            setNextCount(6);
          }
          if (window.matchMedia("(max-width : 500px)").matches) {
            setVisible(4);
            setNextCount(4);
          }
    }

    React.useEffect(() => {
        screenSizeDetect();

    }, [loader])

    React.useEffect(() => {
        axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
            const config = {
                headers: { Authorization: `Bearer ${res.data.accesstoken}` }
            };
            axios.get(gethost() + itemURL, config).then(async (res) => {
                await setitem(res.data)
            })
                .catch(async () => {
                    await setitem([])
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
                    setselleritem(res.data);
                    setloader(false);
                })
                .catch(() => { })
        })
            .catch((err) => { })
    }, [selleritemURL])

    //component changer
    const selectcomponents = async (e: any) => {
        tabchange(e);
    };


    //component crefresh
    const refresh = async (e: any) => {
        axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
            const config = {
                headers: { Authorization: `Bearer ${res.data.accesstoken}` }
            };
            await axios.get(gethost() + selleritemURL, config)
                .then(async (res) => {
                    setselleritem(res.data);
                    setloader(false);
                })
                .catch(() => { })
        })
            .catch((err) => { })
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

    const listitem = items.slice(0, visible).map((item: any) => (
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
                                        <div className={styles.manager_index_loadmore_button}>
                                            {listitem.length >= visible ? <Button variant="text" onClick={showMoreItems}>..Load More..</Button> : null}
                                        </div>
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
                                        {loader ? null : <Seller data={selleritems} refresh={{ change: refresh }} />}
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