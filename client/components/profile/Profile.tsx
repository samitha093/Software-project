import React from 'react'
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import next from '../../assets/icons/next.png'
import Progressbar_light from '../analytics/Progressbars'
import styles from './Styles.module.scss'
import Account from './Account'
import Security from './Security'
import Advance from './Advance'
import axios from 'axios';
import Swal from 'sweetalert2'
import {gethost} from '../../session/Session';

function Profile() {
    const [openAccount, setopenAccount] = React.useState(true);
    const [openSecurity, setopenSecurity] = React.useState(false);
    const [openAdvance, setopenAdvance] = React.useState(false);
    const [items, setitems] = React.useState<any[]>([])
    const submitotp = () => {
        console.log('otp');
    };
    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
          //create a headet pack
          const config = {
            headers: { Authorization: `Bearer ${res.data.accesstoken}` }
          };
          await axios.get(gethost() + 'a/mydata',config).then(async (res)=>{
            await setitems(res.data)
            console.log(res.data)
          })
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: err,
            showConfirmButton: false,
            timer: 2500
          })
        })
      },[])
  return (
    <div className={styles.profile_container}>
        <div className={styles.profile_container_bg}>
            <div className={styles.profile_container_bg_left}>
                <div className={styles.profile_card}>
                    <div className={styles.profile_card_container}>
                        <div className={styles.profile_card_left}>
                            <Progressbar_light data={{progress : 70}}/>
                        </div>
                        <div className={styles.profile_card_right}>
                            <h3>Profile Informations</h3>
                            <p>Complete your profile to unlock all features</p>
                            <p>User Type : Seller</p>
                            <p>Unverified User Account</p>
                        </div>                      
                    </div>
                    <div className={styles.profile_card_container_footer}>
                        <h3><div onClick={submitotp}>Verify My Account</div></h3>
                    </div>
                </div>
                <div className={styles.profile_card_menu}>
                    <div className={styles.profile_card_menu_container}>
                        <div className={styles.profile_card_menu_item} onClick={(e)=>{setopenSecurity(false),setopenAdvance(false),setopenAccount(true)}}>
                            <div className={styles.profile_card_menu_item_left}>
                                <Avatar/>
                            </div>
                            <div className={styles.profile_card_menu_item_center}>
                                <h3>Account Settings</h3>
                                Change Personal Informations
                            </div>
                            <div className={styles.profile_card_menu_item_right}>
                                <Image src = {next} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
                            </div>
                        </div>
                        <div className={styles.profile_card_menu_item} onClick={(e)=>{setopenAccount(false),setopenSecurity(true),setopenAdvance(false)}}>
                            <div className={styles.profile_card_menu_item_left}>
                                <Avatar/>
                            </div>
                            <div className={styles.profile_card_menu_item_center}>
                                <h3>Security</h3>
                                Change Passwords
                            </div>
                            <div className={styles.profile_card_menu_item_right}>
                                <Image src = {next} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
                            </div>
                        </div>
                        <div className={styles.profile_card_menu_item} onClick={(e)=>{setopenAdvance(true),setopenSecurity(false),setopenAccount(false)}}>
                            <div className={styles.profile_card_menu_item_left}>
                                <Avatar/>
                            </div>
                            <div className={styles.profile_card_menu_item_center}>
                                <h3>Advance Settings</h3>
                                Deactivate or delete Account
                            </div>
                            <div className={styles.profile_card_menu_item_right}>
                                <Image src = {next} layout = "responsive" objectFit="cover" m-50="true" alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.profile_container_bg_right}>
                {openAccount?<Account data={items}/>:null}
                {openSecurity?<Security/>:null}
                {openAdvance?<Advance/>:null}
            </div>
        </div>
    </div>
  )
}

export default Profile