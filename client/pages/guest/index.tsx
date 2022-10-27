//node packages
import React from 'react'
import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import axios from 'axios';
import Swal from 'sweetalert2'
import classnames from 'classnames';
import GuestAuth from '../../components/auth/Guest-Auth';
import Navbar from '../../components/Navbar';
import Guest from '../../components/guest/guestevent';
import styles from './styles.module.scss'



const guest: NextPage = () => {

    return(

        <GuestAuth>
         <div className={classnames(styles.buyer_bg)}>
                <Navbar/>
          </div>      
          <div className={styles.guestevent_container}>
              <div className='card'>

              </div>

              <Guest/>
              <Guest/>
              <Guest/>

          </div>
        </GuestAuth>

    
    );
    
}

export default guest;