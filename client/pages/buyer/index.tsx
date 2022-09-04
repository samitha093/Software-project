//node packages
import React, { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios';
import Swal from 'sweetalert2'
import classnames from 'classnames';
//Session and local storage data
import { gethost } from '../../session/Session';
//custom components
import Sidebar from '../../components/buyer/Sidebar'
import Navbar from '../../components/Navbar'
import { Button } from '@mui/material'
import Ticketvalid from '../../components/buyer/Ticketvalid'
import Ticketunvalid from '../../components/buyer/Ticketunvalid'
import Profile from '../../components/profile/Profile'
import Auth from '../../components/auth/Auth'
//stylesheet
import styles from './styles.module.scss'

const index: NextPage = () => {
  //component loader
  const [buyersidebar, setbuyersidebar] = React.useState([{ status: true }, { status: false }, { status: false }, { status: false }, { status: false }]);

  //pre loaded data
  const [mticket, setmticket] = React.useState<any[]>([]);
  const [ppticket, setppticket] = React.useState<any[]>([]);
  const [pbticket, setpbticket] = React.useState<any[]>([]);
  const [moticket, setmoticket] = React.useState<any[]>([]);

  //Lazy Loading Effect
  const [visible, setVisible] = useState(18);
  const [nextCount, setNextCount] = useState(12);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + nextCount);
  };

  //Load More Button Responsiveness
  function screenSizeDetect() {
    if (window.matchMedia("(max-width : 1920px)").matches) {
      setVisible(15);
      setNextCount(10);
    }
    if (window.matchMedia("(max-width : 1300px)").matches) {
      setVisible(12);
      setNextCount(8);
    }
    if (window.matchMedia("(max-width : 1246px)").matches) {
      setVisible(9);
      setNextCount(6);
    }
    if (window.matchMedia("(max-width : 976px)").matches) {
      setVisible(6);
      setNextCount(6);
    }
    if (window.matchMedia("(max-width : 707px)").matches) {
      setVisible(3);
      setNextCount(3);
    }
  }

  React.useEffect(() => {
    screenSizeDetect();

  }, [])

  React.useEffect(() => {
    axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
      //create a headet pack
      const config = {
        headers: { Authorization: `Bearer ${res.data.accesstoken}` }
      };
      axios.get(gethost() + 'b/gettickets/mt', config).then(async (res) => {
        setmticket(res.data);
      }).catch((err) => { })
      axios.get(gethost() + 'b/gettickets/pp', config).then(async (res) => {
        setppticket(res.data);
      }).catch((err) => { })
      axios.get(gethost() + 'b/gettickets/pb', config).then(async (res) => {
        setpbticket(res.data);
      }).catch((err) => { })
      axios.get(gethost() + 'b/gettickets/ot', config).then(async (res) => {
        setmoticket(res.data);
      }).catch((err) => { })
    }).catch((err) => { })
  }, [])


  //valid ticket list
  const mytickets = mticket.slice(0, visible).map((itemdata: any) => (
    <div key={itemdata.id}>
      <Ticketvalid level={itemdata.ticket_level} type="1" data={itemdata} />
    </div>
  ));
  //panding payment ticket list
  const myppticket = ppticket.map((itemdata: any) => (
    <div key={itemdata.id}>
      <Ticketvalid level={itemdata.ticket_level} type="2" data={itemdata} />
    </div>
  ));
  //pending bid ticket list
  const mypbticket = pbticket.map((itemdata: any) => (
    <div key={itemdata.id}>
      <Ticketunvalid level={itemdata.ticket_level} type="3" data={itemdata} />
    </div>
  ));
  //old or expire ticket list
  const myoldtickets = moticket.map((itemdata: any) => (
    <div key={itemdata.id}>
      <Ticketvalid level={itemdata.ticket_level} type="4" data={itemdata} />
    </div>
  ));

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
      { status: id == '5' ? true : false }
    ]
    setbuyersidebar(datapack);
  }

  return (
    <Auth type={"BUYER"}>
      <div className={styles.buyer_bg}>
        <div>
          <Navbar />
          <div className={styles.buyer_index}>
            <Sidebar id="1" data={{ change: selectcomponents }} />
            {buyersidebar[4].status ?
              <div className={classnames(styles.buyer_setting, styles.buyer_index_container_parent)}>
                <h1 className={styles.buyer_index_container_title}>Settings</h1>
                <div className={styles.buyer_setting_container}>
                  <Profile />
                </div>
              </div>
              :
              <div className={styles.buyer_index_container_parent}>
                <h1 className={styles.buyer_index_container_title}>Tickets</h1>
                <div className={styles.buyer_index_container_d2}>
                  <div className={styles.buyer_index_container}>
                    {buyersidebar[0].status ? mytickets : buyersidebar[1].status ? myppticket : buyersidebar[2].status ? mypbticket : buyersidebar[3].status ? myoldtickets : null}
                    <div className={styles.buyer_index_loadmore_button}>
                      {((mytickets.length >= visible) && (buyersidebar[0].status)) ? <Button variant="text" onClick={showMoreItems}>..Load More..</Button> : null}
                      {((myppticket.length >= visible) && (buyersidebar[1].status)) ? <Button variant="text" onClick={showMoreItems}>..Load More..</Button> : null}
                      {((mypbticket.length >= visible) && (buyersidebar[2].status)) ? <Button variant="text" onClick={showMoreItems}>..Load More..</Button> : null}
                      {((myoldtickets.length >= visible) && (buyersidebar[3].status)) ? <Button variant="text" onClick={showMoreItems}>..Load More..</Button> : null}
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </Auth>
  );
}

export default index;