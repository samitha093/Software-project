import React from 'react'
import Image from 'next/image';
import user from '../../assets/icons/man.png'
import TextField from '@mui/material/TextField';
import styles from './Styles.module.scss'
import axios from 'axios';
import Swal from 'sweetalert2'
import {gethost} from '../../session/Session';

interface AccountProps {
  data:any,
}

const Account: React.FC<AccountProps> = ({data}) => {
  const [items, setitems] = React.useState<any>()
  React.useEffect(()=>{
   setitems(data);
   console.log(data)
  },[])
  return (
    <div>
      <h3>Account Settings</h3>
      <div className={styles.account_profile_card}>
        <div className={styles.account_profile_card_container}>
          <div className={styles.account_profile_card_container_left}>
              <div className={styles.account_profile_card_container_left_img}><Image className={styles.account_profile_card_container_left_img_icon} src = {user} layout = "responsive" objectFit="cover" m-50="true" alt=''/></div>
          </div>
          <div className={styles.account_profile_card_container_right}>
            <h1>{data.username}</h1>
            {data.email}
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.account_profile_container}>
          <h1>Personal Information</h1>
          you should verify your email before change this details.
          <div className={styles.account_profile_container_form}>
            <div className={styles.account_profile_container_form_section1}>
                <div className={styles.account_profile_container_form_section1_left}>
                    First Name
                    <br></br>
                    <TextField fullWidth
                      id="filled-read-only-input"
                      defaultValue={data.username}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                </div>
                <div className={styles.account_profile_container_form_section1_right}>
                    Last Name
                    <br></br>
                    <TextField fullWidth
                      id="filled-read-only-input"
                      defaultValue=""
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                </div>
            </div>
            <div className={styles.account_profile_container_form_section2}>
              Email Address
              <br></br>
              <TextField fullWidth
                id="filled-read-only-input"
                defaultValue={data.email}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </div>
            <div className={styles.account_profile_container_form_section3}>
              <div className={styles.account_profile_container_form_section3_left}>
                  
              </div>
              <div className={styles.account_profile_container_form_section3_right}>
                <div className={styles.account_profile_container_form_section3_right_btn}>
                  Save Changes
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}



export default Account



